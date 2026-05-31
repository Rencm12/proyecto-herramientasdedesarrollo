import CarruselHome from "./CarruselHome";

import accesorios from "../../data/accesorios";

import juegos from "../../data/juegos";
import consola from "../../data/consola";

import CardJuego from "../../components/CardJuego";
import CardAccesorio from "../../components/card-accesorio";
import Card from "../consola/Card-consola";

function Home() {

  const juegosDestacados = juegos.slice(0, 3);

  const consolasDestacadas = consola.slice(0, 4);

  const accesoriosDestacados = accesorios.slice(0, 4);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white">

      {/* HERO / BANNER */}
      <CarruselHome />

      {/* BIENVENIDA */}
      <section className="text-center py-16 px-5">

        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            text-[#00ffc3]
            mb-6
          "
        >
          GameHub: El arsenal definitivo para el verdadero gamer.
        </h1>

        <p
          className="
            text-gray-300
            max-w-3xl
            mx-auto
            text-lg
            leading-8
          "
        >
          "Bienvenidos a GameHub, el punto de encuentro creado por y para gamers. No solo vendemos consolas, videojuegos y accesorios; alimentamos tu lado geek con el mejor coleccionismo. Sube de nivel tu experiencia y sumérgete en tu próxima gran aventura."
        </p>

      </section>

      {/* JUEGOS DESTACADOS */}
      <section className="px-8 py-10">

        <h2
          className="
            text-4xl
            font-bold
            text-[#00ffc3]
            mb-10
            text-center
          "
        >
          Juegos Destacados
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {juegosDestacados.map((juego) => (
            <CardJuego
              key={juego.id}
              juego={juego}
            />
          ))}
        </div>

      </section>

      {/* CONSOLAS */}
      <section className="px-8 py-10">

        <h2
          className="
            text-4xl
            font-bold
            text-[#00ffc3]
            mb-10
            text-center
          "
        >
          Consolas Destacadas
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {consolasDestacadas.map((producto) => (
            <Card
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>

      </section>

      <section className="px-8 py-10">

  <h2
    className="
      text-4xl
      font-bold
      text-[#00ffc3]
      mb-10
      text-center
    "
  >
    Accesorios Destacados
  </h2>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-8
    "
  >
    {accesoriosDestacados.map((producto) => (
      <CardAccesorio
        key={producto.id}
        producto={producto}
      />
    ))}
  </div>

</section>

      {/* FOOTER */}
      <footer
        className="
          bg-black
          border-t
          border-[#00ffc3]
          py-10
          px-8
          mt-10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
          "
        >

          <div>
            <h3 className="text-[#00ffc3] text-2xl font-bold mb-4">
              GameHub
            </h3>

            <p className="text-gray-400">
              Tu universo gamer definitivo.
            </p>
          </div>

          <div>
            <h3 className="text-[#00ffc3] text-xl font-bold mb-4">
              Contacto
            </h3>

            <p className="text-gray-400">
              soporte@gamehub.com
            </p>

            <p className="text-gray-400">
              +51 999 999 999
            </p>
          </div>

          <div>
            <h3 className="text-[#00ffc3] text-xl font-bold mb-4">
              Suscríbete
            </h3>

            <div className="flex gap-3">

              <input
                type="email"
                placeholder="Tu correo"
                className="
                  flex-1
                  bg-[#111827]
                  border
                  border-[#00ffc3]
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                "
              />

              <button
                className="
                  bg-[#00ffc3]
                  text-black
                  px-5
                  rounded-xl
                  font-bold
                "
              >
                Ir
              </button>

            </div>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-10">
          © 2026 GameHub
        </p>

      </footer>

    </div>
  );
}

export default Home;