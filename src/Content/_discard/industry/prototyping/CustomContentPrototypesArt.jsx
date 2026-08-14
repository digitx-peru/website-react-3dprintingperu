import useMediaQuery from "../../../../hooks/useMediaQuery";

import prototypeArt from "../../../../assets/industryImages/prototype/industry_prototype_art.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelry({ width }) {
  const isDevice = useMediaQuery(900);
  const isMedium = useMediaQuery(1080);

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
      width: "100vw",
      fontSize: isMedium ? "12px" : "16px",
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
        <div style={{width: isDevice ? "" : "50%",padding: isDevice ? "10px 10px 10px 10px":"80px 80px 80px 200px",boxSizing: "border-box",height:isMedium?"350px":"550px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3>Arte</h3>
          <p>
            La impresión 3D ha llevado la personalización de muñecos y miniaturas de
            personas a un nivel completamente nuevo. Esta tecnología permite la
            creación de figuras en miniatura que son réplicas exactas de individuos,
            capturando cada detalle y rasgo distintivo. Desde figuras de acción
            personalizadas hasta estatuillas de recuerdo y muñecos estilo "yo en
            miniatura". Esto ha encontrado aplicación en campos como el arte, la
            industria del entretenimiento y las celebraciones especiales, como bodas
            y eventos familiares.
          </p>
          <p>
            Este nivel de detalle y complejidad de colores es precisamente donde la
            tecnologia CJP destaca y como mencionamos arriba, el portafolio de 3D
            Printing Peru (3DP) cuenta con 2 equipos, la CJP Projet 660Pro y la CJP
            Projet 860Pro.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: isDevice?"center":"start",
            width:isDevice ?  "100%":"50%",
            boxSizing:"border-box"
          }}
        >
          <img style={{ height: isMedium ? "250px": "400px", width:"auto", maxWidth:"100%", padding:"10px 10px",boxSizing:"border-box"}} src={prototypeArt} alt="" />
        </div>
      </div>
    </div>
  );
}
