import useMediaQuery from "../../../../hooks/useMediaQuery";

import jewelryGeneric from "../../../../assets/industryImages/jewelry/industry_jewelry_generic.jpg";
import printerImg from "../../../../assets/printerImages/printer_image_mjp_2500.jpg";

import EndOfContent from "../../EndOfContent";

import bgBlackImg from "../../../../assets/heroImages/bg_black.png";
import bgGreenImg from "../../../../assets/heroImages/bg_green.png";

export default function CustomContentJewelryLostWax({ width }) {
  const isDevice = useMediaQuery(824);
  const isMedium = useMediaQuery(1024);

  const styles = {
    rowText:{
      display:"flex",
      flexDirection:isMedium ? "column" :"row",
      alignItems: "center",
    },
    rowText3:{
      display:"flex",
      flexDirection:isMedium ? "column" :"row",
      alignItems: "center",
      boxSizing: "border-box",
      backgroundImage: "url('"+bgBlackImg+"')",
    },
    rowText4:{
      display:"flex",
      flexDirection:isMedium ? "column" :"row",
      alignItems: "center",
      boxSizing: "border-box",
      backgroundImage: "url('"+bgGreenImg+"')",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: "100vw",
      lineHeight: "1.5",
      fontSize: isDevice ? "12px" : "16px",
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
        <div style={{width: isDevice ? "" : "50%",padding: isMedium ? "10px 10px 10px 10px":"80px 80px 80px 200px",boxSizing: "border-box",height:"400px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h2>Cera perdida</h2>
          <p>
            Si estas buscando la produccion de piezas con la mejor calidad que se
            puede lograr, debes implementar el proceso de cera perdida para la
            producción de piezas. Y los equipos de nuestro portafolio que se usan
            para este proceso son la Figure 4 Jewelry, la MJP 2500W Plus y la NUEVA
            MJP 300W, siendo la ultima la impresora usada por los líderes mundiales
            en joyería.
          </p>
          <p>Las principales caracteristicas de estos equipos son:</p>
        </div>
        <div
          style={{            
            width:isDevice ?  "100%":"50%",
            display:"flex",
            justifyContent:"start"
          }}
          className="imgStyleWhite"
        >
          <img style={{  width:isDevice ? "100%":"",height: "400px" }} src={jewelryGeneric} alt="" />
        </div>
      </div>

      <div style={styles.rowText3}> 
        <div style={{color: "white", boxSizing: "border-box",height:isMedium?"400px":"550px",width:isDevice ? "":"50%", padding: isMedium ? "10px 10px 10px 10px":"0px 50px 0px 200px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3 style={{color: "rgb(62,255,180)"}}>MJP Wax 3D Printing</h3>
          <ul>
            <li>
              Cera al 100% para una capacidad de fundición sin compromisos con
              procesos de fundición estándar.
            </li>
            <li>Respuesta rápida y alto rendimiento a escala de fábrica.</li>
            <li>
              Resolución superior y soportes disolubles/fundibles que permiten
              reducir la mano de obra de acabado y el pulido de metales preciosos
              costosos, así como una libertad de diseño última.
            </li>
          </ul>
        </div>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              width:isMedium ?  "100%":"50%",
              }}
          >
            <img style={{ height:isDevice?"250px":"400px", width:"auto", maxWidth:"100%",padding:isMedium? "10px":"60px", boxSizing:"border-box" }} src={printerImg} alt="" />
        </div>
      </div>
      <div style={styles.rowText4}>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              width:isMedium ?  "100%":"50%",
              }}
          >
          <img style={{ height:isDevice?"250px":"400px", width:"auto", maxWidth:"100%",padding:isMedium? "10px":"60px",  boxSizing:"border-box" }} src={printerImg} alt="" />
        </div> 
        <div style={{color: "white", boxSizing: "border-box",height:isMedium?"400px":"550px",width:isDevice ? "":"50%", padding: isMedium ? "10px 10px 10px 10px":"0px 200px 0px 0px",display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3 style={{color: "rgb(62,255,180)"}}>Figure 4 Joyería</h3>
          <ul>
            <li>
              Figure 4 JCAST-GRN 20, plástico fundible, fue desarrollado
              específicamente para facilitar la fundición de joyería con un mínimo
              de ceniza y residuos después de la quema.
            </li>
            <li>
              Rápida ejecución: velocidad de construcción vertical de 15 mm/h.
            </li>
            <li>
              Soportes de punta ultrafina MicroPoint™ que permiten un acabado de
              superficie suave, reducen la mano de obra de postprocesamiento y
              aceleran la producción al minimizar el pulido.
            </li>
          </ul>
          <p>
            Nuestras soluciones de impresión en 3D se desarrollaron para producir
            patrones de fundición de joyería que se adaptan a su método actual de
            fabricación. Esto permite la creación, iteración y producción rápida y
            rentable de todos los estilos de joyas, incluidas aquellas de geometrías
            más complejas. Puedes ver como trabaja la MJP2500W en
            <a href="https://youtu.be/z86fKkVP_tc">este</a> video.
          </p>
        </div>
      </div>      
    </div>
  );
}
