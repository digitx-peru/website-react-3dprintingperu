import TextImageRow from "../../../Components/Content/TextImageRow";
import PolyurethaneImageTitle from "../../../Components/PolyurethanePage/PolyurethaneImageTitle";

export default function CustomContentPolyurethane() {
  return (
    <>
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"/images/pages/services/production/silicone_urethane/urethane.jpg"}
      >
        <h2>Vaciado de uretano</h2>
        <p>
          La fundición de uretano permite producir piezas finales de plástico
          rígido, caucho y silicona con calidad industrial, ideal para series
          cortas. 3DP ofrece servicios de fundición de uretano con opciones que
          se adaptan a distintos plazos y presupuestos. Este proceso utiliza
          modelos maestros impresos en 3D y moldes de silicona RTV para lograr
          resultados profesionales.
        </p>
        <p>
          Las piezas de uretano colado son ideales para volúmenes de una a cien
          unidades cuando se requiere buen acabado superficial, color y
          resistencia. La fundición de poliuretano o silicona es una alternativa
          eficiente entre el prototipado 3D y el moldeo por inyección,
          ofreciendo un equilibrio óptimo entre costo, calidad y tiempo, con
          opciones de acabado personalizado, pintura e integración de insertos.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"/images/pages/services/production/silicone_urethane/silicone.jpg"}
      >
        <h2>Vaciado de silicona</h2>
        <p>
          La silicona es un material excelente para la producción de piezas
          finales, es duradera, flexible, resistente al desgarro, químicamente
          inerte, fácil de limpiar y capaz de soportar altas temperaturas. La
          silicona puede fabricarse en grados ultra suaves, desde Shore A 10,
          hasta durezas medias cercanas a Shore A 60.
        </p>
        <p>
          Piezas de silicona es ideal para aplicaciones como dispositivos
          médicos, modelos quirúrgicos, utilería, carcasas de tacto suave,
          accesorios de cocina y muchas otras soluciones que requieren
          elasticidad, seguridad y alto rendimiento.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <PolyurethaneImageTitle />
    </>
  );
}
