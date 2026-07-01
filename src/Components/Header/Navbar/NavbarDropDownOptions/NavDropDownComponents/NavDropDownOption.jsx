import useMediaQuery from "../../../../../hooks/useMediaQuery";

export default function NavDropDown({ title, children }) {
  //Check windows size
  const isTablet = useMediaQuery(768);

  const styles = {
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
      marginBottom: isTablet ? "20px" : 0,
      gap: isTablet ? "10px" : 0,
    },
    listTitle: {
      fontWeight: isTablet ? "bold" : "400",
      fontSize: isTablet ? "20px" : "16px",
      marginBottom: isTablet ? 0 : "20px",
    },
    optionList: {
      padding: 0,
      margin: isTablet ? "0 20px" : 0,
      display: isTablet ? "flex" : "block",
      flexDirection: isTablet ? "column" : "row",
      gap: isTablet ? "10px" : 0,
    },
  };

  return (
    <div className="dropdownOption" style={styles.dropdownOption}>
      <h3 style={styles.listTitle}>{title}</h3>
      <ul style={styles.optionList}>{children}</ul>
    </div>
  );
}
