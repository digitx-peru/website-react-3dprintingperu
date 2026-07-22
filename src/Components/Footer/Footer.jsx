import useBreakpoints from "../../hooks/useBreakpoints.js";

import FooterNav from "./FooterNav/FooterNav.jsx";
import FooterPrivacyNav from "./FooterPrivacyNav.jsx";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  const { isMd, isLg, isXl } = useBreakpoints();

  const styles = {
    footer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgb(10,79,79)",
      borderTop: "7px solid rgb(99,218,178)",
    },
    footerContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "75px",
      flexGrow: 1,
      padding: "50px 15px",
      justifyContent: "space-between",
      ...(isLg && {
        flexDirection: "row",
        alignItems: "innitial",
        // gap: 0,
        padding: "50px 50px",
      }),
      ...(isXl && {
        flexDirection: "row",
        alignItems: "innitial",
        // gap: 0,
        padding: "50px 150px",
      }),
    },
    footerPrivacyContent: {
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px 10px",
      ...(isLg && {
        flexDirection: "row",
        gap: 0,
      }),
    },
    footerGeneral: {
      display: "block",
      alignItems: "center",
      gap: "75px",
      justifyContent: "space-between",
      ...(isLg && {
        alignItems: "innitial",
        gap: 0,
      }),
    },
  };

  return (
    <footer style={styles.footer}>
      <div className="footerContent" style={styles.footerContent}>
        {/* Footer Navigation Links */}
        {isLg && <FooterNav />}
        {/* Footer Social Media Links */}
        <FooterSocial />
      </div>
      <div className="footerPolicyContent" style={styles.footerPrivacyContent}>
        <FooterPrivacyNav />
        <p style={{ color: "white", textAlign: "center", flex: 1 }}>
          © 2026 3D Printing Perú. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
