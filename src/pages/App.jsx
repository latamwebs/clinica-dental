import { useState } from 'react'
import '../styles/app.css'
import tooth from '../assets/tooth.svg'
import Navbar from '../components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <section>
        < Navbar />
        <img src={tooth} alt='' />
      </section>
    </div>
  )
}

export default App
