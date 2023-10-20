import useMediaQuery from "../../../hooks/useMediaQuery";

import healthOrtOptions from "../../../assets/healthImages/health_ort_options.jpg";
import healthProtKneecap from "../../../assets/healthImages/health_prot_kneecap.jpg";

import EndOfContent from "../EndOfContent";

export default function CustomContentMedDevices({ width }) {
  const isDevice = useMediaQuery(768);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      rowGap: 15,
      width: width,
      fontSize: isDevice ? "16px" : "20px",
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
      <h2>Ortesis y Prótesis</h2>
      <p>
        El aumento de incidentes de lesiones deportivas y accidentes
        automovilísticos, combinado con un número creciente de amputaciones
        relacionadas con la diabetes, son los principales impulsores del
        esperado crecimiento en la demanda de prótesis y ortopedia a nivel
        mundial. Estimado en 7 mil millones de dólares en 2022, se espera que el
        mercado crezca a 9 mil millones de dólares para 2028
      </p>
      <p>
        El mayor desafío para las empresas que fabrican dispositivos como
        miembros artificiales, soportes, férulas y más, es la necesidad de
        controlar el costo de producción. Mejoras en la eficiencia pueden
        ayudarles a ampliar la accesibilidad y garantizar una entrega más rápida
        a las personas que necesitan estos dispositivos. Una forma de optimizar
        la producción y reducir los costos es mediante la manufactura aditiva
        (MA). Mientras que la fabricación de prótesis tradicional puede ser
        costosa y llevar mucho tiempo, la MA puede eliminar la necesidad de
        herramientas costosas y reducir la cantidad de desperdicio de material.
      </p>
      <p>
        Tamaño del Mercado Global de Prótesis y Ortopedia, Segmentos,
        Perspectivas y Pronóstico de Ingresos 2022-2028 por Tipo, Tecnología y
        Regiones. Research and Markets. Noviembre de 2022. Lea el artículo.
      </p>
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
          Materiales ligeros: Los materiales más ligeros, junto con la capacidad
          de imprimir diseños y geometrías intrincadas, permiten una mayor
          comodidad y mejor funcionalidad.
        </li>
        <li>
          Precisión mejorada: Los dispositivos ortopédicos impresos en 3D pueden
          crear dispositivos altamente precisos que se ajustan exactamente a la
          anatomía del paciente, lo que ayuda a reducir el riesgo de
          complicaciones o la necesidad de ajustes adicionales.
        </li>
        <li>
          Entrega rápida: Imprima dispositivos rápidamente, a menudo en cuestión
          de horas o días, lo que es especialmente ideal para aquellos que
          necesitan soluciones inmediatas.
        </li>
        <li>
          Durabilidad mejorada: Fabrique dispositivos con materiales ligeros
          pero duraderos con propiedades mecánicas que pueden resistir el
          desgaste que conlleva el uso diario.
        </li>
      </ul>
      <p>
        El portafolio de 3D Printing Peru con el respaldo de 3D Systems y Oqton
        brinda las soluciones necesarias para lograr una produccion con todas
        las caracteristicas mencionadas arriba. Para el diseño de las piezas con
        formas personalizadas para cada paciente se usan en combinacion los
        softwares D2P and Geomagic Freeform. Una vez obtenido el diseño, para
        manufacturarlo, se tienen las siguientes opciones:
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 0 40px 0",
        }}
      >
        <img
          style={{ height: "300px", backgroundColor: "#292929" }}
          src={healthOrtOptions}
          alt=""
        />
      </div>
      <h3>SLS 300:</h3>
      <ul>
        <li>
          Aurora PA12: Polyamid 12 (PA12) es un material muy adecuado para la
          fabricación de prototipos funcionales, la fabricación de unidades
          individuales y la producción en serie. Aurora PA12 tiene una excelente
          resistencia a grasas, aceites, combustibles, fluidos hidráulicos,
          agua, álcalis y soluciones salinas, así como a muchos disolventes.
          También tiene una muy buena resistencia a la fractura por estrés,
          incluso en presencia de productos químicos, así como capacidad de
          amortiguación del ruido y las vibraciones.
        </li>
      </ul>
      <h3>SLS 380:</h3>
      <ul>
        <li>
          DuraForm® PAx: La línea de materiales PAx ofrece excelentes
          propiedades mecánicas y un acabado de superficie óptimo para producir
          ortopédicos de alta calidad a un bajo costo por pieza. Tanto el
          DuraForm PAx Black como el DuraForm PAx Natural ofrecen una alta
          resistencia al impacto y una alta elongación hasta la rotura, lo que
          resulta en dispositivos muy duraderos y de larga duración. Con la
          adición del vapor smoothing, el acabado de superficie de las piezas
          PAx imita la calidad y apariencia de las piezas moldeadas por
          inyección.
        </li>
        <li>
          DuraForm® PA: Este nylon similar al polipropileno es altamente
          duradero y biocompatible. Utilice este material para construir
          prototipos que soporten pruebas funcionales y produzca instrumentos y
          guías duraderos sin necesidad de herramientas.
        </li>
      </ul>
      <p>
        En cuanto a protesis, las cuales requieren materiales mucho mas durables
        y resistentes, el material que destaca es el titanio grado 23 (Ti Gr23),
        dentro de nuestro portafolio la impresora de marca 3D Systems que
        recomendamos es la DMP Flex 350 Dual
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "400px" }} src={healthProtKneecap} alt="" />
      </div>
      <EndOfContent />
    </div>
  );
}
