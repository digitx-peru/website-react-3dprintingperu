import useMediaQuery from "../../../../hooks/useMediaQuery";

import foundryBenefits from "../../../../assets/industryImages/foundry/industry_foundry_benefits.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentFoundry({ width }) {
  const isDevice = useMediaQuery(1000);
  const isMedium = useMediaQuery(1400);

  const styles = {
    rowText:{
      display:"flex",
      flexDirection:isMedium ? "column" :"row",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      rowGap: 15,
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
        <div style={{width: isDevice ? "" : "50%",padding: isMedium ? "10px 10px 10px 10px":"80px 80px 80px 200px",boxSizing: "border-box",height:"500px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3>Para Moldes de arena</h3>
          <p>
            Una de las aplicaciones clave de la manufactura aditiva es para elaborar
            moldes de arena que posteriormente se usarán para elaborar la pieza de
            metal. En lugar de depender del trabajo artesanal manual, patrones
            intrincados y precisos pueden ser generados desde diseños digitales
            usando la impresión 3D. Esto reduce el error humano y el tiempo de
            producción, permitiendo una producción rápida de patrones personalizados
            y prototipos. Al imprimir patrones para moldes de arena, las fundiciones
            pueden crear componentes con gran detalle y sumamente precisos,
            reduciendo el gasto de material y todo esto se refleja finalmente en una
            mejora de la calidad de la pieza final. Adicionalmente, la posibilidad
            de modificar fácilmente los patrones facilitan iteraciones rápidas para
            mejorar el diseño.
          </p>
          <p>
            Un resumen de los beneficios de la impresión 3D sobre los patrones
            tradicionales de madera se muestran a continuación:
          </p>
        </div>
        <div
          style={{            
            width:isDevice ?  "100%":"50%",
            padding:isDevice ?"0px":"10px",
          }}
          className="imgStyleWhite"
        >
          <img style={{ height: "400px", width: "auto",  maxWidth:"100%" }} src={foundryBenefits} alt="" />
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(71,167,153)", padding:isDevice ?"10px":"50px 200px", color:"white"}}>
        <p>
          En el portafolio de 3D Printing Perú contamos con las impresoras EXT
          1070 y EXT 1270, de la marca 3D Systems, de la tecnología FDM. Estas
          impresoras tienen como carácteristicas distintivas que tienen
          plataformas de construcción grandes y el material de construcción es en
          formato pellet. Debido a esto tienen un costo por pieza muy bajo. Así
          mismo, ambos modelos son configurables y se les puede agregar un segundo
          extrusor para filamento y un spindle para poder realizar corte CNC
          durante el proceso de impresión (fabricación híbrida).
        </p>
      </div>
    </div>
  );
}
