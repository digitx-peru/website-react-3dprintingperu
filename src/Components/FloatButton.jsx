import icon1 from "../assets/icons/ícono-material.png";
import icon2 from "../assets/icons/ícono-print.png";

export default function FloatButton() {
    return (
        <div className="floatBtnBox">
            <div className="floatBtn1" style={{backgroundColor:"rgb(10,79,79)"}}>
                <img style={{width:"65px",height:"65px"}} src={icon2} alt="" />
                <p>Ver <br /> impresoras</p>
            </div>
            <div className="floatBtn2" style={{marginTop:"20px",backgroundColor:"rgb(99,218,178)",}}>
                <img style={{width:"65px",height:"65px" }} src={icon1} alt="" />
                <p>Ver <br /> materiales</p>
            </div>
        </div>
    );
}