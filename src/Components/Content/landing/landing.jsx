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
            Diseña más rápido, imprime con precisión y funde sin sorpresas.
            En 45 minutos te mostramos el flujo completo con las impresoras de joyería del portafolio de 3D Printing Perú y RhinoArtisan, el nuevo software de diseño que distribuimos en Perú.
            Verás en vivo:
            RhinoArtisan: modelado paramétrico de anillos y engastes, bibliotecas de gemas, tallas automáticas y exportación directa a STL
            Impresión para joyería: qué resina calcinable usar, cómo lograr detalle fino y superficies limpias para microfusión
            
            Ideal para:

            <ul>
              <li>Diseñadores de joyería</li>
              <li>Orfebres</li>
              <li>Talleres de fundición</li>
              <li>Marcas de joyería que busquen optimizar sus procesos</li>
            </ul>            
            
            Presentan equipo de 3D Printing Perú junto al equipos de 2Shapes desarrolladores de RhinoArtisan.
            
          </p>
        </div>
        <div className="column2">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeXMZdyCXzpjfjzYmN9uGLFUqNRqqffqlta1Vjx3wBv5koO8A/viewform?embedded=true" width="640" height="1024" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  );
}
