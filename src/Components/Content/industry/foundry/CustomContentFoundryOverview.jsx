import useMediaQuery from "../../../../hooks/useMediaQuery";

import foundryQuickCast from "../../../../assets/industryImages/foundry/industry_foundry_quickcast.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentFoundryOverview({ width }) {
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
      <h2>Fundición</h2>
      <p>
        La aplicación de la impresión 3D o manufactura aditiva en la fundición
        tiene el potencial de revolucionar los procesos tradicionales de esta
        industria. Apalancándoselo en los beneficios de la impresión 3D, las
        fundiciones pueden mejorar su eficiencia, reducir costos, y alcanzar una
        mayor flexibilidad en el diseño.
      </p>
      <p>Los casos de uso conocidos de la impresión 3D en la fundición son:</p>
      <ul>
        <li>Patrones maestros para moldes de arena (Sand casting)</li>
        <li>
          Patrones de sacrificio para el proceso de cera perdida (Investment
          Casting)
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={foundryQuickCast} alt="" />
      </div>
      <EndOfContent />
    </div>
  );
}
