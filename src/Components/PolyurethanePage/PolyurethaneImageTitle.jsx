import useBreakpoints from "../../hooks/useBreakpoints";

import RowComponent from "../Content/RowComponent";

export default function PolyurethaneImageTitle() {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      backgroundColor: "#3EFFB4",
      padding: "20px",
      gap: "20px",
      ...(isMd && {
        padding: "30px",
      }),
    },
    image: {
      display: "flex",
      justifyContent: "center",
      fontSize: "30px",
      width: "100%",
    },
    title: {
      textAlign: "center",
      fontSize: "clamp(24px, 4vw, 32px)",
    },
  };

  return (
    <RowComponent>
      <div style={styles.layout}>
        <img
          style={styles.image}
          src="/images/services/production/silicone_urethane/silicone_urethane_cycle.png"
          alt=""
        />
        <h2 style={styles.title}>Amplio rango de aplicaciones industriales</h2>
      </div>
    </RowComponent>
  );
}
