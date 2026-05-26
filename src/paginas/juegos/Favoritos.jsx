import { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext";
import CardJuego from "../../components/CardJuego";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div className="min-h-screen bg-[#0f172a] p-10">
      <h1
        className="
          text-4xl
          font-bold
          text-[#00ffc3]
          mb-10
        "
      >
        ❤️ Tus favoritos
      </h1>

      {favoritos.length === 0 ? (
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            mt-20
            text-center
          "
        >
          <div className="text-7xl mb-5">💔</div>

          <h2 className="text-3xl text-white font-bold">No tienes favoritos</h2>

          <p className="text-gray-400 mt-3">Agrega juegos para verlos aquí</p>
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          {favoritos.map((juego) => (
            <CardJuego key={juego.id} juego={juego} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
