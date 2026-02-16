import useMediaQuery from "../../../hooks/useMediaQuery";

import EndOfContent from "../EndOfContent";

export default function CustomContent3Ddesign({ width }) {
  const isDevice = useMediaQuery(1000);
  const isMedium = useMediaQuery(1320);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: width,
      fontSize: isMedium ? "12px" : "16px",
      lineHeight: "1.5",
    },
    rowTextLeft: {
      display: "flex",
      // flexDirection: isDevice ? "column" : "row",
      alignItems: "stretch",
      // padding: "5px 0px"
      margin: "0px 0px 5px 0px"
    },
    rowTextRight: {
      display: "flex",
      // flexDirection: isDevice ? "column" : "row",
      alignItems: "stretch",
      // padding: "5px 0px"
      margin: "0px 0px 5px 0px"
    },
    rowTextSectionLeft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 0.6,
      padding: "0px 80px 0px 200px",
      // boxSizing: "border-box",
      // height: isDevice ? "250px" : "350px",
    },
    rowTextSectionRight: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 0.6,
      // width: "60%",
      padding: "0px 200px 0px 80px",
      // backgroundColor: "rgb(71,167,153)",
      // color: "white",
      // width: isDevice ? "100%" : "50%",
      // padding: isDevice ? "10px 10px 10px 10px" : "0px 80px 0px 200px",
      // boxSizing: "border-box",
      // height: isDevice ? "250px" : "350px",

    },
    rowImageSectionLeft: {
      // width: "40%",
      // height: isDevice ? "250px" : "400px",
      // boxSizing: "border-box",
      // padding: isDevice ? "" : "0px 0px 0px 200px",
      display: "flex",
      flex: 0.4,
      justifyContent: "start",
      alignItems: "center",
      padding: "0px 0px 0px 200px",

    },
    rowImageSectionRight: {
      // width: "40%",
      // height: isDevice ? "250px" : "400px",
      // boxSizing: "border-box",
      // padding: isDevice ? "" : "0px 200px 0px 0px",
      display: "flex",
      flex: 0.4,
      justifyContent: "end",
      alignItems: "center",
      padding: "0px 200px 0px 0px",
    },
    image: {
      maxHeight: "400px",
      width: "auto",
      maxWidth: "100%",
      // backgroundColor: "white",
    },
    // imageRight: {
    //   float: "right",
    //   marginLeft: 20,
    // },
    // imageLeft: {
    //   float: "left",
    //   marginRight: 20,
    // },
    rowTextTitle: {
      marginBottom: "20px"
    }
  };

  return (
    <div className="textContainer" style={styles.container}>
      <div className={"rowOne"} style={styles.rowTextLeft}>
        <div className={"rowOneSectionLeft"} style={styles.rowTextSectionLeft}>
          {/* <h2 style={styles.rowTextTitle}>
            El arte del pavé y el dominio de las piedras preciosas
          </h2> */}
          <p>
            3D Printing Peru ofrece servicios integrales de diseño CAD 3D, ayudando a
            empresas de Perú a convertir ideas innovadoras en realidad. Nuestro equipo
            de diseñadores CAD altamente capacitados utiliza software de última generación
            y las mejores prácticas de la industria para desarrollar modelos 3D precisos,
            eficientes y listos para manufactura. Ya sea que requieras diseño de producto,
            ingeniería inversa o diseños de ensamble detallados, contamos con la experiencia
            necesaria para cumplir con tus necesidades específicas.
          </p>
        </div>
        <div className="rowOneSectionRight" style={styles.rowImageSectionRight} >
          <img
            style={styles.image}
            src="/images/3d_model_blue.png"
            alt=""
          />
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className={"rowTwo"} style={{...styles.rowTextRight, backgroundColor: "#C9C6CA", padding: "40px 0 40px 0"}}>
        <div className={"rowTwoSectionLeft"} style={styles.rowImageSectionLeft}>
          <img
            style={styles.image}
            src="/images/3d_model_colors.png"
            alt=""
          />
        </div>
        <div className={"rowTwoSectionRight"}
          style={styles.rowTextSectionRight}
        >
          {/* <h2 style={styles.rowTextTitle}>
            Utilice bocetos e imágenes: Simplifique el modelado complejo
          </h2> */}
          <li>
            <b>Modelado Paramétrico:</b> Creación de modelos 3D inteligentes que pueden modificarse
            y actualizarse fácilmente, garantizando flexibilidad de diseño y mayor eficiencia en el desarrollo.
          </li>
          <li>
            <b>Modelado de Superficies:</b> Desarrollo de superficies 3D complejas y estéticamente cuidadas para productos
            con formas y geometrías detalladas.
          </li>
          <li>
            <b>Diseño de Ensambles:</b> Diseño e integración de múltiples componentes en un ensamble 3D completo,
            asegurando un ajuste adecuado y un funcionamiento óptimo.
          </li>
          <li>
            <b>Diseño para Manufactura</b> (DFM): Optimización de los diseños para procesos de fabricación más eficientes
            y rentables, reduciendo tiempos y costos de producción.
          </li>
          <li>
            <b>Ingeniería Inversa:</b> Creación de modelos CAD 3D precisos a partir de piezas físicas existentes, 
            permitiendo modificaciones, mejoras y la optimización del producto.
          </li>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}

    </div>
  );
}
