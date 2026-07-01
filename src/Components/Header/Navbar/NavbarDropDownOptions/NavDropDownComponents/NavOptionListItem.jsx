import useMediaQuery from "../../../../../hooks/useMediaQuery";

import { Link } from "react-router-dom";

export default function NavOptionListItem({ linkTitle, linkpath }) {
  //Check windows size
  const isTablet = useMediaQuery(768);

  const styles = {
    optionListItem: {
      listStyle: "none",
      fontSize: isTablet ? "18px" : "16px",
      fontWeight: "normal",
      marginBottom: isTablet ? 0 : "15px",
    },
    navlink: {
      textDecoration: "none",
      color: isTablet ? "#007FFF" : "#3EFFB4",
    },
  };

  return (
    <li style={styles.optionListItem}>
      <Link to={linkpath} style={styles.navlink}>
        {linkTitle}
      </Link>
    </li>
  );
}
