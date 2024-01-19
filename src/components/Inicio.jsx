import "../styles/inicio.css";
import dental3 from "../assets/dental3.avif";
import dental5 from "../assets/dental5.avif";

export const Inicio = () => {

  const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
      console.log(entry.target.id)
      
      observer.unobserve(entry.target)
    })
  })
  window.onload = function(e){
    let seguros = document.getElementById("seguros")
    let equipo = document.getElementById("equipo")
    let contacto = document.getElementById("contacto")
    let ubicacion = document.getElementById("ubicacion")
    let servicios = document.getElementById("servicios")
    const components = [seguros, equipo, contacto, ubicacion, servicios]
    components.forEach((component)=>observer.observe(component))
  }
  return (
    <div className="inicio-bg">
      <div className="danube-filter animate-fade-up lg:animate-none">
        <div className="drop-shadow-lg flex grow mt-1 px-2 py-4 h-[80svh]">
        <div className="flex flex-col lg:flex-row w-full">
          <section className="my-4 h-[80svh] lg:w-1/2 flex flex-col items-start justify-center px-4 gap-4">
            <h1 className="text-4xl font-bold md:text-6xl animate-fade text-gray-900 text-balance animate-fade-up">
              Más de <span className="text-danube-700 lg:text-danube-800/80">20 años</span> de
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
              Ver Servicios <i className="fa-solid fa-tooth fa-2xl"></i>
            </a>
            <a
              href="https://wa.me/50687651876"
              className="text-white font-semibold bg-danube-600 hover:bg-danube-900 hover:text-white px-3 py-3 rounded-md text-md font-medium">
              Whatsapp <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
            </div>
          </section>
          <section className="h-full lg:w-1/2 hidden lg:grid grid-cols-1 grid-rows-2 gap-2 items-center justify-center">
              <div className="ms-20 overflow-hidden rounded-xl animate-fade-left h-full">
                <img src={dental3} className="object-cover rounded-xl h-full w-full" />
              </div>
              <div className="me-20 overflow-hidden rounded-xl animate-fade-right h-full">
                <img src={dental5} className="object-cover rounded-xl h-full w-full" />
              </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
};
