import useMediaQuery from "../../../hooks/useMediaQuery";

import healthOrtOptions from "../../../assets/healthImages/health_ort_options.jpg";
import healthProtKneecap from "../../../assets/healthImages/health_prot_kneecap.jpg";

import softwareTeddy from "../../../assets/softwareImages/software_teddy.jpg";
import softwareLion from "../../../assets/softwareImages/software_lion.jpg";
import softwareRing from "../../../assets/softwareImages/software_ring.jpg";
import softwareRingModel from "../../../assets/softwareImages/software_ring_model.jpg";
import softwareShowcase from "../../../assets/softwareImages/software_showcase.jpg"

import EndOfContent from "../EndOfContent";

export default function CustomContentSoftware({ width }) {
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
      backgroundColor: "rgb(71,167,153)",
      color: "white",
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
          <h2 style={styles.rowTextTitle}>
            El arte del pavé y el dominio de las piedras preciosas
          </h2>
          <p>
            Diseñar con piedras preciosas es más que precisión: se trata de
            crear emoción, belleza e impacto. RhinoArtisan reimagina el diseño
            con pavé y piedras preciosas, dándole la libertad de explorar sin
            límites y la confianza para lograr resultados impecables.Sienta la
            fluidez de las herramientas intuitivas, el poder de la perfección
            instantánea y la alegría de ver cómo sus ideas brillan y se hacen
            realidad. Desde el delicado pavé hasta las atrevidas declaraciones
            con piedras preciosas, cada creación se convierte en una obra
            maestra de brillantez.
          </p>
        </div>
        <div className="rowOneSectionRight" style={styles.rowImageSectionRight} >
          <img
            style={styles.image}
            src={softwareTeddy}
            alt=""
          />
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className={"rowTwo"} style={styles.rowTextRight}>
        <div className={"rowTwoSectionLeft"} style={styles.rowImageSectionLeft}>
          <img
            style={styles.image}
            src={softwareLion}
            alt=""
          />
        </div>
        <div className={"rowTwoSectionRight"}
          style={styles.rowTextSectionRight}
        >
          <h2 style={styles.rowTextTitle}>
            Utilice bocetos e imágenes: Simplifique el modelado complejo
          </h2>
          <p>
            Lleve su creatividad al siguiente nivel utilizando bocetos e
            imágenes de referencia directamente en su espacio de trabajo. Esta
            potente función le permite modelar incluso los diseños más
            intrincados y las formas orgánicas con facilidad y precisión. Tanto
            si sigue un boceto dibujado a mano como una foto de un cliente, las
            guías visuales hacen que el proceso sea más intuitivo tanto para
            principiantes como para expertos.
          </p>
          <p>
            Ofrezca a sus clientes exactamente lo que imaginan, por complejo o
            único que sea. Con un mayor control, fluidez y un flujo de diseño
            natural, convertirás las ideas en realidad más rápido que nunca
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className={"rowThree"} style={styles.rowTextLeft}>
        <div className={"rowThreeSectionLeft"} style={styles.rowTextSectionLeft}>
          <h2 style={styles.rowTextTitle}>
            Sistema avanzado de diseño de bebederos
          </h2>
          <p>
            Prepare sus modelos para la fundición con confianza gracias a
            la reparación STL automatizada de RhinoArtisan y al avanzado sistema de colocación de bebederos.
            Esta potente herramienta garantiza una transición fluida del diseño a la producción, ofreciendo:
          </p>
          <ul>
            <li>
              <b>Reparación automática de STL con un solo clic, </b>
              evitando errores que provocan retrasos en la producción.
              Sin necesidad de otras aplicaciones ni pérdidas de tiempo en exportaciones e importaciones.
            </li>
            <li>
              <b>Colocación guiada de bebederos, </b>
              totalmente personalizable y compatible con la geometría.
              Elija entre bebederos de varias piezas,
              estructuras de flujo internas o externas y utilice etiquetas geométricas para identificar referencias y tamaños en varios modelos.
            </li>
          </ul>
          <p>
            <b>Ahorre tiempo, reduzca riesgos y trabaje de forma más eficaz con un sistema creado para la fabricación en el mundo real.</b>
          </p>
        </div>
        <div className="rowThreeSectionLeft" style={styles.rowImageSectionRight}>
          <img
            style={styles.image}
            src={softwareRing}
            alt=""
          />
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className={"rowFour"} style={styles.rowTextRight}>
        <div className={"rowFourSectionLeft"} style={styles.rowImageSectionLeft}>
          <img
            style={styles.image}
            src={softwareRingModel}
            alt=""
          />
        </div>
        <div className={"rowThreeSectionRight"}
          style={styles.rowTextSectionRight}
        >
          <h2 style={styles.rowTextTitle}>
            Reparación automática de STL: Como por arte de magia
          </h2>
          <p>
            Prepare sus modelos para la fundición con confianza gracias a la reparación STL automatizada
            de RhinoArtisany al avanzado sistema de colocación de bebederos.
            Esta potente herramienta garantiza una transición fluida del diseño a la producción, ofreciendo:
          </p>
          <ul>
            <li>
              Reparación automática de STL con un solo clic, evitando errores que provocan retrasos en la producción.
              Sin necesidad de otras aplicaciones ni pérdidas de tiempo en exportaciones e importaciones.
            </li>
          </ul>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className={"rowFive"} style={{...styles.rowTextRight, marginTop: "20px"}}>
        <div className={"rowFiveSectionLeft"} style={{...styles.rowImageSectionLeft, flex: 0.6}}>
          <img
            style={{...styles.image, maxHeight: "600px"}}
            src={softwareShowcase}
            alt=""
          />
        </div>
        <div className={"rowThreeSectionRight"}
          style={{...styles.rowTextSectionRight, flex: 0.4, background: "white", color: "black"}}
        >
          <h2 style={styles.rowTextTitle}>
            Reparación automática de STL: Como por arte de magia
          </h2>
          <p>
            Prepare sus modelos para la fundición con confianza gracias a la reparación STL automatizada
            de RhinoArtisany al avanzado sistema de colocación de bebederos.
            Esta potente herramienta garantiza una transición fluida del diseño a la producción, ofreciendo:
          </p>
          <ul>
            <li>
              Reparación automática de STL con un solo clic, evitando errores que provocan retrasos en la producción.
              Sin necesidad de otras aplicaciones ni pérdidas de tiempo en exportaciones e importaciones.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
