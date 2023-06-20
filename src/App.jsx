import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import Automotriz from "./Pages/Industrias/Automotriz";
import Fundicion from "./Pages/Industrias/Fundicion";
import Joyeria from "./Pages/Industrias/Joyeria";
import Replicas from "./Pages/Industrias/Replicas";

import Medicina from "./Pages/Salud/Medicina";
import Odontologia from "./Pages/Salud/Odontologia";

import Impresoras from "./Pages/Productos/Impresoras";
import Materiales from "./Pages/Productos/Materiales";

import NoticiaUno from "./Pages/Noticias/NoticiaUno";

export default function App() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industrias/automotriz" element={<Automotriz />} />
          <Route path="/industrias/fundicion" element={<Fundicion />} />
          <Route path="/industrias/joyeria" element={<Joyeria />} />
          <Route path="/industrias/replicas" element={<Replicas />} />

          <Route path="/salud/medicina" element={<Medicina />} />
          <Route path="/salud/odontologia" element={<Odontologia />} />

          <Route path="/productos/impresoras" element={<Impresoras />} />
          <Route path="/productos/materiales" element={<Materiales />} />

          <Route path="/noticias/noticiaUno" element={<NoticiaUno />} />
          <Route path="/noticias/noticiaDos" element={<Materiales />} />
        </Routes>
    );
};