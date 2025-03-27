import { useState } from "react";
import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";
import Hero from "../Hero";

export default function Header({ heroTitle, heroMessage, heroImage }) {

  //Check windows size
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);

  // State to track overlay visibility
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  //Styles
  const styles = {
    header: {
      position: 'relative',
      display: "flex",
      flexDirection: "column",
      backgroundImage: heroImage ? `url(${heroImage})` : "none",
      backgroundColor: heroImage ? "none" : "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    headerNavigationContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: isMobile || isTablet ? "space-between" : "space-between",
      borderBottom: "1px solid rgb(239,251,246)",
      columnGap: 50,
      background: 'none',
      zIndex: 3,
      padding: isMobile || isTablet ? "10px 30px" : "10px 100px"
    },
    icon: {
      height: isMobile || isTablet ? 40 : 60,
      objectFit: "contain",
    },
    backgroundImageOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: "0.7",
      display: "flex",
      alignItems: "center",
    },
    dropdownOverlay: {
      position: "absolute",
      top: "85px", // Adjust based on navbar height
      left: 0,
      width: "100%",
      height: "calc(100% - 85px)", // Covers the Hero component
      backgroundColor: "rgba(0, 0, 0, 0.98)", // Dark overlay
      display: isOverlayVisible ? "flex" : "none",
      justifyContent: "center",
      alignItems: "start",
      color: "white",
      fontSize: "24px",
      zIndex: 2, // Above the background but below navbar
    },
  };

  return (
    <header
      style={styles.header}
    >
      {/* BackgroundImage Overlay */}
      <div className="backgroundOverlay" style={styles.backgroundImageOverlay}></div>

      {/* Logo + NavBar */}
      <div className="headerNavigationContainer" style={styles.headerNavigationContainer}>
        <Link to="/">
          <img
            src={require("../../assets/icons/3dp_logo.png")}
            style={styles.icon}
            alt=""
          />
        </Link>
        {isMobile || isTablet ? <NavMenu /> : <Navbar setOverlayVisible={setOverlayVisible} />}
      </div>

      {/* Clickable Overlay */}
      <div style={styles.dropdownOverlay} onClick={() => setOverlayVisible(false)}>
        <div className="dropdownSelector" style={{display: "flex", flexDirection: "row", marginTop: "40px"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>Industria</p>
            <ul>
              <li style={{listStyle:'none'}}><a href="">Fundicion</a></li>
              <li style={{listStyle:'none'}}><a href="">Joyeria</a></li>
              <li style={{listStyle:'none'}}><a href="">Arte y prototipos</a></li>
            </ul>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>Salud</p>
            <ul>
              <li style={{listStyle:'none'}}>Dispositivos Medicos</li>
            </ul>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>Industrias</p>
            <ul>
              <li style={{listStyle:'none'}}>Fundición</li>
              <li style={{listStyle:'none'}}>Joyería</li>
              <li style={{listStyle:'none'}}>Arte y Prototipos</li>
            </ul>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>Industrias</p>
            <ul>
              <li style={{listStyle:'none'}}>Fundición</li>
              <li style={{listStyle:'none'}}>Joyería</li>
              <li style={{listStyle:'none'}}>Arte y Prototipos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Component */}
      <Hero title={heroTitle} message={heroMessage} />
    </header>
  );
}
