import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";

import Navbar from "./Navbar/Navbar";
import NavMenu from "./Navbar/NavMenu";

import LogoIcon from "../../assets/components/logo/3dp_logo.png"

export default function HeaderLogoNavBar({
  activeNavBarCategory,
  setActiveNavBarCategory,
  setOverlayVisible,
}) {
  //Check windows size
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);

  const styles = {
    icon: {
      height: isMobile || isTablet ? 40 : 60,
      objectFit: "contain",
    },
    headerNavigationContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: isMobile || isTablet ? "space-between" : "space-between",
      borderBottom: "1px solid rgb(239,251,246)",
      columnGap: 50,
      zIndex: 3,
      padding: isMobile || isTablet ? "10px 30px" : "10px 100px",
    },
  };

  return (
    <div
      className="headerNavigationContainer"
      style={styles.headerNavigationContainer}
    >
      <Link to="/">
        <img src={LogoIcon} style={styles.icon} alt="company logo icon" />
      </Link>
      {isMobile || isTablet ? (
        <NavMenu />
      ) : (
        <Navbar
          style={{ alignSelf: "center" }}
          activeNavBarCategory={activeNavBarCategory}
          setOverlayVisible={setOverlayVisible}
          setActiveNavBarCategory={setActiveNavBarCategory}
        />
      )}
      {isMobile || isTablet ? null : <div style={{ width: "137.6px" }}></div>}
    </div>
  );
}
