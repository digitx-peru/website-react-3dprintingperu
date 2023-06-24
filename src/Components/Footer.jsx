import { Link } from "react-router-dom";

import { FacebookFilled, LinkedinFilled } from "@ant-design/icons";

import useMediaQuery from "../hooks/useMediaQuery";

export default function Footer() {
  // const isMobile = useMediaQuery(480);
  const isDevice = useMediaQuery(768);

  const styles = {
    footer: {
      display: "flex",
      backgroundColor: "#000000",
      alignItems: "center",
      border: "1px solid black",
      padding: isDevice ? "50px 30px" : "50px 100px",
      marginTop: 25,
    },
    footerContent: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      alignItems: isDevice ? "center" : "innitial",
      gap: isDevice ? "75px" : 0,
      flexGrow: 1,
      justifyContent: "space-between",
    },
    footerNav: {
      display: "flex",
      flexDirection: "row",
      gap: isDevice ? "100px" : "60px",
      justifyContent: isDevice ? "space-between" : "innitial",
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
    footerSocial: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "white",
      width: 400,
      gap: 15,
    },
    footerSocialIcons: {
      display: "flex",
      flexDirection: "row",
      gap: 32,
    },
  };

  return (
    <footer style={styles.footer}>
      <div className="footerContent" style={styles.footerContent}>
        <div style={styles.footerNav}>
          {/* Footer Navigation Links */}
          <div style={styles.footerNavColumn}>
            <h4 style={{ color: "yellow", margin: 0, fontSize: "20px" }}>Industrias</h4>
            <Link style={styles.footerNavLink} to="/industrias/automotriz">
              Automotriz
            </Link>
            <Link style={styles.footerNavLink} to="/industrias/fundicion">
              Fundicion
            </Link>
            <Link style={styles.footerNavLink} to="/industrias/joyeria">
              Joyeria
            </Link>
            <Link style={styles.footerNavLink} to="/industrias/replicas">
              Replicas
            </Link>
          </div>
          <div style={styles.footerNavColumn}>
            <h4 style={{ color: "yellow", margin: 0, fontSize: "20px" }}>Salud</h4>
            <Link style={styles.footerNavLink} to="/salud/medicina">
              Dispositivos Médicos
            </Link>
            <Link style={styles.footerNavLink} to="/salud/odontologia">
              Bioprinting
            </Link>
          </div>
        </div>
        {/* Footer Social Media Links */}
        <div style={styles.footerSocial}>
          <p style={{ textAlign: "center" }}>
            Siguenos para estar al tanto de las novedades en impresoras y
            materiales.
          </p>
          <div style={styles.footerSocialIcons}>
            <a
              target="_blank"
              href="https://www.facebook.com/3DPrintingPeru"
              rel="noreferrer"
            >
              <FacebookFilled style={{ fontSize: 32 }} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/3dprintingperu/"
              rel="noreferrer"
            >
              <LinkedinFilled style={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
