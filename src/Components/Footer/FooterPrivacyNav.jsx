import { Link } from "react-router-dom";

export default function FooterPrivacyNav() {
  const styles = {
    footerSocial: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
    },
  };

  return (
    <div className="footerSocial" style={styles.footerSocial}>
      <Link style={styles.footerNavLink} to="/politica-privacidad">
        Privacy Policy
      </Link>
    </div>
  );
}
