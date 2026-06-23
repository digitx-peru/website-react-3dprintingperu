import useMediaQuery from "../../hooks/useMediaQuery";

import TextImageRow from "../../Components/Content/TextImageRow";

import TitleMessageContainer from "../../Components/Content/TitleMessageContainer";
import IconInfoCard from "../../Components/Content/IconInfoCard";

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
      <TitleMessageContainer
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
          iconImagePath="\images\infocard\info_card_icon_concept.png"
        />
        <IconInfoCard
          title={"Modelos de Concepto"}
          message={
            "Los prototipos de la Figure 4 son 100% funcionales, con materiales que pueden simular polipropileno, policarbonato, ABS y compuestos rigidos"
          }
          iconImagePath="\images\infocard\info_card_icon_piece.png"
        />
        <IconInfoCard
          title={"Modelos de Concepto"}
          message={
            "La alta precision y consistencia de la Figure 4 la hacen ideal para producir lotes intermedios (cuando la cantidad no justifica utilizar inyeccion de plastico."
          }
          iconImagePath="\images\infocard\info_card_icon_printer.png"
        />
      </TitleMessageContainer>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TitleMessageContainer
        title={"Figure 4 dentro de los procesos de producción aditiva"}
        message={
          "La tecnología Figure 4 tiene la versatilidad de poder lograr varios tipos de piezas, usando sus 21 tipos de resinas disponibles, puede producir prototipos funcionales o modelos de concepto, y además piezas de producción (para usuario final)."
        }
      >
        <table className="Figure 4 capacity" style={{ width: "60%" }}>
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <tr style={{ height: "60px" }}>
            <th>Descripción</th>
            <th>Valor</th>
            <th>Consideraciones</th>
          </tr>
          <tr style={{ height: "60px" }}>
            <td>Máximo tamaño de pieza</td>
            <td>XYZ: 124 x 70 x 195 mm</td>
            <td>Piezas más grandes pueden ensamblarse</td>
          </tr>
          <tr style={{ height: "60px" }}>
            <td>Resolución en Z</td>
            <td>20u a 50u</td>
            <td>Depende del material</td>
          </tr>
          <tr style={{ height: "60px" }}>
            <td>Resistencia a la flexión</td>
            <td>22 - 130 mpa</td>
            <td rowspan="2">
              Si necesitas piezas que puedan resistir esfuerzos mecánicos
              (torque) te invitamos a ver los metodos como{" "}
              <b>
                impresión en filamento (FDM) o vaciado con silicona y uretano
              </b>
            </td>
          </tr>
          <tr style={{ height: "60px" }}>
            <td>Modulo de flexión</td>
            <td>680 - 4300 mpa</td>
          </tr>
        </table>
      </TitleMessageContainer>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageName={"services/3dprint/photopolymers/photopolymers_surface_finishing.png"}
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
