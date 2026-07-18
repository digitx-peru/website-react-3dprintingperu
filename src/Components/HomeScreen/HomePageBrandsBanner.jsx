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
      }),
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
    },
  };

  return (
    <article className="brands" style={styles.container}>
      <img src={DDDSysLogo} alt="3D Systems Logo" style={styles.image} />
      <img src={IntamsysLogo} alt="Intamsys Logo" style={styles.image} />
      <img src={RhinoLogo} alt="RhinoArtisan Logo" style={styles.image} />
    </article>
  );
}
