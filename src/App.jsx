import { Routes, Route } from "react-router-dom";

import Home from "./Pages/ContentPages/Home";
// import CustomFoundry from "./Pages/ContentPages/Industrias/CustomFoundry";
// import CustomJewelry from "./Pages/ContentPages/Industrias/CustomJewelry";

/////////////////////SERVICES
import CustomPolyurethane from "./Pages/ContentPages/Services/Production/CustomPolyurethane";
import Custom3Ddesign from "./Pages/ContentPages/Services/Others/Custom3Ddesign";
import CustomJewelryPatterns from "./Pages/ContentPages/Services/3DPrint/CustomJewelryPatterns";
import CustomPhotopolymers from "./Pages/ContentPages/Services/3DPrint/CustomPhotopolymers";

/////////////////////PRODUCTS
import Printers from "./Pages/ContentPages/Products/Printers";
import Materials from "./Pages/ContentPages/Products/Materials";
import CustomSoftware from "./Pages/ContentPages/Products/Software/CustomSoftware";

/////////////////////APPLICATIONS
import CustomProsthesis from "./Pages/ContentPages/Applications/CustomProsthesis";
// import CustomPrototype from "./Pages/ContentPages/Industrias/CustomPrototype";

/////////////////////NEWS
import CustomNewsOne from "./Pages/News/CustomNewsOne";
import CustomNewsTwo from "./Pages/News/CustomNewsTwo";
import CustomNewsThree from "./Pages/News/CustomNewsThree";

/////////////////////LANDING
import Landing from "./Pages/Support/Landing/Landing";

/////////////////////SUPPORT
import PrivacyPolicy from "./Pages/Support/Policies/Privacy";
import NotFound from "./Pages/Support/NotFound/NotFound";

import "./globalStyles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/industrias/fundicion" element={<CustomFoundry />} />
      <Route path="/industrias/joyeria" element={<CustomJewelry />} />
      <Route
        path="/industrias/prototipos-y-arte"
        element={<CustomPrototype />}
      /> */}

      {/* SERVICES */}
      <Route
        path="/servicios/silicona-y-poliuretano"
        element={<CustomPolyurethane />}
      />
      <Route path="/servicios/diseño-3d" element={<Custom3Ddesign />} />
      <Route path="/servicios/patrones-de-joyeria" element={<CustomJewelryPatterns />} />
      <Route path="/servicios/fotopolimeros" element={<CustomPhotopolymers />} />

      {/* PRODUCTS */}
      <Route path="/productos/impresoras" element={<Printers />} />
      <Route path="/productos/materiales" element={<Materials />} />
      <Route
        path="/productos/software/rhino-artisan"
        element={<CustomSoftware />}
      />

      {/* APPLICATIONS */}
      <Route path="/salud/protesis" element={<CustomProsthesis />} />

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
