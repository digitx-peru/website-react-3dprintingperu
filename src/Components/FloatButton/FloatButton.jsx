import { Link } from "react-router-dom";
// import icon1 from "/images/floatButton/ícono-material.png";
// import icon2 from "/images/floatButton/ícono-print.png";

export default function FloatButton({
    preselectedApplications
  }) {
    return (
        <div className="floatBtnBox">
            <div className="floatBtn1" style={{backgroundColor:"rgb(10,79,79)"}}>
                <img style={{width:"65px",height:"65px"}} src={"/images/floatButton/ícono-print.png"} alt="" />
                <Link 
                to="/productos/impresoras" 
                state={{ preselectedApplications: ["Arte y Diseño", "Dispositivos medicos"] }}
                className="link-sin-estilo"> 
                    <p>Ver <br /> impresoras</p>
                </Link>
            </div>
            <div className="floatBtn2" style={{marginTop:"20px",backgroundColor:"rgb(99,218,178)",}}>
                <img style={{width:"65px",height:"65px" }} src={"/images/floatButton/ícono-material.png"} alt="" />
                <Link to="/productos/materiales" className="link-sin-estilo">
                    <p>Ver <br /> materiales</p>
                </Link>
            </div>
        </div>
    );
}