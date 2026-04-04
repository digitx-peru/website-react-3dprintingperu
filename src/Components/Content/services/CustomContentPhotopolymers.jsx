import useMediaQuery from "../../../hooks/useMediaQuery";

import TextImageRow from "../../TextImageRow";
import TitleMessageInfocard from "../../TitleMessageInfocard";
import IconInfoCard from "../../IconInfoCard";

export default function CustomContentPhotopolymers({ width }) {
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
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"services/3dprint/photopolymers/photopolymers_figure_4.png"}
      >
        <h2 style={styles.rowTextTitle}>Figure 4</h2>
        <p>
          Tecnología ultra-rapida para conseguir prototipos y partes de uso
          final en un solo dia. Ideal para producciones de bajo volumen
        </p>
        <p>Algunas aplicaciones exitosas de esta tecnologia son:</p>
        <ul>
          <li>Patrones de sacrificio para joyeria</li>
          <li>Conectores eléctricos</li>
          <li>Piezas para drones</li>
        </ul>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TitleMessageInfocard
        title={"Figure 4 dentro de los procesos de producción aditiva"}
        message={
          "La tecnología Figure 4 tiene la versatilidad de poder lograr varios tipos de piezas, usando sus 21 tipos de resinas disponibles, puede producir prototipos funcionales o modelos de concepto, y además piezas de producción (para usuario final)."
        }
      >
        <IconInfoCard
          title={"Modelos de Concepto"}
          message={
            "La velocidad, precision y gran acabado superficial de las piezas de la Figure 4, permite a los desarrolladores de producto crear piezas de los diseños durante todo el proceso"
          }
        />
        <IconInfoCard
          title={"Modelos de Concepto"}
          message={
            "La velocidad, precision y gran acabado superficial de las piezas de la Figure 4, permite a los desarrolladores de producto crear piezas de los diseños durante todo el proceso"
          }
        />{" "}
        <IconInfoCard
          title={"Modelos de Concepto"}
          message={
            "La velocidad, precision y gran acabado superficial de las piezas de la Figure 4, permite a los desarrolladores de producto crear piezas de los diseños durante todo el proceso"
          }
        />
      </TitleMessageInfocard>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageName={"services/3dprint/photopolymers/photopolymers_finishing.png"}
      >
        <h2 style={styles.rowTextTitle}>Acabado superficial</h2>
        <p>
          Una de las caracteristicas mas importantes de esta tecnología es su
          resolución superficial (1920 x 1080 pixels), con la cual logra piezas
          de un acabado superficial excelente sea liso o texturado.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}
