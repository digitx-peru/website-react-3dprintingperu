import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import Automotriz from "./Pages/Aplicaciones/Automotriz";
import Impresoras from "./Pages/Productos/Impresoras";
import Materiales from "./Pages/Productos/Materiales";

export default function App() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industrias/automotriz" element={<Automotriz />} />
          <Route path="/productos/impresoras" element={<Impresoras />} />
          <Route path="/productos/materiales" element={<Materiales />} />  
        </Routes>
    );
};