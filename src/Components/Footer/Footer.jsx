import useMediaQuery from "../../hooks/useMediaQuery";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  const isDevice = useMediaQuery(768);

  const styles = {
    footer: {
      display: "flex",
      backgroundColor: "rgb(10,79,79)",
      borderTop:"7px solid rgb(99,218,178)",
      alignItems: "center",
      padding: isDevice ? "50px 15px" : "50px 100px",
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
    </footer>
  );
}
