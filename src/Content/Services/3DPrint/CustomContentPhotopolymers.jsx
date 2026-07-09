import useBreakpoints from "../../../hooks/useBreakpoints";

import TextImageRow from "../../../Components/Content/TextImageRow";
import TitleMessageContainer from "../../../Components/Content/TitleMessageComponent/TitleMessageContainer";
import IconInfoCard from "../../../Components/Content/TitleMessageComponent/IconInfoCard";
import PhotopolymerScreenTable from "../../../Components/PhotopolymerScreen/PhotopolymerScreenTable";

export default function CustomContentPhotopolymers() {
  return (
    <>
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"services/3dprint/photopolymers/photopolymers_figure_4.png"}
      >
        <h2>Figure 4</h2>
        <p>
          Tecnología ultra-rapida para conseguir prototipos y partes de uso
          final en un solo dia. Ideal para producciones de bajo volumen
        </p>
        <p>Algunas aplicaciones exitosas de esta tecnologia son:</p>
        <ul>
          <li>Patrones de sacrificio para joyeria</li>
          <li>Conectores eléctricos</li>
          <li>Piezas para drones</li>
        </ul>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TitleMessageContainer
        title={"Figure 4 dentro de los procesos de producción aditiva"}
        message={
          "La tecnología Figure 4 tiene la versatilidad de poder lograr varios tipos de piezas, usando sus 21 tipos de resinas disponibles, puede producir prototipos funcionales o modelos de concepto, y además piezas de producción (para usuario final)."
        }
      >
        <IconInfoCard
          title={"Modelos de Concepto"}
          message={
            "La velocidad, precision y gran acabado superficial de las piezas de la Figure 4, permite a los desarrolladores de producto crear piezas de los diseños durante todo el proceso"
          }
          iconImagePath="/images/components/PhotopolymersPage/infocard/info_card_icon_concept.png"
          backgroundColor={"#D9D9D8"}
        />
        <IconInfoCard
          title={"Prototipado rápido"}
          message={
            "Los prototipos de la Figure 4 son 100% funcionales, con materiales que pueden simular polipropileno, policarbonato, ABS y compuestos rigidos"
          }
          iconImagePath="/images/components/PhotopolymersPage/infocard/info_card_icon_piece.png"
          backgroundColor={"#D9D9D8"}
        />
        <IconInfoCard
          title={"Manufactura Directa"}
          message={
            "La alta precision y consistencia de la Figure 4 la hacen ideal para producir lotes intermedios (cuando la cantidad no justifica utilizar inyeccion de plastico."
          }
          iconImagePath="/images/components/PhotopolymersPage/infocard/info_card_icon_printer.png"
          backgroundColor={"#D9D9D8"}
        />
      </TitleMessageContainer>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TitleMessageContainer title={"Figure 4 - Capacidades y Consideraciones"}>
        <PhotopolymerScreenTable />
      </TitleMessageContainer>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageName={
          "services/3dprint/photopolymers/photopolymers_surface_finishing.png"
        }
      >
        <h2>Acabado superficial</h2>
        <p>
          Una de las caracteristicas mas importantes de esta tecnología es su
          resolución superficial (1920 x 1080 pixels), con la cual logra piezas
          de un acabado superficial excelente sea liso o texturado.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
    </>
  );
}
