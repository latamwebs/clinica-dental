import "../styles/app.css";
import { Navbar } from "../components/Navbar";
import { Inicio } from "../components/Inicio";
import { Servicios } from "../components/Servicios";
import { Aseguradoras } from "../components/Aseguradoras";
import { Ubicacion } from "../components/Ubicacion";
import { Footer } from "../components/Footer";
import { Contacto } from "../components/Contacto";
import Equipo from "../components/Equipo";
import { ParentStart } from "../components/ParentStart";

function App() {
  return (
    <>
      <ParentStart nav={<Navbar/>} inicio={<Inicio/>}>
      </ParentStart>
      <Aseguradoras />
      <Servicios />
      <Equipo />
      <Contacto />
      <Ubicacion />
      <Footer />
    </>
  );
}

export default App;
