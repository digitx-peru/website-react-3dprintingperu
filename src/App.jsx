import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CustomFoundry from "./Pages/Industrias/CustomFoundry";
import CustomJewelry from "./Pages/Industrias/CustomJewelry";

import CustomDevices from "./Pages/Salud/CustomDevices";

import Impresoras from "./Pages/Productos/Impresoras";
import Materiales from "./Pages/Productos/Materiales";

import CustomNewsOne from "./Pages/Noticias/CustomNewsOne";
import CustomNewsTwo from "./Pages/Noticias/CustomNewsTwo"
import CustomPrototype from "./Pages/Industrias/CustomPrototype";



export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/industrias/fundicion" element={<CustomFoundry />} />
      <Route path="/industrias/joyeria" element={<CustomJewelry />} />
      <Route path="/industrias/prototipos-y-arte" element={<CustomPrototype />} />

      <Route path="/salud/:healthType" element={<CustomDevices />} />

      <Route path="/productos/impresoras" element={<Impresoras />} />
      <Route path="/productos/materiales" element={<Materiales />} />

      <Route path="/noticias/one" element={<CustomNewsOne />} />
      <Route path="/noticias/two" element={<CustomNewsTwo />} />
    </Routes>
  );
}
