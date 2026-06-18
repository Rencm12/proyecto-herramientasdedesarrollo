import { Link } from "react-router-dom";
import { BookOpenCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        bg-black
        border-t
        border-[#5C7CFA]
        py-10
        px-8
        mt-0
      "
    >
      <div
        className="
          max-w-full
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-4
          gap-10
        "
      >
        {/* Logo */}
        <div>
          <h3 className="text-[#86E1FF] text-2xl font-bold mb-4">GameHub</h3>

          <p className="text-gray-400">Tu universo gamer definitivo.</p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-[#86E1FF] text-xl font-bold mb-4">Contacto</h3>

          <p className="text-gray-400">soporte@gamehub.com</p>

          <p className="text-gray-400">+51 999 999 999</p>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="text-[#86E1FF] text-xl font-bold mb-4">Conócenos</h3>

          <p className="text-gray-400 mb-4">
            Descubre quiénes somos y la pasión gamer que impulsa GameHub.
          </p>

          <Link to="/nosotros">
            <button
              className="
                bg-[#86E1FF]
                text-black
                px-6
                py-3
                rounded-xl
                font-bold
                hover:bg-[#5C7CFA] hover:text-white
                transition
              "
            >
              Ir a Nosotros
            </button>
          </Link>
        </div>

        {/* Libro de Reclamaciones */}
        <div>
          <h3 className="text-[#86E1FF] text-xl font-bold mb-4">
            Atencion al Cliente
          </h3>

          <p className="text-gray-400 mb-4">
            Registra un reclamo o queja sobre tu experiencia en GameHub.
          </p>

          <Link
            to="/libro-reclamaciones"
            className="
              inline-flex
              items-center
              gap-2
              bg-transparent
              border
              border-[#86E1FF]
              text-[#86E1FF]
              px-5
              py-3
              rounded-xl
              font-bold
              hover:bg-[#5C7CFA] hover:text-white
              hover:text-black
              transition
            "
          >
            <BookOpenCheck size={20} />
            Libro de Reclamaciones
          </Link>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">© 2026 GameHub</p>
    </footer>
  );
};

export default Footer;
