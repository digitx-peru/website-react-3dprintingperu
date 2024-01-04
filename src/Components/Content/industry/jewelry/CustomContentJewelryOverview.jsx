import useMediaQuery from "../../../../hooks/useMediaQuery";

import jewelryProcess from "../../../../assets/industryImages/jewelry/industry_jewelry_process.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelryOverview({ width }) {
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
      <h2>Joyeria</h2>
      <p>
        La aplicación de la impresión 3D (o manufactura aditiva) en joyería ha
        traído avances importantes para esta industria, transformando la forma
        en que las joyas son diseñadas y manufacturadas. Esta tecnología ofrece
        varios beneficios, que incluyen la mejora de las capacidades de diseño,
        mejora de la eficiencia, y aumento de las opciones de personalización
        para sus clientes.
      </p>
      <p>
        De la mejora en las capacidades de diseño, el método tradicional
        requiere de una artesanía minuciosa, lo que limita el producto final.
        Sin embargo, con la impresión 3D, los diseñadores pueden transformar
        intrincados diseños a piezas físicas, sin ningún esfuerzo, ampliando así
        los limites a la creatividad y permitiendo la producción de piezas
        complejas y llenas de detalles.
      </p>
      <p>
        Las impresoras de 3D Systems te permiten trabajar en varias etapas del
        proceso de vaciado &#40;Lost wax casting&#41;. Las etapas que puedes
        optimizar con la manufactura aditiva son: 1&#41; Diseño de prototipos
        para pruebas 2&#41; Impresión del patrón en cera, estas piezas son
        impresas usualmente con el soporte para el “árbol” y 3&#41; impresión de
        patrón maestro para la elaboración de moldes de caucho
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img style={{ height: "300px" }} src={jewelryProcess} alt="" />
      </div>
      <EndOfContent />
    </div>
  );
}
