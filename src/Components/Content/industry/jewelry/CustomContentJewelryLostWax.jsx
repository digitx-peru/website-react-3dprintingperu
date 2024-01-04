import useMediaQuery from "../../../../hooks/useMediaQuery";

import jewelryGeneric from "../../../../assets/industryImages/jewelry/industry_jewelry_generic.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelryLostWax({ width }) {
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
      <h2>Cera perdida</h2>
      <p>
        Si estas buscando la produccion de piezas con la mejor calidad que se
        puede lograr, debes implementar el proceso de cera perdida para la
        producción de piezas. Y los equipos de nuestro portafolio que se usan
        para este proceso son la Figure 4 Jewelry, la MJP 2500W Plus y la NUEVA
        MJP 300W, siendo la ultima la impresora usada por los líderes mundiales
        en joyería.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={jewelryGeneric} alt="" />
      </div>
      <p>Las principales caracteristicas de estos equipos son:</p>
      <h3>MJP Wax 3D Printing</h3>
      <ul>
        <li>
          Cera al 100% para una capacidad de fundición sin compromisos con
          procesos de fundición estándar.
        </li>
        <li>Respuesta rápida y alto rendimiento a escala de fábrica.</li>
        <li>
          Resolución superior y soportes disolubles/fundibles que permiten
          reducir la mano de obra de acabado y el pulido de metales preciosos
          costosos, así como una libertad de diseño última.
        </li>
      </ul>
      <h3>Figure 4 Joyería</h3>
      <ul>
        <li>
          Figure 4 JCAST-GRN 20, plástico fundible, fue desarrollado
          específicamente para facilitar la fundición de joyería con un mínimo
          de ceniza y residuos después de la quema.
        </li>
        <li>
          Rápida ejecución: velocidad de construcción vertical de 15 mm/h.
        </li>
        <li>
          Soportes de punta ultrafina MicroPoint™ que permiten un acabado de
          superficie suave, reducen la mano de obra de postprocesamiento y
          aceleran la producción al minimizar el pulido.
        </li>
      </ul>
      <p>
        Nuestras soluciones de impresión en 3D se desarrollaron para producir
        patrones de fundición de joyería que se adaptan a su método actual de
        fabricación. Esto permite la creación, iteración y producción rápida y
        rentable de todos los estilos de joyas, incluidas aquellas de geometrías
        más complejas. Puedes ver como trabaja la MJP2500W en
        <a href="https://youtu.be/z86fKkVP_tc">este</a> video.
      </p>
      <EndOfContent />
    </div>
  );
}
