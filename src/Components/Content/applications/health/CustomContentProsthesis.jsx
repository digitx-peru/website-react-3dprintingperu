// import useMediaQuery from "../../../../hooks/useMediaQuery";

import TextImageRow from "../../../TextImageRow";

export default function CustomContentSoftware({ width }) {
  // const isDevice = useMediaQuery(1000);
  // const isMedium = useMediaQuery(1320);

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
      <TextImageRow
        sectionName={"rowOne"}
        imageName={"health/prot_kneecap.jpg"}
      >
        <p>
          El mayor desafío para las empresas que fabrican dispositivos como
          miembros artificiales, soportes, férulas y más, es la necesidad de
          controlar el costo de producción. Mejoras en la eficiencia pueden
          ayudarles a ampliar la accesibilidad y garantizar una entrega más
          rápida a las personas que necesitan estos dispositivos. Una forma de
          optimizar la producción y reducir los costos es mediante la
          manufactura aditiva (MA). Mientras que la fabricación de prótesis
          tradicional puede ser costosa y llevar mucho tiempo, la MA puede
          eliminar la necesidad de herramientas costosas y reducir la cantidad
          de desperdicio de material. Tamaño del Mercado Global de Prótesis y
          Ortopedia, Segmentos, Perspectivas y Pronóstico de Ingresos 2022-2028
          por Tipo, Tecnología y Regiones. Research and Markets. Noviembre de
          2022.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowTwo"}
        imageRight={true}
        imageName={"health/prot_plant.jpg"}
      >
        <h2 style={styles.rowTextTitle}>Prótesis plantares</h2>
        <p>
          La línea de materiales PAx de la impresora SLS 380 de 3D Systems
          ofrece propiedades mecánicas superiores y un acabado superficial
          excepcional, permitiendo la producción de plantillas ortopédicas de
          alta calidad con un bajo costo por pieza. Los materiales DuraForm PAx,
          tanto en su versión Black como Natural, se distinguen por su elevada
          resistencia al impacto y su alto índice de elongación a la rotura, lo
          que garantiza dispositivos de máxima durabilidad y una vida útil
          prolongada. Además, mediante un proceso de pulido por vapor, las
          piezas fabricadas en PAx alcanzan una calidad y una apariencia
          indistinguibles de las obtenidas por moldeo por inyección.
        </p>
        <p>
          Una alternativa que ha sido probada exitosamente en esta aplicacion es
          el material Pro-Black disponible en la linea Figure 4 y PSLA 270
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowThree"}
        imageName={"health/prot_casing.png"}
      >
        <h2 style={styles.rowTextTitle}>
          Férulas
        </h2>
        <p>
          La impresión 3D es ideal para crear férulas personalizadas, utilizando
          la tecnología SLS o FDM con Nylon (PA) para obtener piezas rígidas,
          resistentes y ligeras. En el portafolio de 3D Printing Peru (3DP)
          contamos con la SLS 380 de la marca 3D Systems y las impresoras de
          filamento Intamsys, todas capaces de imprimir material Nylon con
          precisión y sin distorsiones.
        </p>
        <p>
          Usado en combinación con softwares como Geomagic FreeForm, por otro
          lado, está especialmente orientado a diseños orgánicos y biológicos.
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowFour"}
        imageRight={true}
        imageName={"health/prot_legs.png"}
      >
        <h2 style={styles.rowTextTitle}>Encaje protésico</h2>
        <p>
          Las tecnologías SLS y FDM, al usar TPU, transforman el encaje
          protésico de una "carcasa" rígida a una interfaz dinámica y adaptable.
          Al combinar un escaneo 3D preciso con la capacidad de variar la
          rigidez local del TPU (ya sea con el relleno en FDM o con estructuras
          de rejilla en SLS), se crea un encaje que se ajusta como un
          guante, amortigua los impactos del movimiento y distribuye la presión
          de manera inteligente, eliminando así las causas fundamentales del
          dolor y la incomodidad.
        </p>
        <p>
          En el portafolio de 3D Printing Peru (3DP) contamos con la SLS 380 de
          la marca 3D Systems y las impresoras de filamento Intamsys en sus
          modelos 310 Neo y 310 Apollo, capaces de imprimir material TPU de
          manera confiable
        </p>
      </TextImageRow>

      {/* //////////////////////////////////////////////////////////////////////////////////// */}
      <TextImageRow
        sectionName={"rowFive"}
        imageName={"health/prot_skull.png"}
        backgroundColor={"#C9C6CA"}
      >
        <h2 style={styles.rowTextTitle}>Placa craneal y otros implantes</h2>
        <p>
          La impresión 3D ha revolucionado la fabricación de implantes médicos
          al permitir la creación de dispositivos altamente personalizados y
          precisos. Un ejemplo de esto son las placas craneales e implantes
          usados para fusion intersomática. Estos implantes antes producidos
          exclusivamente en titanio, actualmente muchos son producidas en
          polyetheretherketone (PEEK), un material de similar resistencia, y
          resistencia a contaminacion, pero más ligero que el titanio. El
          portafolio de 3D Printing Peru cuenta con impresoras capaces de
          imprimir en PEEK como la EXT 220 MED de 3D Systems y las impresoras de
          filamento Intamsys 310 Apollo, 410 y 610HT.
        </p>
        <p>
          La EXT 220 MED de 3D Systems, es la única plataforma de extrusión en
          el mundo que cuenta con una sala limpia integrada y está validada por
          los principales fabricantes de dispositivos médicos y hospitales de
          todo el mundo.
        </p>
      </TextImageRow>
    </div>
  );
}
