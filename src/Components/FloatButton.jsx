import { Link } from "react-router-dom";
import icon1 from "../assets/icons/ícono-material.png";
import icon2 from "../assets/icons/ícono-print.png";

export default function FloatButton() {
    return (
        <div className="floatBtnBox">
            <div className="floatBtn1" style={{backgroundColor:"rgb(10,79,79)"}}>
                <img style={{width:"65px",height:"65px"}} src={icon2} alt="" />
                <Link to="/productos/impresoras" className="link-sin-estilo"> 
                    <p>Ver <br /> impresoras</p>
                </Link>
            </div>
            <div className="floatBtn2" style={{marginTop:"20px",backgroundColor:"rgb(99,218,178)",}}>
                <img style={{width:"65px",height:"65px" }} src={icon1} alt="" />
                <Link to="/productos/materiales" className="link-sin-estilo">
                    <p>Ver <br /> materiales</p>
                </Link>
            </div>
        </div>
    );
}