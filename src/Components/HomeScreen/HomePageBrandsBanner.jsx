import useBreakpoints from "../../hooks/useBreakpoints";

import DDDSysLogo from "../../assets/pages/home/home_brands_banner_3dsys.png";
import IntamsysLogo from "../../assets/pages/home/home_brands_banner_intamsys.png";
import RhinoLogo from "../../assets/pages/home/home_brands_banner_rhino.png";
import FFLogo from "../../assets/pages/home/home_brands_banner_flashforge.png";
import RowComponent from "../Content/RowComponent";

export default function HomePageBrandsBanner() {
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: " 20px",
      backgroundColor: "#D9D9D8",
      boxSizing: "border-box",
      gap: "20px",
      ...(isTablet && {}),
      ...(isDesktop && {
        flexDirection: "row",
        height: "200px",
        justifyContent: "center",
      }),
    },
    image: {
      width: "100%",
      ...(isTablet && {
        flex: "0 0 60%",
        maxWidth: "60%", // The rigid structural ceiling
      }),
      ...(isDesktop && {
        flex: "0 0 20%",
        maxWidth: "20%", // The rigid structural ceiling
        objectFit: "cover",
      }),
    },
  };

  return (
    <RowComponent>
      <div className="brands" style={styles.container}>
        <img src={DDDSysLogo} alt="3D Systems Logo" style={styles.image} />
        <img src={IntamsysLogo} alt="Intamsys Logo" style={styles.image} />
        <img src={RhinoLogo} alt="RhinoArtisan Logo" style={styles.image} />
        <img src={FFLogo} alt="FlashForge Logo" style={styles.image} />
      </div>
    </RowComponent>
  );
}
