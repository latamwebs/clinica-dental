import { useState } from 'react'
import '../styles/app.css'
import tooth from '../assets/tooth.svg'
import { Navbar } from '../components/Navbar'
import { Inicio } from '../components/Inicio'
import { Servicios } from '../components/Servicios'

function App() {
  return (
    <div>
        < Navbar />
        < Inicio />
        < Servicios />
    </div>
  )
}

export default App
