import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";



export default function Header() {

  //Check windows size
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);

  //Styles
  const styles = {
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: isMobile || isTablet ? "space-between" : "initial",
      borderBottom: "3px solid grey",
      columnGap: 50,

      padding: isMobile || isTablet ? "10px 30px" : "10px 50px"
    },
    icon: {
      height: isMobile || isTablet ? 40 : 60,
      objectFit: "contain",
    },
  };

  return (
    <header
      style={styles.header}
    >
      <Link to="/">
        <img
          src={require("../../assets/icons/3dp_logo.png")}
          style={styles.icon}
          alt=""
        />
      </Link>
      {isMobile || isTablet ? <NavMenu /> : <Navbar />}
    </header>
  );
}
