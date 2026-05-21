import { useState } from 'react'
import Caruselconsola from './paginas/consola/Carrusel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div> <Caruselconsola /> </div>
  )
}

export default App
