import useMediaQuery from "../../../hooks/useMediaQuery";

import healthOrtOptions from "../../../assets/healthImages/health_ort_options.jpg";
import healthProtKneecap from "../../../assets/healthImages/health_prot_kneecap.jpg";

import softwareTeddy from "../../../assets/softwareImages/software_teddy.jpg";
import softwareLion from "../../../assets/softwareImages/software_lion.jpg";

import EndOfContent from "../EndOfContent";

export default function CustomContentSoftware({ width }) {
  const isDevice = useMediaQuery(1000);
  const isMedium = useMediaQuery(1320);

  const styles = {
    rowText: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      alignItems: "center",
    },
    rowText2: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      alignItems: "center",
      boxSizing: "border-box",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: width,
      fontSize: isMedium ? "12px" : "16px",
      lineHeight: "1.5",
    },
    imageRight: {
      float: "right",
      marginLeft: 20,
    },
    imageLeft: {
      float: "left",
      marginRight: 20,
    },
  };

  return (
    <div className="textContainer" style={styles.container}>
      <div style={styles.rowText}>
        <div
          style={{
            width: isDevice ? "100%" : "50%",
            padding: isDevice ? "10px 10px 10px 10px" : "0px 80px 0px 200px",
            boxSizing: "border-box",
            height: isDevice ? "250px" : "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            El arte del pavé y el dominio de las piedras preciosas
          </h2>
          <p>
            Diseñar con piedras preciosas es más que precisión: se trata de
            crear emoción, belleza e impacto. RhinoArtisan reimagina el diseño
            con pavé y piedras preciosas, dándole la libertad de explorar sin
            límites y la confianza para lograr resultados impecables.  Sienta la
            fluidez de las herramientas intuitivas, el poder de la perfección
            instantánea y la alegría de ver cómo sus ideas brillan y se hacen
            realidad. Desde el delicado pavé hasta las atrevidas declaraciones
            con piedras preciosas, cada creación se convierte en una obra
            maestra de brillantez.
          </p>
        </div>
        <div
          style={{
            width: isDevice ? "100%" : "50%",
            height: isDevice ? "250px" : "400px",
            boxSizing: "border-box",
            padding: isDevice ? "" : "0px 80px 0px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="imgStyleWhite"
        >
          <img
            style={{
              height: "400px",
              width: "auto",
              maxWidth: "100%",
              backgroundColor: "white",
            }}
            src={softwareTeddy}
            alt=""
          />
        </div>
      </div>

      <div style={styles.rowText2}>
        <div
          style={{
            display: "flex",
            justifyContent: isDevice ? "center" : "end",
            height: "400px",
            width: isDevice ? "100%" : "50%",
          }}
        >
          <img
            style={{ height: "400px", width: "auto", maxWidth: "100%" }}
            src={softwareLion}
            alt=""
          />
        </div>
        <div
          style={{
            backgroundColor: "rgb(71,167,153)",
            color: "white",
            boxSizing: "border-box",
            height: isDevice ? "" : "400px",
            padding: isDevice ? "10px 10px 10px 10px" : "0px 200px 0px 50px",
            width: isDevice ? "" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            Utilice bocetos e imágenes: Simplifique el modelado complejo
          </h2>
          <p>
            Lleve su creatividad al siguiente nivel utilizando bocetos e
            imágenes de referencia directamente en su espacio de trabajo. Esta
            potente función le permite modelar incluso los diseños más
            intrincados y las formas orgánicas con facilidad y precisión. Tanto
            si sigue un boceto dibujado a mano como una foto de un cliente, las
            guías visuales hacen que el proceso sea más intuitivo tanto para
            principiantes como para expertos.
          </p>
          <p>
            Ofrezca a sus clientes exactamente lo que imaginan, por complejo o
            único que sea. Con un mayor control, fluidez y un flujo de diseño
            natural, convertirás las ideas en realidad más rápido que nunca
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(45,45,45)",
          padding: isDevice ? "10px" : "50px 200px",
          color: "white",
        }}
      >
        <p>
          Las ventajas de la impresión 3D para dispositivos ortopédicos y
          protésicos:
        </p>
        <ul>
          <li>
            Personalización sencilla: Personalice los dispositivos para
            proporcionar un ajuste preciso y contorneado para cada individuo, lo
            que contribuye a una mayor comodidad y una experiencia general
            mejorada.
          </li>
          <li>
            Funcionalidad adicional: Diseñe dispositivos que permitan un
            movimiento más natural para aumentar la movilidad del receptor.
          </li>
          <li>
            Flexibilidad de diseño: Cree geometrías complejas y diseños
            intrincados, lo que resulta en dispositivos que son más funcionales,
            cómodos y estéticamente agradables.
          </li>
          <li>
            Materiales ligeros: Los materiales más ligeros, junto con la
            capacidad de imprimir diseños y geometrías intrincadas, permiten una
            mayor comodidad y mejor funcionalidad.
          </li>
          <li>
            Precisión mejorada: Los dispositivos ortopédicos impresos en 3D
            pueden crear dispositivos altamente precisos que se ajustan
            exactamente a la anatomía del paciente, lo que ayuda a reducir el
            riesgo de complicaciones o la necesidad de ajustes adicionales.
          </li>
          <li>
            Entrega rápida: Imprima dispositivos rápidamente, a menudo en
            cuestión de horas o días, lo que es especialmente ideal para
            aquellos que necesitan soluciones inmediatas.
          </li>
          <li>
            Durabilidad mejorada: Fabrique dispositivos con materiales ligeros
            pero duraderos con propiedades mecánicas que pueden resistir el
            desgaste que conlleva el uso diario.
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "rgb(71,167,153)",
          padding: isDevice ? "10px" : "50px 200px",
          color: "white",
        }}
      >
        <p>
          El portafolio de 3D Printing Peru con el respaldo de 3D Systems y
          Oqton brinda las soluciones necesarias para lograr una produccion con
          todas las caracteristicas mencionadas arriba. Para el diseño de las
          piezas con formas personalizadas para cada paciente se usan en
          combinacion los softwares D2P and Geomagic Freeform. Una vez obtenido
          el diseño, para manufacturarlo, se tienen las siguientes opciones:
        </p>
        <p>
          Para ortesis, las cuales usualmente son de un material tipo plastico,
          las impresoras que pueden usarse son la SLS 300 y la SLS 380. Las
          diferencias mas importantes es que la primera puede usarse en un
          ambiente de oficina mientras que la SLS 380 necesita un ambiente mas
          industrial. Se recomienda el uso de esta ultima cuando el volumen de
          produccion sea alto ya que se puede lograr un costo por pieza mas bajo
          que con la primera. Asi mismo, los materiales recomendados para estas
          impresoras son:
        </p>

        <h3>SLS 300:</h3>
        <ul>
          <li>
            Aurora PA12: Polyamid 12 (PA12) es un material muy adecuado para la
            fabricación de prototipos funcionales, la fabricación de unidades
            individuales y la producción en serie. Aurora PA12 tiene una
            excelente resistencia a grasas, aceites, combustibles, fluidos
            hidráulicos, agua, álcalis y soluciones salinas, así como a muchos
            disolventes. También tiene una muy buena resistencia a la fractura
            por estrés, incluso en presencia de productos químicos, así como
            capacidad de amortiguación del ruido y las vibraciones.
          </li>
        </ul>
        <h3>SLS 380:</h3>
        <ul>
          <li>
            DuraForm® PAx: La línea de materiales PAx ofrece excelentes
            propiedades mecánicas y un acabado de superficie óptimo para
            producir ortopédicos de alta calidad a un bajo costo por pieza.
            Tanto el DuraForm PAx Black como el DuraForm PAx Natural ofrecen una
            alta resistencia al impacto y una alta elongación hasta la rotura,
            lo que resulta en dispositivos muy duraderos y de larga duración.
            Con la adición del vapor smoothing, el acabado de superficie de las
            piezas PAx imita la calidad y apariencia de las piezas moldeadas por
            inyección.
          </li>
          <li>
            DuraForm® PA: Este nylon similar al polipropileno es altamente
            duradero y biocompatible. Utilice este material para construir
            prototipos que soporten pruebas funcionales y produzca instrumentos
            y guías duraderos sin necesidad de herramientas.
          </li>
        </ul>
        <p>
          En cuanto a protesis, las cuales requieren materiales mucho mas
          durables y resistentes, el material que destaca es el titanio grado 23
          (Ti Gr23), dentro de nuestro portafolio la impresora de marca 3D
          Systems que recomendamos es la DMP Flex 350 Dual
        </p>
      </div>
    </div>
  );
}
