import useMediaQuery from "../../../hooks/useMediaQuery";

import TextImageRow from "../../TextImageRow";

export default function CustomContent3Ddesign({ width }) {
  const isDevice = useMediaQuery(1000);
  const isMedium = useMediaQuery(1320);

  const styles = {

    //// Generic
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: width,
      fontSize: isMedium ? "12px" : "16px",
      lineHeight: "1.5",
    },
  };

  return (
    <div className="textContainer" style={styles.container}>
      <TextImageRow sectionName={"rowOne"} imageRight={true} imageName={'3d/3d_model_blue.png'}>
        <p>
          3D Printing Peru ofrece servicios integrales de diseño CAD 3D, ayudando a
          empresas de Perú a convertir ideas innovadoras en realidad. Nuestro equipo
          de diseñadores CAD altamente capacitados utiliza software de última generación
          y las mejores prácticas de la industria para desarrollar modelos 3D precisos,
          eficientes y listos para manufactura. Ya sea que requieras diseño de producto,
          ingeniería inversa o diseños de ensamble detallados, contamos con la experiencia
          necesaria para cumplir con tus necesidades específicas.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow sectionName={"rowTwo"} imageName={'3d/3d_model_colors.png'} backgroundColor= {"#C9C6CA"}>
        <ul>
          <li>
            <b>Modelado Paramétrico:</b> Creación de modelos 3D inteligentes que pueden modificarse
            y actualizarse fácilmente, garantizando flexibilidad de diseño y mayor eficiencia en el desarrollo.
          </li>
          <li>
            <b>Modelado de Superficies:</b> Desarrollo de superficies 3D complejas y estéticamente cuidadas para productos
            con formas y geometrías detalladas.
          </li>
          <li>
            <b>Diseño de Ensambles:</b> Diseño e integración de múltiples componentes en un ensamble 3D completo,
            asegurando un ajuste adecuado y un funcionamiento óptimo.
          </li>
          <li>
            <b>Diseño para Manufactura</b> (DFM): Optimización de los diseños para procesos de fabricación más eficientes
            y rentables, reduciendo tiempos y costos de producción.
          </li>
          <li>
            <b>Ingeniería Inversa:</b> Creación de modelos CAD 3D precisos a partir de piezas físicas existentes,
            permitiendo modificaciones, mejoras y la optimización del producto.
          </li>
        </ul>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}

    </div>
  );
}
