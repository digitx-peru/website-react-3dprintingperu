import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar/Navbar";
import NavMenu from "./Navbar/NavMenu";
import Hero from "../Hero/Hero";

import HeaderLogoNavBar from "./HeaderLogoNavBar";
import HeroOverlay from "./HeroOverlay";

import HeaderHeroOverlay from "../Overlays/HeaderHeroOverlay";

export default function Header({ backgroundImage }) {
  //Check windows size
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);

  // State to track overlay visibility
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [activeNavBarCategory, setActiveNavBarCategory] = useState(null);
  const overlayRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickableOverlay(event) {
      if (
        isOverlayVisible &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)  // ignore nav clicks
      ) {
        setOverlayVisible(false);
        setActiveNavBarCategory(null);
      }
    }

    document.addEventListener("mousedown", handleClickableOverlay);
    return () =>
      document.removeEventListener("mousedown", handleClickableOverlay);
  }, [isOverlayVisible]);

  //Styles
  const styles = {
    mainContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      backgroundColor: backgroundImage ? "none" : "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
  };

  return (
    <header style={styles.mainContainer}>
      <HeaderHeroOverlay />

      {/* Logo + NavBar */}
      <HeaderLogoNavBar
        activeNavBarCategory={activeNavBarCategory}
        setActiveNavBarCategory={setActiveNavBarCategory}
        setOverlayVisible={setOverlayVisible}
        navReference={navRef}
      />

      {/* Clickable Overlay */}
      <HeroOverlay
        isOverlayVisible={isOverlayVisible}
        activeNavBarCategory={activeNavBarCategory}
        overlayRef={overlayRef}
      />
    </header>
  );
}
