import { useState } from 'react'
import './styles/app.css'
import tooth from '../src/assets/tooth.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <section>
        <h1>Clinica Dental Dra. Carmiol</h1>
        <img src={tooth} alt='' />
      </section>
    </div>  
  )
}

export default App
