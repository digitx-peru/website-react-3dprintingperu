import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentFoundryMoulds() {
  return (
    <>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"applications/foundry/moulds/foundry_mould_grey_metal.png"}
      >
        <h2>Patrones para moldes de arena</h2>
        <p>
          Una de las aplicaciones clave de la manufactura aditiva es para
          elaborar moldes de arena que posteriormente se usarán para elaborar la
          pieza de metal. En lugar de depender del trabajo artesanal manual,
          patrones intrincados y precisos pueden ser generados desde diseños
          digitales usando la impresión 3D. Esto reduce el error humano y el
          tiempo de producción. Al imprimir patrones para moldes de arena, las
          fundiciones pueden crear componentes con gran detalle y sumamente
          precisos, reduciendo el gasto de material y todo esto se refleja
          finalmente en una mejora de la calidad de la pieza final.
          Adicionalmente, la posibilidad de modificar fácilmente los patrones
          facilitan iteraciones rápidas para mejorar el diseño.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"applications/foundry/moulds/foundry_mould_white_metal.png"}
      >
        <h2>Complejidad y flexibilidad de diseño</h2>
        <p>
          La construcción capa por capa de los modelos de fundición impresos en
          3D permite a las fundiciones entregar de forma rápida y económica
          geometrías que antes eran imposibles o difíciles de producir. La
          tecnología aditiva hace posible crear cavidades ocultas, refuerzos
          internos y agujeros ciegos que superan las limitaciones geométricas
          del mecanizado CNC de 6 ejes. También se pueden incluir el sistema de
          alimentación, los canales de colada y los bebederos.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageName={"applications/foundry/moulds/foundry_mould_printing.png"}
      >
        <h2>Alternativas para diferentes tamaños de piezas</h2>
        <p>
          En el portafolio de 3D Printing Perú contamos con las impresoras EXT
          800, 1070 y EXT 1270, de la marca 3D Systems, para la produccion de
          piezas grandes. Estas impresoras tienen como carácteristicas
          distintivas que tienen plataformas de construcción grandes y el
          material de construcción es en formato pellet. Debido a esto tienen un
          costo por pieza muy bajo. Así mismo, ambos modelos son configurables y
          se les puede agregar un segundo extrusor para filamento y un spindle
          para poder realizar corte CNC durante el proceso de impresión
          (fabricación híbrida). Las alternativas para piezas chicas y medianas
          vienen con las impresoras de la marca Intamsys en sus modelos 310, 410
          y 610.
        </p>
      </TextImageRow>
    </>
  );
}
