import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import plantando from "../img/plantando.jpg";
import plantando2 from "../img/plantando2.jpg";
import plantando3 from "../img/plantando3.jpg";


const Index = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center m-0 2xl:px-20 lg:px-18 sm:px-6">

      {/* Columna del texto */}
      <div className="flex flex-col lg:w-1/2 m-0 justify-center px-10">
        <span className="font-serif font-bold lg:text-5xl text-3xl text-gray-700 text-center m-1">
          <h1>¡Bienvenido a</h1> 
        </span>
        <span className="font-serif font-bold text-6xl text-center text-lime-700 mt-2">
          <h1>GreenBottle!</h1>
        </span>
        <span className="font-serif font-light text-lg mt-10 text-gray-600 text-justify">
        Somos una organización comprometida con el medio ambiente y la conservación de nuestros recursos naturales. En GreenBottle, creemos en la importancia de tomar medidas concretas para enfrentar los desafíos ambientales de nuestro tiempo. Es por eso que hemos creado una iniciativa innovadora que combina la reutilización de botellas de plástico con la plantación de árboles en toda Argentina.
        </span>
        <span className="font-serif font-bold lg:text-3xl text-3xl mt-10 text-gray-700 text-left ">
          <h1>Nuestra Mision:</h1> 
        </span>
        <span className="font-serif font-light text-lg mt-5  text-gray-600 text-justify">
        Enfrentar el problema global del plástico de un modo local y tangible es nuestro principal objetivo. Cada botella de plástico que recolectamos se convierte en una oportunidad para restaurar y preservar nuestro precioso entorno natural. Con cada botella que recogemos, estamos un paso más cerca de alcanzar nuestra meta de reforestación y mitigar el impacto del cambio climático. ¿Cómo Funciona?
        </span>
        <p className="self-center text-white bg-lime-700 w-48 font-bold py-2 px-4 rounded m-4 text-center hover:bg-transparent hover:text-lime-900 border-2 border-lime-900">
          <Link to="/donation">Ver Mas</Link>
        </p>
      </div>
      {/* /* Columna de la imagen */}
      <div className="flex w-full lg:w-1/2 justify-center">
      <div className="max-w-lg mx-auto ">
        <Carousel autoPlay interval={4000} infiniteLoop showStatus={false} showThumbs={false} className="shadow-lg rounded-lg overflow-hidden">
          <div>
            <img src={plantando} alt="plantando" className="w-full" />
          </div>
          <div>
            <img src={plantando2} alt="plantando2" className="w-full" />
          </div>
          <div>
            <img src={plantando3} alt="plantando3" className="w-full" />
          </div>
        </Carousel>
      </div>
    </div>

    
      {/* Columna de la imagen
      <div className="flex lg:w-1/2 justify-center lg:h-screen">
        <img src={planta1} alt="planta" className="rounded-lg overflow-hidden object-cover w-5/6 h-auto lg:mr-0 mr-6" />
      </div> */}
    </div>
  );
};

export default Index;
