import useMediaQuery from "../../../../hooks/useMediaQuery";

import foundryLostWax from "../../../../assets/industryImages/foundry/industry_foundry_lost_wax.jpg";
import foundryQuickCast from "../../../../assets/industryImages/foundry/industry_foundry_quickcast.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentFoundry({ width }) {
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
      <h3>Para Cera Perdida</h3>
      <p>
        Un área donde la manufactura aditiva ha hecho avances significativos es
        en el proceso de cera perdida o investment casting. Tradicionalmente,
        los patrones de cera (patrones de sacrificio) eran creados usando molde
        por inyección (link to wiki) o tallando manualmente la cera, pero la
        impresión 3D ha traido nuevas posibilidades y ventajas a este proceso.
        En este sentido, las impresión 3D permite fabricar los patrones de cera
        o los moldes directamente, evitando así la necesidad de los métodos
        tradicionales.
      </p>
      <p>
        La integración de la impresión 3D en el proceso de cera perdida ofrece
        varios beneficios:
      </p>
      <ul>
        <li>Complejas geometrías</li>
        <li>Ahorro de tiempo y costo</li>
        <li>Flexibilidad y personalización del diseño</li>
        <li>Mejora de precisión y exactitud</li>
        <li>Opciones de materiales</li>
      </ul>
      <p>
        El proceso de cera perdida en fundición tiene algunas características
        que la diferencian del mismo proceso usado en joyería. Y debido a esto,
        en el portafolio de 3D Printing Peru contamos con las siguientes
        opciones: especializadas y optimizadas para fundición.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={foundryLostWax} alt="" />
      </div>
      <p>
        Projet MJP 2500IC; La tecnología Multijet permite la impresión de piezas
        100% de cera, con una resolución de 42u en z . Además, el costo del
        material de construcción es bajo lo que resulta en un costo por parte
        muy económico. Esta impresora es recomendable para tamaños de pieza
        mediana (volumen de impresión x,y,z es 310x212x145) y destaca por el
        reducido tiempo de post proceso que además requiere muy poca
        intervención manual.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={foundryQuickCast} alt="" />
      </div>
      <p>
        SLA 750, 950 Las impresoras de Stereolitografia (SLA); cuentan con el
        material CastPro, una resina calcinable que se desintegra. Con este
        material y el modo de impresión Quickcast, es posible imprimir con capas
        de 0.05 - 0.15mm, y así producir piezas muy grandes, súper ligeras,
        fáciles de manipular y que contienen muy poco material de construcción.
        Debido a esto último son piezas de un costo bajo.
      </p>
      <EndOfContent />
    </div>
  );
}
