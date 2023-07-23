import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Industria from "./Pages/Industrias/Industria";

import Salud from "./Pages/Salud/Salud";

import Impresoras from "./Pages/Productos/Impresoras";
import Materiales from "./Pages/Productos/Materiales";

import Noticia from "./Pages/Noticias/Noticia";

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/industrias/:industryType" element={<Industria />} />

      <Route path="/salud/:healthType" element={<Salud />} />

      <Route path="/productos/impresoras" element={<Impresoras />} />
      <Route path="/productos/materiales" element={<Materiales />} />

      <Route path="/noticias/:title" element={<Noticia />} />
    </Routes>
  );
}
