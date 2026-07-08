import useBreakpoints from "../../hooks/useBreakpoints";

import DDDSysLogo from "../../assets/pages/home/home_brands_banner_3dsys.png";
import IntamsysLogo from "../../assets/pages/home/home_brands_banner_intamsys.png";
import RhinoLogo from "../../assets/pages/home/home_brands_banner_rhino.png";

export default function HomePageBrandsBanner() {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: " 20px",
      backgroundColor: "#D9D9D8",
      gap: "20px",
      ...(isMd && {
        flexDirection: "row",
        height: "200px",
        justifyContent: "space-evenly",
      }),
    },
  };

  return (
    <article className="brands" style={styles.container}>
      <img src={DDDSysLogo} alt="3D Systems Logo" />
      <img src={IntamsysLogo} alt="Intamsys Logo" />
      <img src={RhinoLogo} alt="RhinoArtisan Logo" />
    </article>
  );
}
