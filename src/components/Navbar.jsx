import tooth from "../assets/tooth.svg"

const Navbar = () => {
    return (
      <nav className="bg-danube-200 rounded-lg drop-shadow-md m-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <a href="#" className="hover:text-danube-600 font-medium"><i className="fa-solid fa-tooth fa-2xl text-white"></i> Clinica Dental Dra. Carmiol</a>
            </div>
            <div className="hidden md:block">
            <div className="flex items-baseline">
                <a href="#" className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                <a href="#" className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
                <a href="#" className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Aseguradoras</a>
                <a href="#" className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
            </div>
          </div>
        </div>
      </nav>
    );
  
}

export default Navbar