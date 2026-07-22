import useBreakpoints from "../../hooks/useBreakpoints";

import DDDSysLogo from "../../assets/pages/home/home_brands_banner_3dsys.png";
import IntamsysLogo from "../../assets/pages/home/home_brands_banner_intamsys.png";
import RhinoLogo from "../../assets/pages/home/home_brands_banner_rhino.png";
import RowComponent from "../Content/RowComponent";

export default function HomePageBrandsBanner() {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: " 20px",
      backgroundColor: "#D9D9D8",
      boxSizing: "border-box",
      gap: "20px",
      ...(isMd && {}),
      ...(isLg && {
        flexDirection: "row",
        height: "200px",
        justifyContent: "space-evenly",
      }),
    },
    image: {
      width: "100%",
      ...(isMd && {
        maxWidth: "60%",
      }),
      ...(isLg && {
        flex: "1 1 33.333%",
        maxWidth: "33.333%", // The rigid structural ceiling
      }),
    },
  };

  return (
    <RowComponent>
      <div className="brands" style={styles.container}>
        <img src={DDDSysLogo} alt="3D Systems Logo" style={styles.image} />
        <img src={IntamsysLogo} alt="Intamsys Logo" style={styles.image} />
        <img src={RhinoLogo} alt="RhinoArtisan Logo" style={styles.image} />
      </div>
    </RowComponent>
  );
}
