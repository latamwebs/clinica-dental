import "../styles/inicio.css";
import dental3 from "../assets/dental3.avif";
import dental5 from "../assets/dental5.avif";

export const Inicio = () => {

  const whatsNumber = "50687651876";
  const observer = new IntersectionObserver((entries, observer)=>{
    entries.filter(e=> e.isIntersecting).forEach((entry)=>{
      if(!entry.target.classList.contains('animate-fade-up')){
        entry.target.classList.add("animate-fade-up")
      }
      observer.unobserve(entry.target)
    })
  })
  window.onload = function(){
    const components = Array.from(document.getElementsByClassName("anim"))
    components.forEach(component=> observer.observe(component))
  }
  return (
      <div className="animate-fade lg:animate-none min-h-[500px] flex flex-col w-full mx-auto max-w-6xl sm:h-[90svh] xl:h-[80svh] justify-center">
          <section className="my-4 flex flex-col items-start justify-self-center px-4 gap-6 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-6xl animate-fade text-gray-100 animate-fade-up">
              Más de <span className="text-danube-600">20 años</span><br className="sm:max-md:hidden"></br> de
              experiencia
            </h1>
            <p className="max-w-lg text-xl md:text-2xl leading-8 text-gray-300 text-balance animate-fade-up animate-delay-[250ms] hover:backdrop-blur-lg rounded-lg">
              Somos una clinica privada dedicada a ofrecer atención odontológica
              de calidad en odontología estética, restauradora y general.
            </p>
            <div className="flex gap-2 animate-fade-up animate-delay-[400ms]">
            <a
              href="#servicios"
              className="text-white font-semibold bg-danube-700 hover:bg-danube-900 hover:text-white px-3 py-3 rounded-md text-md font-medium">
              Ver Servicios <i className="fa-solid fa-tooth fa-2xl"></i>
            </a>
            <a
              href={`https://wa.me/${whatsNumber}`}
              className="text-white font-semibold bg-danube-700 hover:bg-danube-900 hover:text-white px-3 py-3 rounded-md text-md font-medium">
              Whatsapp <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
            </div>
          </section>
      </div>
  );
};
