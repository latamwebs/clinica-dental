import { useState } from "react";
import "../styles/app.css";
import { Navbar } from "../components/Navbar";
import { Inicio } from "../components/Inicio";
import { Servicios } from "../components/Servicios";
import { Aseguradoras } from "../components/Aseguradoras";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Servicios />
      <Aseguradoras />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
