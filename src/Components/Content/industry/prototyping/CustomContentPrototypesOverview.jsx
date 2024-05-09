import useMediaQuery from "../../../../hooks/useMediaQuery";

import prototypeDesign from "../../../../assets/industryImages/prototype/industry_prototype_design.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelry({ width }) {
  const isDevice = useMediaQuery(824);
  const styles = {
    rowText:{
      display:"flex",
      flexDirection:isDevice ? "column" :"row",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      width: width,
      fontSize: isDevice ? "12px" : "16px",
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
        <div style={{width: isDevice ? "" : "50%",padding: isDevice ? "10px 10px 10px 10px":"80px 80px 80px 200px",boxSizing: "border-box",height:"400px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h2>Prototipado y arte</h2>
          <p>
            La aplicacion de la impresión 3D en el campo del arte ha introducido una
            nueva dimension de creatividad, extendiendo los limites de la expresión
            artistica y permitiendo a los artistas transformar sus ideas en
            realidad. La manufactura aditiva no esta limitado en formas lo que le da
            a los artistas la posibilidad de explorar nuevos metodos y redefinir las
            practicas mas tradicionales. La impresion 3D abre nuevas oportunidades
            en diferentes sub aplicaciones de diseño y arte, como: escultura,
            modelos de arquitectura, prototipado de productos y replicas, tanto de
            objetos como personas.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width:isDevice ?  "100%":"50%",
            padding: "40px 0 40px 0",
          }}
        >
          <img style={{ height: isDevice ? "250px": "400px", width:"100%",maxWidth:"500px" }} src={prototypeDesign} alt="" />
        </div>
      </div>
    </div>
  );
}
