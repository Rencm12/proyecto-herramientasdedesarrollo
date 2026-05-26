function Toast({ mensaje }) {

  if (!mensaje) return null;

  return (

    <div
      className="
        fixed
        top-5
        right-5
        bg-[#111827]
        border
        border-[#00ffc3]
        text-white
        px-5
        py-4
        rounded-xl
        shadow-[0_0_20px_rgba(0,255,195,0.5)]
        z-[9999]
        animate-[fadeIn_0.3s_ease]
      "
    >

      <div className="flex items-center gap-3">

        <span className="text-2xl">
          🛒
        </span>

        <div>

          <p className="font-bold text-[#00ffc3]">
            Carrito
          </p>

          <p className="text-sm text-gray-300">
            {mensaje}
          </p>

        </div>

      </div>

    </div>

  );

}

export default Toast;