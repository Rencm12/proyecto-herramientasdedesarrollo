// src/pages/consolas/Cards.jsx  ← reemplaza el archivo actual
import Card          from "./Card-consola";
import FiltroConsolas from "./Filtro-consola";
import { useConsolas } from "../../../backend/hook/Useconsola";

function Consolas() {
  const { productos, loading, error, filtros, setFiltros } = useConsolas();

  return (
    <div className="flex gap-8 p-8">
      <FiltroConsolas
        productos={productos}
        filtros={filtros}
        setFiltros={setFiltros}
      />

      <div className="flex-1">

        {/* Estado de carga */}
        {loading && (
          <div className="flex items-center justify-center h-64">
            <span className="text-[#00ffc3] text-lg animate-pulse">
              Cargando consolas...
            </span>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-400 text-center">
              ⚠️ {error}
            </p>
          </div>
        )}

        {/* Sin resultados */}
        {!loading && !error && productos.length === 0 && (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-center">
              No se encontraron consolas con los filtros aplicados.
            </p>
          </div>
        )}

        {/* Grid de productos */}
        {!loading && !error && productos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Consolas;