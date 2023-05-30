import { Link } from "react-router-dom";

import { FacebookFilled, LinkedinFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerNav}>
          <div style={styles.footerNavColumn}>
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
            <Link style={styles.footerNavLink} to="/salud/medicina">
              Medicina
            </Link>
            <Link style={styles.footerNavLink} to="/salud/odontologia">
              Odontología
            </Link>
          </div>
        </div>
        <div style={styles.footerSocial}>
          <p>
            Siguenos para estar al tanto de las novedades en impresoras y
            materiales
          </p>
          <div style={styles.footerSocialIcons}>
            <a target="_blank" href="https://www.facebook.com/3DPrintingPeru" rel="noreferrer">
              <FacebookFilled style={{ fontSize: 32 }} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/3dprintingperu/" rel="noreferrer">
              <LinkedinFilled style={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    height: 240,
    backgroundColor: "#000000",
    alignItems: "center",
    border: "1px solid black",
    paddingRight: 100,
    paddingLeft: 100,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 20,
  },
  footerContent: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  footerNav: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
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
  },
  footerSocialIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 32,
  },
};
