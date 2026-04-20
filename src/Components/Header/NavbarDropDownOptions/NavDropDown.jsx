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
      display: "flex",
      flexDirection: 'column',
      gap: "15px",
      padding: 0,
      listStyle: "none",
      fontSize: "16px",
      textDecoration: "none",
      color: "#3EFFB4",
    },
  };

  return (
    <div className="dropdownOption" style={styles.dropdownOption}>
      <h3 style={styles.listTitle}>{title}</h3>
      <ul style={styles.optionList}>{children}</ul>
    </div>
  );
}
