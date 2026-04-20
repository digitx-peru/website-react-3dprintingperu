export default function NavDropDownContainer({ linkpath, children }) {
  const styles = {
    dropdownOptionsContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "40px",
      gap: "100px",
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
