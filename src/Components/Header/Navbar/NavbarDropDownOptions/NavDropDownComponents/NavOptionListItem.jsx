import { Link } from "react-router-dom";

export default function NavOptionListItem({ linkpath, children }) {
  const styles = {
    optionListItem: {
      listStyle: "none",
      fontSize: "16px",
      marginBottom: "15px",
    },
    navlink: {
      textDecoration: "none",
      color: "#3EFFB4",
    },
  };

  return (
    <li style={styles.optionListItem}>
      <Link to={linkpath} style={styles.navlink}>
        {children}
      </Link>
    </li>
  );
}
