import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentCasing() {
  return (
    <>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"applications/consumer/casing/casing_housing.png"}
        backgroundColor={"#7BEFB1"}
      >
        <h2>Soluciones para prototipado y producción pre-serie</h2>
        <p>
          Nuestras soluciones de impresión 3D eliminan los costos de herramental
          y los tiempos de entrega para carcasas y cubiertas, y producen piezas
          finales con la calidad, precisión y propiedades mecánicas que
          necesitas.
        </p>
        <p>
          Nuestras soluciones integrales de fabricación aditiva están diseñadas
          para ofrecer calidad, fiabilidad y productividad líderes en la
          industria, manteniendo tu operación eficiente para la producción en
          alto volumen de prototipos, fabricación puente y personalización
          masiva.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"applications/consumer/casing/casing_controller.png"}
      >
        <h2>Rendimiento de uso final</h2>
        <p>
          La exactitud, la precisión y las propiedades mecánicas son factores
          críticos para los componentes de uso final y la validación de
          producto.
        </p>
        <p>
          Los prototipos 3D realmente funcionales permiten acelerar el
          desarrollo y la validación en condiciones reales antes de realizar
          inversiones costosas en herramental de producción. Estos prototipos
          realistas pueden replicar el producto final en apariencia y función,
          incluyendo características mecánicas, calidad, rendimiento y ergonomía
          optimizada.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageName={"applications/consumer/casing/casing_finishing.png"}
      >
        <h2>Acabado estético</h2>
        <p>
          Los materiales están disponibles en una amplia gama de colores, desde
          negros y blancos opacos hasta transparentes, e imprimen con una
          calidad superficial excepcional, similar a la del moldeo por
          inyección.
        </p>
        <p>
          También se pueden añadir texturas 3D de forma digital para reducir los
          procesos de acabado posteriores y representar con precisión las piezas
          de uso final. Los materiales son compatibles con metalizado o pintura
          para lograr acabados premium.
        </p>
      </TextImageRow>
    </>
  );
}
