import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Juegos from "./paginas/juegos/Juegos";
<<<<<<< HEAD
import Consolaspag from "./paginas/consola/consolas";
import Accesorios from "./paginas/Accesorios/Accesorios"; 

import "./App.css";
=======

import "./App.css";
import Consolaspag from "./paginas/consola/consolas";
>>>>>>> 70d03af39958775eb140f9c9abc4e515b05851e1

function Home() {
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juegos" element={<Juegos />} />
<<<<<<< HEAD
        <Route path="/consolas" element={<Consolaspag />} />
        
        <Route path="/accesorios" element={<Accesorios />} />
=======
        <Route path= "/consolas" element={<Consolaspag/>} />
>>>>>>> 70d03af39958775eb140f9c9abc4e515b05851e1
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 70d03af39958775eb140f9c9abc4e515b05851e1
