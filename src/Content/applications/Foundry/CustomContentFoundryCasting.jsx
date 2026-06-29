import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentFoundryCasting() {
  return (
    <>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"applications/foundry/casting/foundry_casting_propulsor.png"}
      >
        <h2>Patrones de cera</h2>
        <p>
          Un área donde la manufactura aditiva ha hecho avances significativos
          es en el proceso de cera perdida o investment casting.
          Tradicionalmente, los patrones de cera (patrones de sacrificio) eran
          creados usando molde por inyección (link to wiki) o tallando
          manualmente la cera, pero la impresión 3D ha traido nuevas
          posibilidades y ventajas a este proceso. En este sentido, las
          impresión 3D permite fabricar los patrones de cera o los moldes
          directamente, evitando así la necesidad de los métodos tradicionales.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"applications/foundry/casting/foundry_casting_white_piece.png"}
      >
        <h2>Complejidad y flexibilidad de diseño</h2>
        <p>
          La construcción capa por capa de los modelos de fundición impresos en
          3D permite a las fundiciones entregar de forma rápida y económica
          geometrías que antes eran imposibles o difíciles de producir. La
          combinación de estrategias de optimización topológica, aligeramiento o
          consolidación de ensambles con la fabricación aditiva de modelos de
          fundición permite a las fundiciones digitales responder a las demandas
          más exigentes de los clientes.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageName={"applications/foundry/casting/foundry_casting_grey_piece.png"}
        backgroundColor={"#7BEFB1"}
      >
        <h2>Reducción de costos</h2>
        <p>
          Además de eliminar la necesidad de herramental, que cuesta decenas a
          cientos de miles de dólares y requiere espacio de almacenamiento, la
          reducción de mano de obra gracias a la compatibilidad posterior con la
          automatización, la minimización de desperdicios por la alta eficiencia
          del material, las soluciones integrales de impresión 3D de extremo a
          extremo y la menor necesidad de acabado gracias a las superficies
          lisas de los modelos contribuyen a reducir el costo por pieza.
        </p>
      </TextImageRow>
    </>
  );
}
