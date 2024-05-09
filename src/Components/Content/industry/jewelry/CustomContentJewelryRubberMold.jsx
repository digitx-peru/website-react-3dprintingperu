import useMediaQuery from "../../../../hooks/useMediaQuery";

import jewelrySmallPiece from "../../../../assets/industryImages/jewelry/industry_jewelry_small_piece.jpg";
import printerImg from "../../../../assets/printerImages/printer_image_mjp_2500.jpg";

import EndOfContent from "../../EndOfContent";
import { Link } from 'react-router-dom';

export default function CustomContentJewelryRubberMold({ width }) {
  const isDevice = useMediaQuery(824);

  const styles = {
    rowText:{
      display:"flex",
      flexDirection:isDevice ? "column" :"row",
      alignItems: "center",
    },
    btnLink:{
      background:"none", 
      border:"1px solid white", 
      borderRadius:"8px", 
      color:"rgb(99,218,178)", 
      marginTop:"15px", 
      padding:"10px 25px 10px 25px",
      cursor:"pointer"
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: "100vw",
      fontSize: isDevice ? "12px" : "16px",
      lineHeight: "1.5",
    },
    imageRight: {
      float: "right",
      marginLeft: 20,
    },
    imageLeft: {
      float: "left",
      marginRight: 20,
    },
  };

  return (
    <div className="textContainer" style={styles.container}>
      <div style={styles.rowText}>
        <div style={{width: isDevice ? "" : "50%",padding: isDevice ? "10px 10px 10px 10px":"80px 80px 80px 200px",boxSizing: "border-box",height:"400px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h2>Moldes de caucho</h2>
          <p>
            3D Printing a traves del portafolio de 3D Systems ofrece compatibilidad
            con los procesos de fabricación de moldes para joyería, permitiendo la
            producción en masa con modelos maestros complejos, de alta definición,
            resistentes al calor y de alta calidad para crear su molde de goma en
            cuestión de horas.
          </p>
        </div>
        <div
          style={{
            width:isDevice ?  "":"50%",
          }}
          className="imgStyleWhite"
        >
          <img style={{ height: "400px", width:"100%" }} src={jewelrySmallPiece} alt="" />
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(71,167,153)", padding:isDevice ?"10px":"50px 200px", color:"white"}}>
          <h3>
            Nuestra tecnología de impresión 3D Figure 4, junto con nuestra solución
            de material y software para joyería, representa una alternativa rápida a
            procesos laboriosos y limitantes en diseño que involucran múltiples
            pasos.
          </h3>
          <ul>
            <li>
              La rápida producción de patrones posibilita la creación de diseños a
              moldes de caucho en cuestión de horas.
            </li>
            <li>
              Reduzca la mano de obra con modelos maestros precisos y un acabado
              superficial superior.
            </li>
            <li>
              Aumente la libertad de diseño con geometrías delgadas y delicadas,
              mallas finas y más.{" "}
            </li>
          </ul>
          <p> Esta última, es una capacidad especialmente importante en la industria
          de la joyería y ahora posible mediante la impresión 3D. Sus clientes
          pueden obtener ahora piezas personalizadas y únicas, diseñadas
          específicamente con sus gustos. Desde anillos de compromiso hasta
          pendientes, la manufactura aditiva permite a los joyeros producir joyas
          únicas en su clase con diseños complejos. Los equipos que recomendamos
          para esta aplicación son:</p>
      </div>
      <div style={{ backgroundColor: "rgb(45,45,45)", padding:isDevice ?"10px":"50px 200px", color:"white"}}>
        <div style={{display:"flex", flexDirection:isDevice ?"column":"row"}}>
          <div style={{width:isDevice ?  "100%":"50%", display:"flex",flexDirection:isDevice ?"column":"row", alignItems:"center"}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width:isDevice ?  "100%":"50%",
                }}
            >
                <img style={{ height: isDevice? "250px" :"400px",width:isDevice?"100%":"", padding:isDevice? "10px":"60px", boxSizing:"border-box" }} src={printerImg} alt="" />
            </div>
            <div>
              <h3>Figure 4 Joyería</h3>
              <Link to="/productos/impresoras">
                <button style={styles.btnLink}>Ver impresoras</button>
              </Link> 
            </div>
          </div>
          <div style={{width:isDevice ? "100%":"50%",display:"flex", flexDirection:isDevice ?"column":"row",alignItems:"center",}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width:isDevice ?  "100%":"50%",
                }}
            >
                <img style={{ height: isDevice? "250px":"400px",width:isDevice?"100%":"", padding:isDevice? "10px":"60px", boxSizing:"border-box" }} src={printerImg} alt="" />
            </div>
            <div>
              <h3>MJP 2500 Plus</h3>
              <Link to="/productos/impresoras">
                <button style={styles.btnLink}>Ver impresoras</button>
              </Link> 
            </div>
          </div>
        </div>
        <div>
          <p>
            La
            principal diferencia entre ambas es la capacidad de producir más piezas
            con el menor uso de mano de obra, las piezas impresas por la MJP 2500
            Plus requieren un postproceso más corto y con menos intervención humana.
            Si tu producción es menor a 50Kg al año, recomendamos la Figure 4
            Jewelry, con el material MASTER GRY. Puedes ver un video de la Figure 4
            Jewelry <a href="https://youtu.be/NlKi4PJM9bc">aquí</a>.
          </p>
        </div>
        
      </div>
    </div>
  );
}
