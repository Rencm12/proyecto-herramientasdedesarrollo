import Carousel from "../../components/Carrusel";
import img1 from "../../assets/carrusel1-consola.jpg";
import img2 from "../../assets/carrusel2-consola.png";
import img3 from "../../assets/carrusel3-consola.jpg";

function Caruselconsola(){
    const imagenes = [img1, img2, img3];

    return (
        <Carousel slides={imagenes} />
    );
}
export default Caruselconsola;