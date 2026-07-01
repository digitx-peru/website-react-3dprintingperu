import DDDSysLogo from "../../assets/pages/home/home_brands_banner_3dsys.png";
import IntamsysLogo from "../../assets/pages/home/home_brands_banner_intamsys.png";
import RhinoLogo from "../../assets/pages/home/home_brands_banner_rhino.png";

export default function HomePageBrandsBanner() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "200px",
      backgroundColor: "#D9D9D8",
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
