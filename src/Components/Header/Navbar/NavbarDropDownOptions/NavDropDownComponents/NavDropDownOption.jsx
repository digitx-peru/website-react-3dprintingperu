import useBreakpoints from "../../../../../hooks/useBreakpoints";

import typography from "../../../../../Style/typography";
import globalStyle from "../../../../../Style/globalStyle";

export default function NavDropDown({ title, children }) {
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
      gap: 0,
      ...(isTablet && {
        marginBottom: 0,
        gap: "10px",
      }),
    },
    listTitle: {
      fontWeight: "400",
      fontSize: typography.fluid.h3,
      marginBottom: 0,
      color: "white",
      ...(isTablet && {
        fontWeight: "bold",
        marginBottom: "20px",
      }),
    },
    optionList: {
      padding: 0,
      margin: 0,
      display: "block",
      flexDirection: "row",
      gap: 0,
      ...(isTablet && {
        margin: "0 20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }),
    },
  };

  return (
    <div className="dropdownOption" style={styles.dropdownOption}>
      <h3 style={styles.listTitle}>{title}</h3>
      <ul style={styles.optionList}>{children}</ul>
    </div>
  );
}
