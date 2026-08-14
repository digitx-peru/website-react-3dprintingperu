import { Link } from "react-router-dom";

export default function FootNavListItem({ linkTitle, linkpath, children }) {
  const styles = {
    optionListItem: {
      listStyle: "none",
      fontSize: "16px",
      marginBottom: "15px",
    },
    footerNavLink: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <li style={styles.optionListItem}>
      <Link to={linkpath} style={styles.footerNavLink}>
        {linkTitle}
      </Link>
    </li>
  );
}
