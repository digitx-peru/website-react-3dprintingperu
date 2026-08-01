import useBreakpoints from "../../../../../hooks/useBreakpoints";

import typography from "../../../../../Style/typography";
import globalStyle from "../../../../../Style/globalStyle";

export default function NavDropDown({ title, children }) {
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
      margin: "0 0 20px 0",
      gap: 0,
      ...(isTablet && {
        gap: "10px",
      }),
    },
    listTitle: {
      fontWeight: "400",
      fontSize: typography.fluid.h3,
      marginBottom: 0,
      color: "white",
      ...(isDesktop && {
      }),
    },
    optionList: {
      padding: 0,
      margin: "10px 0 0 0",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...(isDesktop && {
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
