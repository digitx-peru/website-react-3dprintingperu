export default function NavDropDown({ title, children }) {
  const styles = {
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
    },
    listTitle: {
      fontWeight: "400",
      fontSize: "16px",
      marginBottom: "20px",
    },
    optionList: {
      padding: 0,
      margin: 0,
      // marginTop: "20px",
    },
  };

  return (
    <div className="dropdownOption" style={styles.dropdownOption}>
      <h3 style={styles.listTitle}>{title}</h3>
      <ul style={styles.optionList}>{children}</ul>
    </div>
  );
}
