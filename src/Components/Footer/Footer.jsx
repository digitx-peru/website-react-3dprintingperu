import useMediaQuery from "../../hooks/useMediaQuery";
import FooterNav from "./FooterNav";
import FooterPrivacyNav from "./FooterPrivacyNav.jsx";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  const isDevice = useMediaQuery(768);

  const styles = {
    footer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgb(10,79,79)",
      borderTop:"7px solid rgb(99,218,178)",
      marginTop: 25,
      boxSizing:"border-box",
      width:"100%"
    },
    footerContent: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      alignItems: isDevice ? "center" : "innitial",
      gap: isDevice ? "75px" : 0,
      flexGrow: 1,
      padding: isDevice ? "50px 15px" : "50px 100px",
      justifyContent: "space-between",
    },
    footerPrivacyContent: {
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      gap: isDevice ? "20px" : 0,
      padding: "20px 10px",
    },
    footerGeneral: {
      display: "block",
      alignItems: isDevice ? "center" : "innitial",
      gap: isDevice ? "75px" : 0,
      justifyContent: "space-between",
    },
  };

  return (
    <footer style={styles.footer}>
      <div className="footerContent" style={styles.footerContent}>
        {/* Footer Navigation Links */}
        {!isDevice && <FooterNav />}
        {/* Footer Social Media Links */}
        <FooterSocial />
      </div>
      <div className="footerPolicyContent" style={styles.footerPrivacyContent}>
        <FooterPrivacyNav />
        <p style={{ color: "white", textAlign: "center", flex: 1 }}>
          © 2025 3D Printing Perú. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
