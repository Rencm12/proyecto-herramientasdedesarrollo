import { useState } from "react";
// Importamos los íconos de flechas de tu librería instalada
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgCarrusel1 from "../../assets/accesorios/carrusel1-accesorios.png";
import imgCarrusel2 from "../../assets/accesorios/carrusel2-accesorios.png";
import imgCarrusel3 from "../../assets/accesorios/carrusel3-accesorios.jpg";

function CarruselAccesorios() {
  const imagenes = [imgCarrusel1, imgCarrusel2, imgCarrusel3];

  // 2. Estado para saber qué índice de la imagen se está mostrando
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Lógica de las flechas
  const anterior = () => {
    const esElPrimero = currentIndex === 0;
    const nuevoIndex = esElPrimero ? imagenes.length - 1 : currentIndex - 1;
    setCurrentIndex(nuevoIndex);
  };

  const siguiente = () => {
    const esElUltimo = currentIndex === imagenes.length - 1;
    const nuevoIndex = esElUltimo ? 0 : currentIndex + 1;
    setCurrentIndex(nuevoIndex);
  };

  return (
    <div className="relative w-full max-w-[1300px] mx-auto group mb-8">
      
      {/* Contenedor de la Imagen Principal */}
      <div className="overflow-hidden rounded-2xl w-full">
        <img
          src={imagenes[currentIndex]}
          alt={`Banner Accesorio ${currentIndex + 1}`}
          className="w-full h-auto object-cover transition-all duration-500"
        />
      </div>

      {/* Flecha Izquierda */}
      <button
        onClick={anterior}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-[#00ffc3] hover:text-black transition cursor-pointer"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={siguiente}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-[#00ffc3] hover:text-black transition cursor-pointer"
      >
        <ChevronRight size={30} />
      </button>

      {/* Puntos indicadores inferiores (opcionales pero se ven geniales) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {imagenes.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-[#00ffc3] w-8" : "bg-white/50 w-2"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default CarruselAccesorios;