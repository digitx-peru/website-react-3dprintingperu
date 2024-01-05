import useMediaQuery from "../../../../hooks/useMediaQuery";

import prototypeArt from "../../../../assets/industryImages/prototype/industry_prototype_art.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelry({ width }) {
  const isDevice = useMediaQuery(768);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      rowGap: 15,
      width: width,
      fontSize: isDevice ? "16px" : "20px",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={prototypeArt} alt="" />
      </div>
      <EndOfContent />
    </div>
  );
}
