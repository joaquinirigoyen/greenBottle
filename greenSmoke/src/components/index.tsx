import { Link } from "react-router-dom";
import planta1 from "../img/home.jpeg";

const Index = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center m-0 2xl:px-20 lg:px-18 sm:px-6">
      {/* Columna del texto */}
      <div className="flex flex-col lg:w-1/2 m-0 justify-center px-10">
        <span className="font-serif font-bold lg:text-5xl text-3xl text-gray-700 text-center m-1">
          <h1>Empieza tu viaje literario en</h1>
        </span>
        <span className="font-serif font-bold text-6xl text-center text-violet-500 mt-2">
          <h1>Bookers</h1>
        </span>

        <span className="font-serif font-light text-s mt-10 text-gray-600 text-justify">
          Únete a la comunidad de lectores más grande de Latinoamérica y descubre un mundo de posibilidades literarias. En Bookers, conectamos a apasionados de la lectura de toda la región, ofreciendo un espacio donde compartir, explorar y disfrutar de una amplia variedad de historias y conocimientos.
        </span>
        <span className="font-serif font-light text-s mt-2 mb-14 text-gray-600 text-justify">
          Desde clásicos de la literatura hasta las últimas tendencias, nuestra comunidad te invita a sumergirte en un viaje inigualable a través de las páginas de los libros. Únete hoy y forma parte de una comunidad vibrante y en constante crecimiento, donde el amor por la lectura nos une.
        </span>

        <p className="self-center text-white bg-violet-500 w-48 font-bold py-2 px-4 rounded m-4 text-center hover:bg-transparent hover:text-violet-500 border-2 border-violet-500">
          <Link to="/events">Ver eventos</Link>
        </p>
      </div>

      {/* Columna de la imagen */}
      <div className="flex lg:w-1/2 justify-center lg:h-screen">
        <img src={planta1} alt="planta" className="rounded-lg overflow-hidden object-cover w-5/6 h-auto lg:mr-0 mr-6" />
      </div>
    </div>
  );
};

export default Index;
