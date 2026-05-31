import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Juegos from "./paginas/juegos/Juegos";
import Consolaspag from "./paginas/consola/consolas";
import Accesorios from "./paginas/Accesorios/Accesorios"; 

import "./App.css";

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
        <Route path="/consolas" element={<Consolaspag />} />
        
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;