import useMediaQuery from "../../../../hooks/useMediaQuery";

import foundryQuickCast from "../../../../assets/industryImages/foundry/industry_foundry_quickcast.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentFoundryOverview({ width }) {
  const isDevice = useMediaQuery(824);
  const isMedium = useMediaQuery(1205);

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
        <div style={{width: isDevice ? "" : "50%",padding: isMedium ? "10px 10px 10px 10px":"80px 80px 80px 200px",boxSizing: "border-box",height:"400px", display:"flex", flexDirection:"column",justifyContent:"center"}}>
          <h3>Fundición</h3>
          <p>
            La aplicación de la impresión 3D o manufactura aditiva en la fundición
            tiene el potencial de revolucionar los procesos tradicionales de esta
            industria. Apalancándoselo en los beneficios de la impresión 3D, las
            fundiciones pueden mejorar su eficiencia, reducir costos, y alcanzar una
            mayor flexibilidad en el diseño.
          </p>
          <p>Los casos de uso conocidos de la impresión 3D en la fundición son:</p>
          <ul>
            <li>Patrones maestros para moldes de arena (Sand casting)</li>
            <li>
              Patrones de sacrificio para el proceso de cera perdida (Investment
              Casting)
            </li>
          </ul>
        </div>
        <div
          style={{            
            width:isDevice ?  "100%":"50%",
            padding:isDevice ?"0px":"10px",
          }}
          className="imgStyleWhite"
        >
          <img style={{ height: "400px", width:isDevice?"100%":"" }} src={foundryQuickCast} alt="" />
        </div>
      </div>      
    </div>
  );
}
