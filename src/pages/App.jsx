import { useState } from "react";
import "../styles/app.css";
import { Navbar } from "../components/Navbar";
import { Inicio } from "../components/Inicio";
import { Servicios } from "../components/Servicios";
import { Aseguradoras } from "../components/Aseguradoras";
import { Location } from "../components/Location";
import { Footer } from "../components/Footer";
import { ContactMe } from "../components/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Aseguradoras />
      <Servicios />
      <ContactMe />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
