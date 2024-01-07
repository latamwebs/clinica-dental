import favicon from "../assets/favicon.png";

export const Navbar = () => {
  return (
    <nav className="bg-white rounded-xl drop-shadow-md m-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-1">
            <a
              href="#"
              className="hover:text-danube-600 text-xl md:text-2xl font-bold inline-flex align-middle place-items-center gap-2 font-cursive">
              <img src={favicon} className="h-10" /> Clinica Dental Dra. Carmiol
            </a>
          </div>
          <div className="md:block animate-rotate-y animate-delay-[2000ms] animate-ease-in">
            <div className="flex items-center gap-2">
            
            <a href="tel:22714610" className="md:hidden bg-danube-600 p-2 rounded-lg hover:bg-danube-900">
              <i className="fa-solid text-white fa-phone fa-xl"></i>
            </a>
            <a className="hidden md:block p-2 rounded-lg bg-danube-600 hover:bg-danube-800 text-white font-semibold" href="tel:22714610">Contactanos: 22714610</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
