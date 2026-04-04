import useMediaQuery from "../../../hooks/useMediaQuery";

import TextImageRow from "../../TextImageRow";

export default function CustomContentJewelryPatterns({ width }) {
  const isDevice = useMediaQuery(1000);
  const isMedium = useMediaQuery(1320);

  const styles = {
    //// Generic
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: width,
      fontSize: isMedium ? "12px" : "16px",
      lineHeight: "1.5",
    },

    //// Content
    rowTextTitle: {
      marginBottom: "20px",
    },
  };

  return (
    <div className="textContainer" style={styles.container}>
      <TextImageRow sectionName={"rowOne"} imageName={"jewelry/jewelry_pattern_green_shape.png"}>
        <h2 style={styles.rowTextTitle}>Patrones para vaciado</h2>
        <p>
          Diseñado para el moldeado de joyería profesional, Figure 4® JCAST-GRN
          20 produce patrones maestros precisos, reproducibles y muy detallados
          para el moldeado de joyas. Con mínimo residuo y cenizas, es ideal para
          conseguir piezas de joyería de alta calidad.
        </p>
        <p>
          Te proveemos con las curvas de quemado para que logres una pieza final
          perfecta
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow sectionName={"rowTwo"} imageRight={true} imageName={"jewelry/jewelry_pattern_rubber_mold.png"}>
        <h2 style={styles.rowTextTitle}>Patrones para moldes de caucho</h2>
        <p>
          Fabricamos patrones maestros para joyería con un rendimiento de
          material excepcional, centrado en plásticos de alta rigidez que
          previenen la distorsión del patrón. Estos materiales son resistentes a
          altas temperaturas (HDT &gt;300 °C), lo que garantiza su
          compatibilidad con procesos de vulcanización (HTV) sin riesgo de
          inhibición. Gracias a esta tecnología, no solo se acelera el proceso
          de producción de horas en lugar de días, sino que también se mejora la
          calidad final, permitiendo la creación de diseños más complejos con
          una precisión y un acabado superficial de ultra alta resolución,
          incluso en geometrías delicadas.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}
