import favicon from "../assets/favicon.png";

export const Navbar = () => {
  return (
    <nav className="bg-white rounded-xl drop-shadow-md m-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-1">
            <a
              href="#"
              className="hover:text-danube-600 text-2xl font-bold inline-flex align-middle place-items-center gap-2 font-cursive">
              <img src={favicon} className="h-10" /> Clinica Dental Dra. Carmiol
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline">
              <a
                href="#seguros"
                className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Aseguradoras
              </a>
              <a
                href="#servicios"
                className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Servicios
              </a>
              <a
                href="#contacto"
                className="text-dark-300 hover:bg-danube-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
