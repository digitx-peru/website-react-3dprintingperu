import useMediaQuery from "../../../hooks/useMediaQuery";
import EndOfContent from "../EndOfContent";
// import newsTwoImageFirst from "../../../assets/newsImages/newsTwo/news_image_user_washing.jpg";

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
      <h2>Politica de privacidad</h2>
      <p>
      De conformidad con lo establecido en la Ley N° 29733, Ley de Protección de Datos Personales, 
      y su Reglamento detallado en el Decreto Supremo N° 003-2013-JUS, declaro que en forma libre, 
      previa, expresa e inequívoca, brindo mi consentimiento a 3D PRINTING PERU S.A.C. (en adelante 
      3D PRINTING) para dar el tratamiento a mis datos Personales, con lo cual podrán acceder, 
      recopilar, registrar, organizar, almacenar, conservar, elaborar, modificar, bloquear, suprimir, 
      extraer, consultar, utilizar, transferir o procesar de cualquier otra forma prevista por la Ley. 
      Así mismo, autorizo a 3D PRINTING o a la compañía que esta designe, ubicada o no
       en territorio nacional, para que realice el tratamiento de mis datos personales
        con los siguientes fines: el contacto para participar en estudios de investigación de
         mercado, el envío de anuncios comerciales, la comercialización de productos y 
      servicios, entre otros. 3D PRINTING garantiza que toda la información proporcionada será 
      guardada bajo estricta confidencialidad.
      
      Conozco que puedo ejercer, de acuerdo a la legislación vigente, los derechos de información, acceso, 
      actualización, inclusión, rectificación, supresión y oposición sobre sus datos personales, 
      enviando una comunicación al correo electrónico: compliance@3dprinting.com.pe
      </p>
      <EndOfContent />
    </div>
  );
}
