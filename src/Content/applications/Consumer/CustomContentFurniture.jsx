import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentFurniture() {
  return (
    <>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"applications/consumer/furniture/furniture_esker_chair.png"}
      >
        <h2>Libertad de tamaño y diseño</h2>
        <p>
          La compañía <b>Model No. Furniture</b> está redefiniendo la industria
          del mueble. Fabrica piezas de alta gama con un enfoque sostenible y de
          alta tecnología, usando las impresoras de extrusión de pellets EXT
          Titan de 3D Systems. La marca convierte aserrín y otros residuos
          vegetales en materiales imprimibles en 3D, y produce únicamente bajo
          demanda gracias a la impresión 3D. Al combinar diseño computacional,
          ciencia de materiales y fabricación avanzada usando una impresora
          capaz de producir piezas de más de un metro cúbico, Model No. avanza
          hacia su objetivo de lograr un impacto ambiental cero. Lee más sobre
          este caso de éxito aquí.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"applications/consumer/furniture/furniture_bulb.png"}
      >
        <h2>Hazlo Sostenible</h2>
        <p>
          Al igual que Model No., Gantri y BlueCycle pone la sostenibilidad en
          el centro. La propuesta de BlueCycle consiste en recuperar redes y
          cuerdas del océano y transformarlas en muebles de diseño. Cada pieza
          incorpora como mínimo un 50% de plástico reciclado de origen marino,
          principalmente nailon y poliéster. Gantri fabrica lámparas de diseño
          con impresión 3D FDM y materiales propios de origen vegetal. Esta base
          biobasada reemplaza plásticos convencionales y permite producir piezas
          minimalistas y sostenibles bajo demanda.
        </p>
        <p>
          Tanto la plataforma EXT Titan y las impresoras Intamsys pueden usar
          materiales desarrollados por terceras partes. La cercanía de 3DP con
          los equipos de desarrollo de soluciones de 3D Systems e Intamsys hace
          que la validación de nuevos materiales (pellets o filamento) puedan
          ser validados para el uso de estos equipos.
        </p>
      </TextImageRow>
    </>
  );
}
