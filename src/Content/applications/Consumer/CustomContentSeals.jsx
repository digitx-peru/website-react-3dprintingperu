import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentSeals() {
  return (
    <>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"applications/consumer/seals/seals_prototype.png"}
      >
        <h2>Soluciones para prototipado y producción pre-serie</h2>
        <p>
          Nuestras soluciones de impresión 3D eliminan los costos de herramental
          y los tiempos de entrega para <b>sellos y juntas</b>, y producen
          piezas finales con la calidad, precisión y propiedades mecánicas que
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
        imageName={"applications/consumer/seals/seals_production_level.png"}
      >
        <h2>Rendimiento de uso final</h2>
        <p>
          La exactitud, la precisión y las propiedades mecánicas son factores
          críticos para la validación del producto y los componentes de uso
          final. Alcanza rendimiento de producción tanto con moldeo digital
          eggshell como con impresión 3D directa, ya que ofrecen una calidad
          superficial impecable, capacidad de texturizado, fidelidad de detalle
          y exactitud excepcional.
        </p>
        <p>
          El método <b>eggshell</b> permite obtener piezas reales de silicona en
          tan solo 24 horas. Para la entrega más rápida, los componentes
          elastoméricos biocompatibles y resistentes a químicos se pueden
          imprimir directamente en 3D en cuestión de minutos.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageName={"applications/consumer/seals/seals_materials.png"}
      >
        <h2>Materiales de primer nivel</h2>
        <p>
          Para validar tu diseño, el <b>método eggshell</b> es compatible con la
          mayoría de las siliconas estándar, tanto de estaño como de platino.
          Nuestros materiales elastoméricos para impresión 3D ofrecen excelente
          resistencia al desgarro para pruebas de forma y ajuste. Además, son
          biocompatibles y tienen resistencia química a hidrocarburos y
          productos de limpieza (probados para compatibilidad en contacto
          sellado y superficial según ASTM D543 y USCAR2).
        </p>
      </TextImageRow>
    </>
  );
}
