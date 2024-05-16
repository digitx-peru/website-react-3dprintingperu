import useMediaQuery from "../../../hooks/useMediaQuery";

import healthImplantsPrint from "../../../assets/healthImages/health_implants_print.jpg";
import EndOfContent from "../EndOfContent";

export default function CustomContentMedDevices({ width }) {
  const isDevice = useMediaQuery(1000);
  const  isMedium = useMediaQuery(1320);
  const styles = {
    rowText:{
      display:"flex",
      flexDirection:isDevice ? "column" :"row",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: width,
      fontSize: isMedium ? "12px" : "18px",
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
          <h2>Implantes:</h2>
          <p>
            La impresión 3D ha revolucionado la fabricación de implantes médicos al
            permitir la creación de dispositivos altamente personalizados y
            precisos. Esta tecnología avanzada permite a los profesionales de la
            salud diseñar e imprimir implantes a medida que se adapten perfectamente
            a la anatomía única de cada paciente. El portafolio de 3D Printing Peru
            cuenta con la primera plataforma de impresión 3D diseñada
            específicamente para la producción de dispositivos médicos. La EXT 220
            MED, anteriormente conocido como Kumovis R1, es la única plataforma de
            extrusión que cuenta con una sala limpia integrada y está validada por
            los principales fabricantes de dispositivos médicos y hospitales de todo
            el mundo.
          </p>
        </div>
        <div style = {{display: "flex",
            justifyContent: "center",
            width:isDevice ?  "100%":"50%",
            padding: isDevice ? "0px":"40px 0 40px 0",}}>
          <img style={{height: "400px",width:"auto", maxWidth:"100%"}} src={healthImplantsPrint} alt="" />
        </div>
      </div>
      
      <div style={{ backgroundColor: "rgb(71,167,153)", padding:isDevice?"10px":"70px 200px", color:"white"}}>
        <p>
          Los dispositivos médicos producidos utilizando polímeros termogénicos,
          como el PEEK y el Radel® PPSU, se controlan en términos de temperatura
          durante la producción, lo que resulta en piezas impresas de alta
          calidad.
        </p>
        <br />
        <p>
          La otras impresoras de nuestro portafolio capaz de imprimir con PEEK por
          su capacidad de controlar y alcanzar las temperaturas necesarias son la
          Funmat 410 y la Funmat 610 de la marca Intamsys.
        </p>
        <br />
        <p>
          Las impresoras mencionadas, de ambas marcas, son open-source para el
          filamento.
        </p>
        <br />
        <p>
          Un caso de exito de esta aplicacion se puede leer en la siguiente
          noticia.
        </p>
      </div>
      
    </div>
  );
}
