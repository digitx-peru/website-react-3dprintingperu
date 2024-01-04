import useMediaQuery from "../../../../hooks/useMediaQuery";

import jewelrySmallPiece from "../../../../assets/industryImages/jewelry/industry_jewelry_small_piece.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelryRubberMold({ width }) {
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
      <h2>Moldes de caucho</h2>
      <p>
        3D Printing a traves del portafolio de 3D Systems ofrece compatibilidad
        con los procesos de fabricación de moldes para joyería, permitiendo la
        producción en masa con modelos maestros complejos, de alta definición,
        resistentes al calor y de alta calidad para crear su molde de goma en
        cuestión de horas.
      </p>
      <p>
        Nuestra tecnología de impresión 3D Figure 4, junto con nuestra solución
        de material y software para joyería, representa una alternativa rápida a
        procesos laboriosos y limitantes en diseño que involucran múltiples
        pasos.
      </p>
      <ul>
        <li>
          La rápida producción de patrones posibilita la creación de diseños a
          moldes de caucho en cuestión de horas.
        </li>
        <li>
          Reduzca la mano de obra con modelos maestros precisos y un acabado
          superficial superior.
        </li>
        <li>
          Aumente la libertad de diseño con geometrías delgadas y delicadas,
          mallas finas y más.{" "}
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={jewelrySmallPiece} alt="" />
      </div>
      <p>
        Esta última, es una capacidad especialmente importante en la industria
        de la joyería y ahora posible mediante la impresión 3D. Sus clientes
        pueden obtener ahora piezas personalizadas y únicas, diseñadas
        específicamente con sus gustos. Desde anillos de compromiso hasta
        pendientes, la manufactura aditiva permite a los joyeros producir joyas
        únicas en su clase con diseños complejos. Los equipos que recomendamos
        para esta aplicación son 1) Figure 4 Joyería y 2) MJP 2500 Plus. La
        principal diferencia entre ambas es la capacidad de producir más piezas
        con el menor uso de mano de obra, las piezas impresas por la MJP 2500
        Plus requieren un postproceso más corto y con menos intervención humana.
        Si tu producción es menor a 50Kg al año, recomendamos la Figure 4
        Jewelry, con el material MASTER GRY. Puedes ver un video de la Figure 4
        Jewelry <a href="https://youtu.be/NlKi4PJM9bc">aquí</a>.
      </p>
      <EndOfContent />
    </div>
  );
}
