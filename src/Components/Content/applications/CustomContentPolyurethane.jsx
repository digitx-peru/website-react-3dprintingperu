import useMediaQuery from "../../../hooks/useMediaQuery";

import TextImageRow from "./TextImageRow"

import EndOfContent from "../EndOfContent";

export default function CustomContentPolyurethane({ width }) {
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
      alignItems: "stretch",
      margin: "0px 0px 5px 0px"
    },
    rowTextRight: {
      display: "flex",
      alignItems: "stretch",
      margin: "0px 0px 5px 0px"
    },
    rowTextSectionLeft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 0.6,
      padding: "0px 80px 0px 200px",
    },
    rowTextSectionRight: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 0.6,
      padding: "0px 200px 0px 80px",

    },
    rowImageSectionLeft: {
      display: "flex",
      flex: 0.4,
      justifyContent: "start",
      alignItems: "center",
      padding: "0px 0px 0px 200px",

    },
    rowImageSectionRight: {
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
    },
    rowTextTitle: {
      marginBottom: "20px"
    }
  };

  return (
    <div className="contentContainer" style={styles.container}>
      <TextImageRow sectionName={'rowOne'} imageName={'urethane.jpg'}>
        <h2 style={styles.rowTextTitle}>
          Vaciado de uretano
        </h2>
        <p>
          La fundición de uretano permite producir piezas finales de plástico rígido, caucho
          y silicona con calidad industrial, ideal para series cortas. 3DP ofrece servicios
          de fundición de uretano con opciones que se adaptan a distintos plazos y presupuestos.
          Este proceso utiliza modelos maestros impresos en 3D y moldes
          de silicona RTV para lograr resultados profesionales.
        </p>
        <p>
          Las piezas de uretano colado son ideales para volúmenes de una a cien unidades cuando se
          requiere buen acabado superficial, color y resistencia. La fundición de poliuretano o silicona
          es una alternativa eficiente entre el prototipado 3D y el moldeo por inyección, ofreciendo un
          equilibrio óptimo entre costo, calidad y tiempo, con opciones de acabado personalizado, pintura
          e integración de insertos.
        </p>
      </TextImageRow>
      <TextImageRow sectionName={'rowTwo'} imageRight={true} imageName={'silicone.jpg'}>
        <h2 style={styles.rowTextTitle}>
          Vaciado de silicona
        </h2>
        <p>
          La silicona es un material excelente para la producción de piezas finales,
          es duradera, flexible, resistente al desgarro, químicamente inerte, fácil de
          limpiar y capaz de soportar altas temperaturas. La silicona puede fabricarse en
          grados ultra suaves, desde Shore A 10, hasta durezas medias cercanas a Shore A 60.
        </p>
        <p>
          Piezas de silicona es ideal para aplicaciones como dispositivos médicos, modelos quirúrgicos,
          utilería, carcasas de tacto suave, accesorios de cocina y muchas otras soluciones que
          requieren elasticidad, seguridad y alto rendimiento.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <div className={"rowThree"} style={{ display: "flex", flexDirection: "column", alignContent: "center", backgroundColor: "#3EFFB4" }}>
        <div className="rowThreeSectionRight" style={{ display: "flex", justifyContent: "center", margin: "20px 0px 20px 0px" }}>
          <img
            style={styles.image}
            src="/images/silicone_urethane_cycle.png"
            alt=""
          />
        </div>
        <div className={"rowThreeSectionLeft"} style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>
          <h2 style={{ ...styles.rowTextTitle, width: "800px", textAlign: "center" }}>
            Amplio rango de aplicaciones industriales
          </h2>
        </div>
      </div>

    </div>
  );
}
