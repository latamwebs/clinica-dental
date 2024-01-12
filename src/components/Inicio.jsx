import "../styles/inicio.css";
import dental from "../assets/dental2.avif";
import dental3 from "../assets/dental3.avif";
import dental5 from "../assets/dental5.avif";
import dental7 from "../assets/dental7.avif";

export const Inicio = () => {
  return (
    <div className="bg-danube-50/75 drop-shadow-lg flex grow mt-1 md-max:inicio-bg px-2 py-4">
      <div className="flex flex-col lg:flex-row w-full">
        <section className="my-4 h-[80svh] lg:h-full lg:w-1/2 flex flex-col items-start justify-center px-4 gap-4">
          <h1 className="text-4xl font-bold md:text-6xl animate-fade text-gray-900 text-balance animate-fade-up">
            Más de <span className="text-danube-800/80">20 años</span> de
            experiencia
          </h1>
          <p className="text-xl leading-8 text-gray-700 animate-fade-up animate-delay-[250ms]">
            Somos una clinica privada dedicada a ofrecer atención odontológica
            de calidad en odontología estética, restauradora y general.
          </p>
          <div className="flex gap-2 animate-fade-up animate-delay-[400ms]">
          <a
            href="#servicios"
            className="text-white font-semibold bg-danube-600 hover:bg-danube-900 hover:text-white px-3 py-3 rounded-md text-md font-medium">
            Ver Servicios <i class="fa-solid fa-tooth fa-2xl"></i>
          </a>
          <a
            href="https://wa.me/50687651876"
            className="text-white font-semibold bg-danube-600 hover:bg-danube-900 hover:text-white px-3 py-3 rounded-md text-md font-medium">
            Whatsapp <i className="fa-brands fa-whatsapp fa-2xl"></i>
          </a>
          </div>
        </section>
        <section className="mt-4 lg:mt-0 h-max lg:h-full lg:w-1/2 hidden lg:flex items-center justify-center">
          <div className="grid grid-cols-1 grid-rows-2 gap-2">
            <div className="ms-20 h-40 md:h-72 rounded-xl sm:flex self-end overflow-hidden animate-fade-left">
              <img src={dental3} className="object-cover rounded-xl" />
            </div>
            <div className="me-20 h-40 md:h-72 overflow-hidden animate-fade-right rounded-xl">
              <img src={dental5} className="object-cover rounded-xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
