import useBreakpoints from "../../hooks/useBreakpoints.js";

import FooterNav from "./FooterNav/FooterNav.jsx";
import FooterPrivacyNav from "./FooterPrivacyNav.jsx";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  const { isTablet, isDesktop, isLargeTablet, isWideScreen } = useBreakpoints();

  const styles = {
    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgb(10,79,79)",
      borderTop: "7px solid rgb(99,218,178)",
    },
    footerContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "75px",
      flex: "1 0 0",
      padding: "50px 15px",
      justifyContent: "space-between",
      ...(isDesktop && {
        flexDirection: "row",
        padding: "50px 50px",
      }),
      ...(isWideScreen && {
        flexDirection: "row",
        padding: "50px 0",
        width: "1440px",
      }),
    },
    footerPrivacyContentContainer: {
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      justifyContent: "center",
      alignSelf: "stretch",
    },
    footerPrivacyContent: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px 10px",
      boxSizing: "border-box",
      ...(isDesktop && {
        flexDirection: "row",
        gap: 0,
      }),
      ...(isWideScreen && {
        width: "1440px",
        padding: "20px 0",
      }),
    },
  };

  return (
    <footer style={styles.footer}>
      <div className="footerContent" style={styles.footerContent}>
        {/* Footer Navigation Links */}
        {isDesktop && <FooterNav />}
        {/* Footer Social Media Links */}
        <FooterSocial />
      </div>
      <div
        className="footerPolicyContentContainer"
        style={styles.footerPrivacyContentContainer}
      >
        <div style={styles.footerPrivacyContent}>
          <FooterPrivacyNav />
          <p style={{ color: "white", textAlign: "center", flex: 1 }}>
            © 2026 3D Printing Perú. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
