import useMediaQuery from "../../../hooks/useMediaQuery";

import EndOfContent from "../EndOfContent";
import newsThreeImageFirst from "../../../assets/newsImages/newsThree/news_image_new_ext_1270_titan_pellet.png";

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
      {/* <h2>La nueva EXT 1270</h2> */}
      <p>
        ROCK HILL, Carolina del Sur, 23 de octubre de 2023: 3D Systems
        (NYSE:DDD) anunció que Icon Technologies Limited, una empresa de
        termoformado y moldeo rotacional con sede en Winkler, Manitoba (Canadá),
        ha adquirido una impresora 3D EXT 1270 Titan Pellet. La empresa es
        conocida por proporcionar soluciones termoformadas personalizadas e
        innovadoras a sus clientes OEM para diversas aplicaciones industriales,
        que incluyen vehículos recreativos, productos de construcción y sistemas
        de climatización. Con la incorporación de la impresora 3D EXT 1270 Titan
        Pellet a su planta de fabricación, Icon cree que producirá moldes
        termoformados grandes con una velocidad aumentada de manera drástica y
        costos significativamente más bajos.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ width: "500px" }} src={newsThreeImageFirst} alt="" />
      </div>
      <p>
        El sistema EXT 1270 Titan Pellet de 3D Systems es una solución de
        fabricación aditiva industrial versátil y confiable diseñada para
        aprovechar los alimentadores de gránulos termoplásticos de bajo costo.
      </p>
      <p>
        "Con la amplitud de las industrias a las que servimos y los grandes
        moldes que producimos, es imperativo que maximicemos nuestra
        productividad", dijo John Loewen, fundador y CEO de Icon Technologies
        Limited. "La impresora 3D EXT Titan Pellet de 3D Systems es la mejor
        solución para ayudarnos a proporcionar productos de alta calidad a
        nuestros clientes. La combinación de volumen de construcción, ingeniería
        industrial, gránulos económicos y la cámara climatizada junto con
        materiales validados para aplicaciones de termoformado destaca sobre
        otras impresoras de formato grande. Además, visité la instalación de
        fabricación el año pasado y quedé impresionado por el equipo de
        ingeniería de aplicaciones y la variedad de proyectos en los que están
        trabajando. Más allá de las personas, ver la línea de fabricación de
        cerca, el proceso de control de calidad y la atención al detalle
        reforzaron que estaba tomando la decisión correcta no solo para mejorar
        el servicio que brindamos a nuestros clientes, sino también para ayudar
        a que sus negocios crezcan".
      </p>
      <p>
        El sistema EXT 1270 Titan Pellet de 3D Systems es una solución de
        fabricación aditiva industrial versátil y confiable diseñada para
        aprovechar los gránulos termoplásticos de bajo costo. El sistema cuenta
        con volúmenes de impresión de hasta 1270 mm x 1270 mm x 1829 mm (50 in x
        50 in x 72 in), lo que permite imprimir la mayoría de las herramientas
        de termoformado grandes, como las requeridas por Icon. Los sistemas EXT
        Titan Pellet son compatibles con una variedad de tamaños de boquillas,
        lo que permite imprimir capas más finas que otros sistemas disponibles.
        Esto permite que los moldes de termoformado se produzcan, en la mayoría
        de los casos, sin la necesidad de un mecanizado posterior. Cuando Icon
        requiere una superficie más fina o tolerancias más ajustadas en moldes
        específicos que producen, el cabezal de herramienta del husillo les
        permitirá lograr una superficie lisa y precisa sin mover la impresión a
        una máquina CNC por separado.
      </p>
      <p>
        Las impresoras 3D EXT Titan Pellet están ayudando a diversos fabricantes
        a lograr ahorros significativos en costos y plazos de entrega en la
        producción directa de grandes moldes de termoformado, con ahorros de
        hasta el 88% en costos de materias primas y hasta el 65% en la reducción
        del tiempo de entrega en comparación con alternativas de metal
        mecanizadas o cerámicas moldeadas. No solo son los moldes impresos en 3D
        menos costosos y más rápidos de producir, sino que también tienen un
        rendimiento extremadamente bueno. Por ejemplo, materiales compuestos
        como policarbonato relleno de vidrio son soluciones probadas para el
        conformado de láminas de calibre pesado (0.220"), con moldes que han
        resistido bien más de 1,000 disparos sin aparente desgaste.
      </p>
      <p>
        "Icon tiene relaciones de larga data con los clientes y es muy respetado
        por ofrecer moldes de alta calidad", dijo Brad Mount, director global de
        desarrollo comercial - Titan, 3D Systems. "Al ser el primer fabricante
        en Canadá en agregar una impresora 3D EXT 1270 Titan Pellet a su flujo
        de trabajo de fabricación, están demostrando su compromiso con la
        innovación continua, al mismo tiempo que allanan el camino para que sus
        clientes transformen sus negocios. Nos enorgullece nuestra colaboración
        con Icon, tanto a través del trabajo de nuestro Grupo de Innovación en
        Aplicaciones que valida materiales y procesos de impresión para las
        aplicaciones de Icon, como a través de nuestra red de soporte global.
        Espero ver cómo Icon puede hacer crecer su negocio al maximizar los
        beneficios de este nuevo sistema".
      </p>
      <EndOfContent />
    </div>
  );
}
