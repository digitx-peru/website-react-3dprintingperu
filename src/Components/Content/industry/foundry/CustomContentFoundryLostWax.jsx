import useMediaQuery from "../../../../hooks/useMediaQuery";

import foundryLostWax from "../../../../assets/industryImages/foundry/industry_foundry_lost_wax.jpg";
import foundryQuickCast from "../../../../assets/industryImages/foundry/industry_foundry_quickcast.jpg";
import printerImg from "../../../../assets/printerImages/printer_image_mjp_2500.jpg";
import bgBlackImg from "../../../../assets/heroImages/bg_black.png";
import bgGreenImg from "../../../../assets/heroImages/bg_green.png";

import { Link } from 'react-router-dom';

import EndOfContent from "../../EndOfContent";

export default function CustomContentFoundry({ width }) {
  const isDevice = useMediaQuery(830);
  const isMedium = useMediaQuery(1205);

  const styles = {
    paragraph:{
      width: isDevice ? "" : "50%",
      padding: isMedium ?"10px 10px 10px 10px":"80px 80px 80px 200px",
      //padding: !is1080 &&  isDevice ?"10px 10px 10px 10px":"20px 20px 20px 100px",
      boxSizing: "border-box",
      height:"400px", 
      display:"flex", 
      flexDirection:"column",
      justifyContent:"center"
    },
    rowText:{
      display:"flex",
      flexDirection:isMedium ? "column" :"row",
      alignItems: "center",
    },
    rowText2:{
      display:"flex",
      flexDirection:isMedium ? "column" :"row",
      alignItems: "center",
      boxSizing: "border-box",
    },
    rowText3:{
      display:"flex",
      flexDirection:isDevice ? "column" :"row",
      alignItems: "center",
      boxSizing: "border-box",
      backgroundImage: "url('"+bgBlackImg+"')",
      backgroundSize: 'cover'
    },
    rowText4:{
      display:"flex",
      flexDirection:isDevice ? "column" :"row",
      alignItems: "center",
      boxSizing: "border-box",
      backgroundImage: "url('"+bgGreenImg+"')",
      backgroundSize: 'cover'
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
        <div style={styles.paragraph}>
          <h3>Para Cera Perdida</h3>
          <p>
            Un área donde la manufactura aditiva ha hecho avances significativos es
            en el proceso de cera perdida o investment casting. Tradicionalmente,
            los patrones de cera (patrones de sacrificio) eran creados usando molde
            por inyección (link to wiki) o tallando manualmente la cera, pero la
            impresión 3D ha traido nuevas posibilidades y ventajas a este proceso.
            En este sentido, las impresión 3D permite fabricar los patrones de cera
            o los moldes directamente, evitando así la necesidad de los métodos
            tradicionales.
          </p>
        </div>
        
        <div
          style={{            
            width:isDevice ?  "100%":"50%",
            display:"flex",
            justifyContent:"start"
          }}
          className="imgStyleWhite"
        >
          <img style={{ height: "400px", width:"auto", maxWidth:"100%"}} src={foundryLostWax} alt="" />
        </div>
      </div>
      <div style={styles.rowText2}>
        <div
            style={{
              width:isDevice ?  "100%":"50%",
              display:"flex",
              justifyContent:"end"
              }}
              className="imgStyleWhite"
          >
            <img style={{ height: "400px",width:"auto", maxWidth:"100%" }} src={foundryQuickCast} alt="" />
        </div>
        <div style={{backgroundColor: "rgb(71,167,153)", color: "white", boxSizing: "border-box",height:"400px", padding: isDevice ? "10px 10px 10px 10px":"0px 200px 0px 50px", width:isMedium ? "100%":"50%", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3>
            La integración de la impresión 3D en el proceso de cera perdida ofrece
            varios beneficios:
          </h3>
          <ul>
            <li>Complejas geometrías</li>
            <li>Ahorro de tiempo y costo</li>
            <li>Flexibilidad y personalización del diseño</li>
            <li>Mejora de precisión y exactitud</li>
            <li>Opciones de materiales</li>
          </ul>
          <p>
            El proceso de cera perdida en fundición tiene algunas características
            que la diferencian del mismo proceso usado en joyería. Y debido a esto,
            en el portafolio de 3D Printing Peru contamos con las siguientes
            opciones: especializadas y optimizadas para fundición.
          </p>
        </div>
      </div>
      <div style={styles.rowText3}> 
        <div style={{color: "white", boxSizing: "border-box",height:isMedium?"":"400px",   padding: isMedium ? "10px 10px 10px 10px":"0px 50px 0px 200px", width:isDevice ? "":"50%", display:"flex", flexDirection:"column",justifyContent:"center",alignItems:isDevice?"center":"start"}}>
          <h3 style={{color: "rgb(62,255,180)"}}>Projet MJP 2500IC</h3>
          <p>
            La tecnología Multijet permite la impresión de piezas
            100% de cera, con una resolución de 42u en z . Además, el costo del
            material de construcción es bajo lo que resulta en un costo por parte
            muy económico. Esta impresora es recomendable para tamaños de pieza
            mediana (volumen de impresión x,y,z es 310x212x145) y destaca por el
            reducido tiempo de post proceso que además requiere muy poca
            intervención manual.
          </p>
          <Link to="/productos/impresoras">
            <button style={styles.btnLink}>Ver impresoras</button>
          </Link> 
        </div>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              width:isDevice ?  "100%":"50%",
              }}
          >
            <img style={{ height:"400px",width: "auto",padding:isDevice? "10px":"50px", boxSizing:"border-box" }} src={printerImg} alt="" />
        </div>
      </div>
      <div style={styles.rowText4}>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              width:isDevice ?  "100%":"50%",
              }}
          >
            <img style={{ height:"400px", width: "auto",padding:isDevice? "10px":"50px", boxSizing:"border-box" }} src={printerImg} alt="" />
        </div> 
        <div style={{color: "white", boxSizing: "border-box",height:isMedium?"":"400px",padding: isMedium ? "10px 10px 10px 10px":"80px 200px 80px 80px", width:isDevice ? "":"50%", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3 style={{color: "rgb(62,255,180)"}}>SLA 750, 950</h3>
          <p>
          Las impresoras de Stereolitografia (SLA); cuentan con el
          material CastPro, una resina calcinable que se desintegra. Con este
          material y el modo de impresión Quickcast, es posible imprimir con capas
          de 0.05 - 0.15mm, y así producir piezas muy grandes, súper ligeras,
          fáciles de manipular y que contienen muy poco material de construcción.
          Debido a esto último son piezas de un costo bajo.
          </p>
          <Link to="/productos/impresoras">
            <button style={styles.btnLink}>Ver impresoras</button>
          </Link> 
        </div>
      </div>
    </div>
  );
}
