// src/services/consolasService.js
// Todas las operaciones con la tabla "consolas" en Supabase
import { supabase } from "../lib/supabase";

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Construye la query base: solo productos activos.
 */
const baseQuery = () =>
  supabase.from("consolas").select("*").eq("activo", true);

// ── READ ─────────────────────────────────────────────────────────────────────

/**
 * Obtiene todas las consolas activas.
 * @returns {{ data: Consola[], error: Error|null }}
 */
export async function getConsolas() {
  const { data, error } = await baseQuery().order("creado_en", { ascending: true });
  return { data, error };
}

/**
 * Obtiene una consola por id.
 */
export async function getConsolaById(id) {
  const { data, error } = await baseQuery().eq("id", id).single();
  return { data, error };
}

/**
 * Búsqueda + filtros equivalentes a FiltroConsolas.
 *
 * @param {object} filtros
 * @param {string}   filtros.busqueda        - texto libre sobre título
 * @param {string[]} filtros.consolas        - marcas seleccionadas ([] = todas)
 * @param {string}   filtros.tipo            - "default" | "recientes" | "exclusivos" | "limitados"
 */
export async function getConsolasFiltradas({ busqueda = "", consolas = [], tipo = "default" } = {}) {
  let query = baseQuery();

  // Filtro de texto (ilike = case-insensitive)
  if (busqueda.trim()) {
    query = query.ilike("titulo", `%${busqueda.trim()}%`);
  }

  // Filtro por marca/consola
  if (consolas.length > 0) {
    query = query.in("consola", consolas);
  }

  // Filtros booleanos
  if (tipo === "exclusivos") query = query.eq("exclusivo", true);
  if (tipo === "limitados")  query = query.eq("limitada", true);

  // Ordenamiento
  const ascending = tipo !== "recientes"; // recientes → más nuevo primero
  query = query.order("creado_en", { ascending });

  const { data, error } = await query;
  return { data, error };
}

// ── CREATE ────────────────────────────────────────────────────────────────────

/**
 * Crea un nuevo producto.
 * @param {Omit<Consola, 'id'|'creado_en'|'actualizado_en'>} producto
 * Campos: titulo, consola, descripcion, precio, imagen, exclusivo, limitada, stock
 */
export async function createConsola(producto) {
  const { data, error } = await supabase
    .from("consolas")
    .insert([producto])
    .select()
    .single();
  return { data, error };
}

// ── UPDATE ────────────────────────────────────────────────────────────────────

/**
 * Actualiza campos de un producto existente.
 * @param {number|string} id
 * @param {Partial<Consola>} campos
 */
export async function updateConsola(id, campos) {
  const { data, error } = await supabase
    .from("consolas")
    .update(campos)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
}

// ── STOCK ─────────────────────────────────────────────────────────────────────

/**
 * Descuenta 1 unidad del stock. Llámalo al agregar al carrito.
 * No permite bajar de 0.
 * @param {number|string} id
 * @param {number} cantidad - cuántas unidades descontar (default 1)
 */
export async function decrementarStock(id, cantidad = 1) {
  const { data: producto, error: fetchError } = await getConsolaById(id);
  if (fetchError) return { data: null, error: fetchError };

  const nuevoStock = Math.max(0, producto.stock - cantidad);
  return updateConsola(id, { stock: nuevoStock });
}

/**
 * Suma unidades al stock. Útil al quitar del carrito o recibir mercancía.
 * @param {number|string} id
 * @param {number} cantidad - cuántas unidades sumar (default 1)
 */
export async function incrementarStock(id, cantidad = 1) {
  const { data: producto, error: fetchError } = await getConsolaById(id);
  if (fetchError) return { data: null, error: fetchError };

  return updateConsola(id, { stock: producto.stock + cantidad });
}

// ── DELETE (soft) ─────────────────────────────────────────────────────────────

/**
 * Desactiva (soft-delete) un producto. No lo borra físicamente.
 * @param {number|string} id
 */
export async function deleteConsola(id) {
  return updateConsola(id, { activo: false });
}

// ── STORAGE (imágenes) ────────────────────────────────────────────────────────

const BUCKET = "consolas-imagenes";

/**
 * Sube una imagen al bucket de Storage y devuelve la URL pública.
 * @param {File}   file      - objeto File del input
 * @param {string} fileName  - nombre con el que se guardará (ej: "ps5-standard.jpg")
 * @returns {{ url: string|null, error: Error|null }}
 */
export async function uploadImagen(file, fileName) {
  const path = `productos/${Date.now()}-${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, { upsert: true });

  if (uploadError) return { url: null, error: uploadError };

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { url: data.publicUrl, error: null };
}