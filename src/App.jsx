import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CustomFoundry from "./Pages/Industrias/CustomFoundry";
import CustomJewelry from "./Pages/Industrias/CustomJewelry";

import CustomDevices from "./Pages/Salud/CustomDevices";

import Impresoras from "./Pages/Productos/Impresoras";
import Materiales from "./Pages/Productos/Materiales";

import CustomNewsOne from "./Pages/Noticias/CustomNewsOne";
import CustomNewsTwo from "./Pages/Noticias/CustomNewsTwo";
import CustomNewsThree from "./Pages/Noticias/CustomNewsThree";
import CustomPrototype from "./Pages/Industrias/CustomPrototype";

import PrivacyPolitic from "./Pages/Politicas/Privacidad";

import "./globalStyles.css"

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

      <Route path="/noticias/universidad-salsburgo-realiza-cirugia" element={<CustomNewsOne />} />
      <Route path="/noticias/la-nueva-sls-300" element={<CustomNewsTwo />} />
      <Route path="/noticias/la-nueva-ext-1270" element={<CustomNewsThree />} />

      <Route path="/politica-privacidad" element={<PrivacyPolitic />} />
    </Routes>
  );
}
