import useMediaQuery from "../../../../../hooks/useMediaQuery";

export default function NavDropDownContainer({ linkpath, children }) {
  //Check windows size
  const isTablet = useMediaQuery(768);

  const styles = {
    dropdownOptionsContainer: {
      display: "flex",
      flexDirection: isTablet ? "column" : "row",
      marginTop: isTablet ? "0" : "40px",
      gap: isTablet ? "0" : "100px",
    },
  };

  return (
    <div
      className="dropdownOptionsContainer"
      style={styles.dropdownOptionsContainer}
    >
      {children}
    </div>
  );
}
