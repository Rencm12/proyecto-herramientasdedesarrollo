import { useState } from 'react'
import Caruselconsola from './paginas/consola/Carrusel'
import Header from './components/Header'
import Consolas from './paginas/consola/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>    
     <div> <Caruselconsola /> </div>
   <div>
    <Consolas/>
   </div>
  </>

  )
}

export default App
