import useMediaQuery from "../../../../hooks/useMediaQuery";

import prototypeDesign from "../../../../assets/industryImages/prototype/industry_prototype_design.jpg";
import prototypeArt from "../../../../assets/industryImages/prototype/industry_prototype_art.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelry({ width }) {
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
      <h2>Prototipado y arte</h2>
      <p>
        La aplicacion de la impresión 3D en el campo del arte ha introducido una
        nueva dimension de creatividad, extendiendo los limites de la expresión
        artistica y permitiendo a los artistas transformar sus ideas en
        realidad. La manufactura aditiva no esta limitado en formas lo que le da
        a los artistas la posibilidad de explorar nuevos metodos y redefinir las
        practicas mas tradicionales. La impresion 3D abre nuevas oportunidades
        en diferentes sub aplicaciones de diseño y arte, como: escultura,
        modelos de arquitectura, prototipado de productos y replicas, tanto de
        objetos como personas.
      </p>
      <h3>Prototipado</h3>
      <p>
        Cuando hablamos de prototipado de piezas, podemos clasificarlo en 2
        grandes grupos en funcion de lo que se quiere validar con este. El
        objetivo puede ser validar el diseño de un producto final para el
        usuario, o validar el diseño de un componente del producto final, un
        ejemplo de este ultimo caso es el de un componente de auto. Por lo tanto
        los podemos llamar prototipo de diseño y funcional respectivamente.
      </p>
      <h4>Prototipo de diseño (Pruebas de concepto)</h4>
      <p>
        La impresión 3D ha revolucionado la creación de prototipos de diseño al
        proporcionar una herramienta versátil y eficiente para transformar
        conceptos en productos tangibles. Con esta tecnología, los diseñadores
        pueden materializar sus ideas de manera rápida y asequible,
        permitiéndoles evaluar la estética, y la reaccion de sus potenciales
        clientes, a los diseños de manera precisa. La capacidad de imprimir
        prototipos en 3D también agiliza el proceso de desarrollo al permitir
        ajustes y mejoras de manera ágil. Esto no solo acelera la llegada de
        productos al mercado, sino que también reduce los costos asociados con
        la creación de prototipos físicos tradicionales. En resumen, la
        impresión 3D se ha convertido en una herramienta indispensable en el
        mundo del diseño, brindando a los diseñadores la capacidad de convertir
        sus ideas en realidad de manera más rápida y eficiente que nunca.
      </p>
      <p>
        En el portafolio de 3D Printing Peru (3DP) contamos con 2 equipos que
        destacan para esta aplicacion, ambos de la tecnologia Color Jet, la CJP
        Projet 660Pro y la CJP Projet 860Pro. La diferencia de ambos es solo en
        el tamaño de la plataforma y por lo tanto en el volumen de impresion,
        teniendo la ultima un volumen mayor que la primera.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={prototypeDesign} alt="" />
      </div>
      <h4>Prototipos funcionales</h4>
      <p>
        La aplicación de la impresión 3D en la elaboración de prototipos de
        partes funcionales ha transformado la ingeniería y el diseño de
        productos. Esta tecnología permite la creación de prototipos de piezas
        con geometrías complejas y funcionalidades específicas de manera rápida
        y precisa. Los ingenieros pueden iterar y perfeccionar diseños sin los
        costosos moldes o herramientas de producción tradicionales. Además, la
        impresión 3D posibilita la incorporación de características avanzadas,
        como estructuras internas optimizadas para la resistencia y la ligereza.
        Esto se traduce en la capacidad de producir prototipos que no solo se
        ven como las partes finales, sino que también funcionan de manera
        idéntica.
      </p>
      <p>
        El portafolio de 3D Printing Peru, cuenta con impresoras y materiales de
        la marca 3D Systems, estos ultimos son de grado ingenieria y en su gran
        mayoria son isotropicos. Nuestros equipos de las tecnologias DLP, MJP y
        SLA cuentan con muchas opciones de materiales para esta aplicacion,
        dependiendo del tipo de esfuerzo y ambiente al que se sometera el
        prototipo funcional.
      </p>
      <h3>Arte</h3>
      <p>
        La impresión 3D ha llevado la personalización de muñecos y miniaturas de
        personas a un nivel completamente nuevo. Esta tecnología permite la
        creación de figuras en miniatura que son réplicas exactas de individuos,
        capturando cada detalle y rasgo distintivo. Desde figuras de acción
        personalizadas hasta estatuillas de recuerdo y muñecos estilo "yo en
        miniatura". Esto ha encontrado aplicación en campos como el arte, la
        industria del entretenimiento y las celebraciones especiales, como bodas
        y eventos familiares.
      </p>
      <p>
        Este nivel de detalle y complejidad de colores es precisamente donde la
        tecnologia CJP destaca y como mencionamos arriba, el portafolio de 3D
        Printing Peru (3DP) cuenta con 2 equipos, la CJP Projet 660Pro y la CJP
        Projet 860Pro.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={prototypeArt} alt="" />
      </div>
      <EndOfContent />
    </div>
  );
}
