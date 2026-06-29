import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentJewelryCasting() {
  return (
    <>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"applications/jewelry/casting/jewelry_casting_blue.png"}
      >
        <h2>Patrones para vaciado</h2>
        <p>
          Si estas buscando la producción de piezas con la mejor calidad que se
          puede lograr, debes implementar el proceso de cera perdida para la
          producción de piezas. Y los equipos de nuestro portafolio que se usan
          para este proceso son la Figure 4 y la MJP 300W Plus, siendo la ultima
          la impresora usada por los líderes mundiales en joyería.
        </p>
        <p>
          Nuestras soluciones de impresión en 3D permiten la creación, iteración
          y producción rápida y rentable de todos los estilos de joyas,
          incluidas aquellas de geometrías más complejas. 
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"applications/jewelry/casting/jewelry_casting_green.png"}
      >
        <h2>Pequeñas joyerías</h2>
        <p>
          Nuestra solucion para joyerias la <b>Figure 4 Standalone</b>. Esta
          impresora utiliza <b>JCAST-GRN 20</b>, plástico fundible, que fue
          desarrollado específicamente para facilitar la fundición de joyería
          con un mínimo de ceniza y residuos después de la quema.
        </p>
        <p>
          Rápida ejecución: velocidad de construcción vertical de 15 mm/h.
          Soportes de punta ultrafina MicroPoint™ que permiten un acabado de
          superficie suave, reducen la mano de obra de postprocesamiento y
          aceleran la producción al minimizar el pulido.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageName={"applications/jewelry/casting/jewelry_casting_red.png"}
      >
        <h2>Maxima productividad</h2>
        <p>
          La impresora MJP300W Plus de 3D Systems, produce modelos de alta
          fidelidad y acabado liso que son totalmente compatibles con los
          procesos de fundición estándar. Fundición precisa y de alta calidad
          garantizada: combustión 100% del modelo, sin residuos de ceniza. Sus
          ventajas principales son:
        </p>
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
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"applications/jewelry/casting/jewelry_casting_whirl.png"}
      >
        <h2>Joyería especializada</h2>
        <p>
          El material <b>VisiJet M2P-CST Crystal</b> de la impresora{" "}
          <b>MJP2500 Plus</b> crea nuevas oportunidades para producir una clase
          distinta de joyería que incluye detalles y paredes ultra delgadas y
          estructuras de malla, perfectas para anillos, pulseras, colgantes,
          broches y más. Permite imprimir geometrías complejas que no
          sobrevivirían a la manipulación ni a los pasos de postprocesado en
          cera.
        </p>
        <p>
          Este acrilato mezclado de ingeniería utiliza cera y elementos
          estabilizadores para aportar resistencia y durabilidad, manteniendo
          una combustión limpia. VisiJet M2P-CST Crystal es fácil de manipular y
          lo suficientemente resistente para preservar el máximo detalle.
        </p>
      </TextImageRow>
    </>
  );
}
