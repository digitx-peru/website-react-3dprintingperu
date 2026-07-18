import { Link } from "react-router-dom";

import useBreakpoints from "../../hooks/useBreakpoints";

import Navbar from "./Navbar/Navbar";
import NavMenu from "./Navbar/NavMenu";

import LogoIcon from "../../assets/components/logo/3dp_logo.png";

export default function HeaderLogoNavBar({
  activeNavBarCategory,
  setActiveNavBarCategory,
  setOverlayVisible,
  navReference,
}) {
  //Check windows size
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    icon: {
      height: 40,
      objectFit: "contain",
      ...(isMd && {
        height: "60px",
      }),
      ...(isLg && {
        height: "60px",
      }),
    },
    headerNavigationContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottom: "1px solid rgb(239,251,246)",
      columnGap: 50,
      zIndex: 3,
      padding: "10px 30px",
      ...(isLg && {
        padding: "10px 100px",
      }),
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
      {isLg ? (
        <Navbar
          style={{ alignSelf: "center" }}
          activeNavBarCategory={activeNavBarCategory}
          setOverlayVisible={setOverlayVisible}
          setActiveNavBarCategory={setActiveNavBarCategory}
          navReference={navReference}
        />
      ) : (
        <NavMenu />
      )}
      {isLg ? <div style={{ width: "137.6px" }}></div> : null}
    </div>
  );
}
