import { Link } from "react-router-dom";

import materialsIcon from "../../assets/components/floatbutton/floatbutton_icon_material.png";
import printIcon from "../../assets/components/floatbutton/floatbutton_icon_print.png";

export default function FloatButton({ preselectedApplications }) {

  return (
    <div className="floatBtnBox">
      <div className="floatBtn1" style={{ backgroundColor: "rgb(10,79,79)" }}>
        <img style={{ width: "65px", height: "65px" }} src={printIcon} alt="" />
        <Link
          to="/productos/impresoras"
          state={{
            preselectedApplications: ["Arte y Diseño", "Dispositivos medicos"],
          }}
          className="link-sin-estilo"
        >
          <p>
            Ver <br /> impresoras
          </p>
        </Link>
      </div>
      <div
        className="floatBtn2"
        style={{ marginTop: "20px", backgroundColor: "rgb(99,218,178)" }}
      >
        <img
          style={{ width: "65px", height: "65px" }}
          src={materialsIcon}
          alt=""
        />
        <Link to="/productos/materiales" className="link-sin-estilo">
          <p>
            Ver <br /> materiales
          </p>
        </Link>
      </div>
    </div>
  );
}
