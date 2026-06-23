import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

/////////////////////SERVICES
import CustomPolyurethane from "./Pages/Services/Production/CustomPolyurethane";
import Custom3Ddesign from "./Pages/Services/Others/Custom3Ddesign";
import CustomJewelryPatterns from "./Pages/Services/3DPrint/CustomJewelryPatterns";
import CustomPhotopolymers from "./Pages/Services/3DPrint/CustomPhotopolymers";

/////////////////////PRODUCTS
import Printers from "./Pages/Products/Printers";
import Materials from "./Pages/Products/Materials";
import CustomSoftware from "./Pages/Products/Software/CustomSoftware";

/////////////////////APPLICATIONS
import CustomProsthesis from "./Pages/Applications/CustomProsthesis";

/////////////////////NEWS
import CustomNewsOne from "./Pages/News/CustomNewsOne";
import CustomNewsTwo from "./Pages/News/CustomNewsTwo";
import CustomNewsThree from "./Pages/News/CustomNewsThree";

/////////////////////LANDING
import Landing from "./Pages/Support/Landing/PageLanding";

/////////////////////SUPPORT
import PrivacyPolicy from "./Pages/Support/Policies/PagePrivacy";
import NotFound from "./Pages/Support/NotFound/NotFound";

import "./globalStyles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />

      {/* SERVICES */}
      <Route
        path="/servicios/silicona-y-poliuretano"
        element={<CustomPolyurethane />}
      />
      <Route path="/servicios/diseño-3d" element={<Custom3Ddesign />} />
      <Route
        path="/servicios/patrones-de-joyeria"
        element={<CustomJewelryPatterns />}
      />
      <Route
        path="/servicios/fotopolimeros"
        element={<CustomPhotopolymers />}
      />

      {/* PRODUCTS */}
      <Route path="/productos/impresoras" element={<Printers />} />
      <Route path="/productos/materiales" element={<Materials />} />
      <Route
        path="/productos/software/rhino-artisan"
        element={<CustomSoftware />}
      />

      {/* APPLICATIONS */}
      <Route path="/salud/protesis" element={<CustomProsthesis />} />
      <Route path="/consumidor-final/muebles" element={<CustomProsthesis />} />
      <Route
        path="/consumidor-final/carcasas-cubiertas"
        element={<CustomProsthesis />}
      />
      <Route
        path="/consumidor-final/sellos-juntas"
        element={<CustomProsthesis />}
      />

      {/* NEWS */}
      <Route
        path="/noticias/universidad-salsburgo-realiza-cirugia"
        element={<CustomNewsOne />}
      />
      <Route path="/noticias/la-nueva-sls-300" element={<CustomNewsTwo />} />
      <Route path="/noticias/la-nueva-ext-1270" element={<CustomNewsThree />} />

      {/* LANDING */}
      <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
      <Route path="/nextwebinar" element={<Landing />} />

      {/* NOT FOUND */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
