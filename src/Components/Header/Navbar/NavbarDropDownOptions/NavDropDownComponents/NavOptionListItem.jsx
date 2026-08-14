import { Link } from "react-router-dom";

import useBreakpoints from "../../../../../hooks/useBreakpoints";

import typography from "../../../../../Style/typography";
import globalStyle from "../../../../../Style/globalStyle";

export default function NavOptionListItem({ linkTitle, linkpath }) {
  //Check windows size
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    optionListItem: {
      listStyle: "none",
      fontSize: typography.fluid.body,
      fontWeight: "normal",
      margin: "0 0 0 15px",
      ...(isDesktop && {
        margin: 0
      }),
    },
    navlink: {
      textDecoration: "none",
      color: "#3EFFB4",
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
