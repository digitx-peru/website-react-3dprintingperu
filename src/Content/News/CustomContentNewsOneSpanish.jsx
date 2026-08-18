import useBreakpoints from "../../hooks/useBreakpoints";

import typography from "../../Style/typography";
import globalStyle from "../../Style/globalStyle";

import SpecialContent from "../../Components/Special/SpecialContent";

export default function CustomContentNewsOneSpanish() {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    text: {
      fontSize: typography.fluid.body,
    },
    images: {
      width: "100%",
      padding: `${globalStyle.verticalPadding.mobile} 0`,
      ...(isDesktop && {
        padding: `${globalStyle.verticalPadding.tablet} 0`,
      }),
      ...(isDesktop && {
        maxWidth: "500px",
        padding: `${globalStyle.verticalPadding.desktop} 0`,
      }),
    },
  };

  return (
    <div style={{ ...styles.container, ...styles.text }}>
      <p>
        ROCK HILL, Carolina del Sur, Abril 19, 2023 3D Systems, anuncio que el
        Hospital de la Universidad de Salzburg (Austria) ha aplicado
        exitosamente su portafolio de tecnologías de manufactura aditiva
        dedicado a salud. Para el hospital es la primera vez que diseñan y
        producen un implante cranial como un dispositivo medico personalizado,
        para la necesidad individual de un paciente. Este implante fue impreso
        en 3D usando el material PEEK.
      </p>
      <p>
        Estas tecnologías fueron traídas juntas por los doctores del hospital
        para atender las necesidades de los pacientes, proveyendo una solución
        personalizable que los pone en la mejor posición para lograr
        intervenciones exitosas.
      </p>
      <p>
        El hospital usó los software de Oqton, primero para crear los modelos 3D
        desde las imágenes CT del paciente y Geomagic Freeform para completar el
        diseño especifico para el cliente de la protesis del occipital. El
        implante cranial fue impreso usando VESTAKEEP® i4 3DF PEEK de Evonik en
        la impresora de extrusion de 3D Systems Kumovis R1. PEEK es un material
        muy apreciado para la producción de dispositivos médicos porque es
        ligero, resistente a la temperatura y a la radiación ionizante, y además
        posee propiedades mecánicas similares al hueso humano. La tecnología de
        Kumovis fue específicamente diseñada para permitir este tipo de
        aplicaciones médicas dentro del hospital.
      </p>
      <img
        style={styles.images}
        src={"/images/pages/news/newsOne/news_image_skull_design_fix.png"}
        alt=""
      />
      <p>
        Se espera que La Adopción de implantes craneales impresos en 3D se
        acelere significativamente basado en los avances de la tecnología. De
        acuerdo al reporte de Acumen Research and Consulting, en febrero 2023,
        el mercado de implantes craneales en el 2021 fue de alrededor de $1.2
        billones y se pronostica que se acercará a $2.1 billones en el 2030. Los
        implantes craneales pueden solucionar varios problemas que incluyen
        trauma, defectos, y reconstrucción. Se prevé que los avances en la
        tecnología - incluyendo materiales y métodos de facturación como la
        impresión 3D - serán los que ayuden a atender este crecimiento en el
        mercado.
      </p>
      <p>
        El comentario acerca de esta extraordinaria cirugía del Dr. Jeffrey
        Graves, presidente y CEO de 3D Systems fue “Estamos emocionados por Mr.
        Trimmer y el alivio que este procedimiento le ha dado, y profundamente
        agradecidos con los talentosos cirujanos y el equipo del Hospital de la
        Universidad de Salzburgo quienes trajeron por primera vez nuestro
        software, hardware y tecnologías de materiales únicos en un hospital
        enfocados en solucionar necesidades especificas. Nosotros creemos que
        este éxito es una prueba en la vida real, del potencial para mejorar los
        resultados de la ortopedia a través del uso de tecnologías integrales de
        fabricación digital en las instalaciones de un hospital. Nuestro enfoque
        de implementación de estas tecnologías integradas en el mismo hospital,
        es una prioridad para nuestra compañía, y uno que nosotros creemos que
        traerá beneficios significativos a los pacientes alrededor del mundo en
        los años venideros.”
      </p>
      <p>
        Como pionero en soluciones de salud personalizadlas, 3D Systems ha
        trabajado con cirujanos por más de una década para planificar más de
        150,000 casos de pacientes-específicos, y para manufacturar aditivamente
        más de 2 millones de implantes e instrumentos para mas de 100
        dispositivos CE-marked y aprobados por la FDA en sus instalaciones de
        clase mundial registradas por la FDA y certificadas según la norma ISO
        13485 en Littleton, Colorado, y Leuven, Bélgica. Para mas detalle del
        procedimiento realizado por el equipo del Hospital de la Universidad De
        Salzburgo (Austria), la traducción en ingles de la nota de prensa del
        hospital se muestra abajo. La nota de prensa completa en alemán esta
        disponible aquí.
      </p>
      <img
        style={styles.images}
        src={"/images/pages/news/newsOne/news_image_user_printer.jpg"}
        alt=""
      />
    </div>
  );
}
