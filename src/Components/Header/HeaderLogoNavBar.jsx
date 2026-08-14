import { Link } from "react-router-dom";

import useBreakpoints from "../../hooks/useBreakpoints";
import globalStyle from "../../Style/globalStyle";

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
  const { isTablet, isDesktop, isLargeTablet } = useBreakpoints();

  const styles = {
    icon: {
      height: 40,
      objectFit: "contain",
      ...(isTablet && {
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
      padding: `10px ${globalStyle.lateralPadding.mobile}`,
      ...(isTablet && {
        padding: `15px ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isDesktop && {
        padding: `15px ${globalStyle.lateralPadding.desktop}`,
      }),
      ...(isLargeTablet && {
        padding: `15px ${globalStyle.lateralPadding.desktop}`,
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
      {isDesktop ? (
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
      {isDesktop ? <div style={{ width: "137.6px" }}></div> : null}
    </div>
  );
}
