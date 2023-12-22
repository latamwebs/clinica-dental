import { useState } from 'react'
import '../styles/app.css'
import tooth from '../assets/tooth.svg'
import { Navbar } from '../components/Navbar'
import { Inicio } from '../components/Inicio'

function App() {
  return (
    <div className="container">
      <section>
        < Navbar />
        < Inicio />
      </section>
    </div>
  )
}

export default App
