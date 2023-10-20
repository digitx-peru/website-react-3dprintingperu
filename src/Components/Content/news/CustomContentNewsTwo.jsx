import useMediaQuery from "../../../hooks/useMediaQuery";

export default function CustomContentFoundry({ width }) {
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
      <p>
        ROCK HILL, Carolina del Sur, 1 de mayo de 2023 - Hoy, 3D Systems (NYSE:
        DDD) anunció que ha llegado a un acuerdo para adquirir Wematter, un
        fabricante sueco de impresoras 3D, lo que ampliará el portafolio de
        Selective Laser Sintering (SLS) de 3D Systems. Wematter diseñó e
        introdujo el Wematter Gravity en 2019, que ofreció una solución SLS
        asequible y lista para usar (plug and play) en el mercado. El sistema de
        bucle cerrado está diseñado para funcionar en un entorno de menor tamaño
        fuera de una planta de fabricación, como una oficina. Desde entonces,
        Wematter ha ampliado su línea con tres modelos: Gravity Essential,
        Gravity Essential+ y Gravity Enterprise, para facilitar la adopción de
        SLS en una gama más amplia de entornos de usuario. Como resultado de
        esta adquisición, 3D Systems podrá poner a disposición de un público más
        amplio una solución de alta confiabilidad y asequible para la producción
        de piezas de uso final.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img src="https://picsum.photos/400/300" alt="" />
      </div>
      <p>
        El Wematter Gravity fue diseñado para hacer que la fabricación aditiva
        sea accesible en entornos más pequeños. Su huella pequeña (0.7 m x 0.7 m
        x 1.5 m) requiere un 3X menos de espacio, pero tiene un volumen de
        construcción que es más del 300% más grande (300 mm x 300 mm x 300 mm)
        que soluciones comparables, y puede completar todo un trabajo en 24
        horas o menos. El Gravity es CE-marked para su uso en oficinas,
        hospitales y laboratorios de investigación para fabricar piezas de
        producción para una amplia gama de aplicaciones, incluyendo automoción,
        bienes de consumo y dispositivos médicos.
      </p>
      <p>
        El Gravity solo requiere una fuente de alimentación estándar y una
        conexión Ethernet, lo que permite una instalación plug-and-play y puede
        estar operativo en menos de una hora desde la entrega. Esto se facilita
        mediante la sencilla interfaz que guía al usuario a través del proceso
        de configuración e impresión. El Wematter Gravity incluye una cartera de
        20 materiales para abordar una amplia variedad de aplicaciones. El
        sistema único de manipulación de polvo mantiene un bucle cerrado,
        asegurando que no haya polvo suelto. Además, el sistema facilita el
        reciclaje del polvo no utilizado para múltiples ciclos, lo que permite a
        los fabricantes utilizar completamente el material y eliminar el
        desperdicio. Dado que el Gravity está conectado a la nube, los usuarios
        pueden iniciar y supervisar trabajos de impresión de forma remota, lo
        que ayuda a aumentar la productividad y reduce la demanda de recursos.
        La conexión basada en la nube también facilita el mantenimiento
        proactivo y preventivo para maximizar el tiempo de actividad y la
        productividad.
      </p>
      <p>
        "Continuamos invirtiendo en nuestro portafolio de soluciones a través de
        adquisiciones estratégicas que agregan tecnologías únicas para permitir
        la rápida adopción de la fabricación aditiva en entornos de producción",
        dijo el Dr. Jeffrey Graves, presidente y CEO de 3D Systems. "Wematter ha
        diseñado una solución SLS que es incomparable en la industria y que
        permite que la tecnología se utilice en entornos donde previamente se
        habría considerado imposible. Desde el anuncio el otoño pasado de que 3D
        Systems se convertiría en el distribuidor global exclusivo de los
        productos de Wematter, nos dimos cuenta cada vez más de lo beneficioso
        que sería tener a este equipo y tecnología como parte de nuestra
        empresa. A través de la adquisición de Wematter, nos beneficiaremos de
        la singular aproximación y experiencia en ingeniería de su equipo como
        parte de nuestra organización de I+D, y nuestros clientes se
        beneficiarán de las capacidades de esta plataforma elegante y fácil de
        usar a un precio más asequible. Creo que esto permitirá que una nueva
        categoría de fabricantes aproveche los beneficios de la fabricación
        aditiva para transformar sus negocios y acelerar la innovación".
      </p>
      <p>
        Robert Kniola, presidente de Wematter, agregó: "Estamos ansiosos por ser
        parte de 3D Systems y beneficiarnos de la reputación de la empresa como
        líder en innovación, y de poder expandir la disponibilidad de nuestra
        solución Gravity SLS a clientes de todo el mundo a través de su red de
        ventas global. Nuestra exclusiva solución SLS está diseñada para
        acelerar el desarrollo de productos y la producción de volumen in situ
        con solo pulsar un botón. Estamos emocionados por las oportunidades que
        ofrece llevar la tecnología SLS a una nueva clase de clientes para 3D
        Systems y el potencial que desbloqueará para mejorar la eficiencia en la
        entrega de piezas de alta calidad para uso final".
      </p>
      <p>
        Se espera que esta transacción se cierre en julio de 2023. La compañía
        comentará más sobre esta inversión en su próximo informe de ganancias,
        programado para el martes 9 de mayo de 2023, a las 8:30 a.m., hora del
        este. Para obtener más información, visite el sitio web de la empresa.
      </p>
      <p>
        Actualización: Lima, Perú, 17 de setiembre de 2023 La Wematter Gravity
        ha sido agregado al portafolio de 3D Systems como la nueva SLS 300.
      </p>
    </div>
  );
}
