import { useRef } from "react";
import useMediaQuery from "../../../../hooks/useMediaQuery";

import TextImageRow from "../../../TextImageRow";

export default function CustomContentSoftware({ width }) {
  // 1. Create Refs for your sections
  const designersRef = useRef(null);
  const manufacturesRef = useRef(null);
  const storesRef = useRef(null);

  // 2. Define your navigation data
  const navItems = [
    { label: "Diseñadores", ref: designersRef },
    { label: "Manufactura", ref: manufacturesRef },
    { label: "Tiendas", ref: storesRef },
  ];

  // 3. Create a single handler function
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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

    //// Content styles
    rowTextTitle: {
      marginBottom: "20px",
    },

    //// Nav styles
    sectionJumpContainer: {
      backgroundColor: "#E3BF7B",
      position: "sticky",
      top: 0,
      padding: "0px 200px",
      marginBottom: "20px",
    },
    sectionJumpNavList: {
      display: "flex",
      flexDirection: "row",
      columnGap: 50,
      padding: "0px 0px",
    },
    listItem: {
      listStyle: "none",
      cursor: "pointer",
    },
  };

  return (
    <div className="contentContainer" style={styles.container}>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <nav className="sectionJumpContainer" style={styles.sectionJumpContainer}>
        <ul className="sectionJumpNavList" style={styles.sectionJumpNavList}>
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleScroll(item.ref)}
              style={styles.listItem}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowOne"}
        imageRight={true}
        imageName={"softwareImages/software_teddy.jpg"}
      >
        <h2 style={styles.rowTextTitle} ref={designersRef}>
          El arte del pavé y el dominio de las piedras preciosas
        </h2>
        <p>
          Diseñar con piedras preciosas es más que precisión: se trata de crear
          emoción, belleza e impacto. RhinoArtisan reimagina el diseño con pavé
          y piedras preciosas, dándole la libertad de explorar sin límites y la
          confianza para lograr resultados impecables.Sienta la fluidez de las
          herramientas intuitivas, el poder de la perfección instantánea y la
          alegría de ver cómo sus ideas brillan y se hacen realidad. Desde el
          delicado pavé hasta las atrevidas declaraciones con piedras preciosas,
          cada creación se convierte en una obra maestra de brillantez.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageName={"softwareImages/software_lion.jpg"}
      >
        <h2 style={styles.rowTextTitle}>
          Utilice bocetos e imágenes: Simplifique el modelado complejo
        </h2>
        <p>
          Lleve su creatividad al siguiente nivel utilizando bocetos e imágenes
          de referencia directamente en su espacio de trabajo. Esta potente
          función le permite modelar incluso los diseños más intrincados y las
          formas orgánicas con facilidad y precisión. Tanto si sigue un boceto
          dibujado a mano como una foto de un cliente, las guías visuales hacen
          que el proceso sea más intuitivo tanto para principiantes como para
          expertos.
        </p>
        <p>
          Ofrezca a sus clientes exactamente lo que imaginan, por complejo o
          único que sea. Con un mayor control, fluidez y un flujo de diseño
          natural, convertirás las ideas en realidad más rápido que nunca
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageRight={true}
        imageName={"softwareImages/software_ring.jpg"}
      >
        <h2 style={styles.rowTextTitle} ref={manufacturesRef}>
          Sistema avanzado de diseño de bebederos
        </h2>
        <p>
          Prepare sus modelos para la fundición con confianza gracias a la
          reparación STL automatizada de RhinoArtisan y al avanzado sistema de
          colocación de bebederos. Esta potente herramienta garantiza una
          transición fluida del diseño a la producción, ofreciendo:
        </p>
        <ul>
          <li>
            <b>Reparación automática de STL con un solo clic, </b>
            evitando errores que provocan retrasos en la producción. Sin
            necesidad de otras aplicaciones ni pérdidas de tiempo en
            exportaciones e importaciones.
          </li>
          <li>
            <b>Colocación guiada de bebederos, </b>
            totalmente personalizable y compatible con la geometría. Elija entre
            bebederos de varias piezas, estructuras de flujo internas o externas
            y utilice etiquetas geométricas para identificar referencias y
            tamaños en varios modelos.
          </li>
        </ul>
        <p>
          <b>
            Ahorre tiempo, reduzca riesgos y trabaje de forma más eficaz con un
            sistema creado para la fabricación en el mundo real.
          </b>
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowFour"}
        imageName={"softwareImages/software_ring_model.jpg"}
      >
        <h2 style={styles.rowTextTitle}>
          Reparación automática de STL: Como por arte de magia
        </h2>
        <p>
          Prepare sus modelos para la fundición con confianza gracias a la
          reparación STL automatizada de RhinoArtisany al avanzado sistema de
          colocación de bebederos. Esta potente herramienta garantiza una
          transición fluida del diseño a la producción, ofreciendo:
        </p>
        <ul>
          <li>
            Reparación automática de STL con un solo clic, evitando errores que
            provocan retrasos en la producción. Sin necesidad de otras
            aplicaciones ni pérdidas de tiempo en exportaciones e importaciones.
          </li>
        </ul>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowFive"}
        imageName={"softwareImages/software_showcase.jpg"}
      >
        <p ref={storesRef}>
          Dentro del módulo Boutique, puede elegir un diseño, presentárselo al
          cliente y adaptarlo a su gusto en tiempo real , sin necesidad de
          experiencia 3D, diseñado para utilizarla directamente en la tienda,
          delante del cliente,{" "}
          <b>creando una experiencia de compra única y atractiva.</b>
        </p>
      </TextImageRow>
    </div>
  );
}
