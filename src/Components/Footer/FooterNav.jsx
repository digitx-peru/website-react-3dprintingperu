import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";

export default function FooterNav() {
  const isDevice = useMediaQuery(768);

  const styles = {
    footerNav: {
      display: "flex",
      flexDirection: "row",
      gap: isDevice ? "20px" : "60px",
      justifyContent: isDevice ? "space-between" : "initial",
      borderLeft: "3px solid yellow",
      paddingLeft: 30,
    },
    footerNavColumn: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
    },
    footerNavLink: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <div className="footerNav" style={styles.footerNav}>
      {/* Footer Navigation Links */}
      <div style={styles.footerNavColumn}>
        <h4 style={{ color: "yellow", margin: 0, fontSize: "20px" }}>
          Industrias
        </h4>
        <Link style={styles.footerNavLink} to="/industrias/fundicion">
          Fundición
        </Link>
        <Link style={styles.footerNavLink} to="/industrias/joyeria">
          Joyería
        </Link>
        <Link style={styles.footerNavLink} to="/industrias/prototipos-y-arte">
          Arte y Prototipos
        </Link>
      </div>
      <div style={styles.footerNavColumn}>
        <h4 style={{ color: "yellow", margin: 0, fontSize: "20px" }}>Salud</h4>
        <Link style={styles.footerNavLink} to="/salud/medicina">
          Dispositivos Médicos
        </Link>
      </div>
    </div>
  );
}
