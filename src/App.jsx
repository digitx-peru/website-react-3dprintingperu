import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CustomFoundry from "./Pages/Industrias/CustomFoundry";
import CustomJewelry from "./Pages/Industrias/CustomJewelry";

import CustomSoftware from "./Pages/Products/Software/CustomSoftware";
import CustomPolyurethane from "./Pages/Services/Production/CustomPolyurethane";
import CustomProsthesis from "./Pages/Applications/CustomProsthesis";

import Printers from "./Pages/Products/Printers";
import Materials from "./Pages/Products/Materials";

import CustomNewsOne from "./Pages/Noticias/CustomNewsOne";
import CustomNewsTwo from "./Pages/Noticias/CustomNewsTwo";
import CustomNewsThree from "./Pages/Noticias/CustomNewsThree";
import CustomPrototype from "./Pages/Industrias/CustomPrototype";

import PrivacyPolitic from "./Pages/Politicas/Privacidad";
import Landing from "./Pages/Landing/Landing";

import NotFound from "./Pages/NotFound/NotFound";
import Custom3Ddesign from "./Pages/Services/Others/Custom3Ddesign";

import "./globalStyles.css";


export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/industrias/fundicion" element={<CustomFoundry />} />
      <Route path="/industrias/joyeria" element={<CustomJewelry />} />
      <Route
        path="/industrias/prototipos-y-arte"
        element={<CustomPrototype />}
      />

      <Route
        path="/servicios/silicona-y-poliuretano"
        element={<CustomPolyurethane />}
      />
      <Route path="/servicios/3d-design" element={<Custom3Ddesign />} />

      <Route path="/salud/protesis" element={<CustomProsthesis />} />

      <Route path="/productos/impresoras" element={<Printers />} />
      <Route path="/productos/materiales" element={<Materials />} />
      <Route
        path="/productos/software/rhino-artisan"
        element={<CustomSoftware />}
      />

      <Route
        path="/noticias/universidad-salsburgo-realiza-cirugia"
        element={<CustomNewsOne />}
      />
      <Route path="/noticias/la-nueva-sls-300" element={<CustomNewsTwo />} />
      <Route path="/noticias/la-nueva-ext-1270" element={<CustomNewsThree />} />

      <Route path="/politica-privacidad" element={<PrivacyPolitic />} />
      <Route path="/nextwebinar" element={<Landing />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
