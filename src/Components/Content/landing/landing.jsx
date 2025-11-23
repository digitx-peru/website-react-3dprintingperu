import useMediaQuery from "../../../hooks/useMediaQuery";
import EndOfContent from "../EndOfContent";

export default function CustomContentLanding({ width }) {
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
    columnContainer: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      alignItems: isDevice ? "center" : "start",
      textAlign: "justify",
      columnGap: 100,
      width: width,
      fontSize: isDevice ? "16px" : "20px",
      lineHeight: "1.5",
    },
    information: {
      fontSize: isDevice ? "20px" : "24px",
      marginTop: isDevice ? "15px" : "0px",
      marginBottom: isDevice ? "15px": "0px"
    }
  };

  return (
    <div className="textContainer" style={styles.container}>
      <div className="columnContainer" style={styles.columnContainer}>
        <div className="column1">
          <p style={styles.information}>
            Más allá de la Impresión 3D de escritorio: Cuándo Dar el Salto de la Impresión por Filamento Industrial
            Descubre las diferencias clave entre impresoras 3D de escritorio y industriales. Exploraremos características, ventajas y limitaciones, y veremos ejemplos de casos de éxito en:
            <ul>
              <li>Industria aeroespacial</li>
              <li>Fundición</li>
              <li>Medicina y salud</li>
              <li>Transporte</li>
            </ul>            
            ¡Únete a nosotros para descubrir cómo la impresión 3D puede revolucionar tu industria o negocio!
          </p>
        </div>
        <div className="column2">
          <iframe width= {isDevice ? "324px" : "600px"} height="720px" src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAFKUIcyc0hUOUNUT1o3OTU0UFQyWkROMVlRTDBDN0dHTS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{maxWheight:"100vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div>
      </div>
    </div>
  );
}
