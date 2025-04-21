import { Link } from "react-router-dom";

export default function ProductsDropdown() {

  const styles = {
    dropdownOptionsContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "40px",
      gap: '100px'
    },
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "200px"
    },
    listTitle: {
      fontWeight: "400",
      fontSize: "24px"
    },
    optionList: {
      padding: 0,
      marginTop: "20px",
    },
    optionListItem: {
      listStyle: 'none',
      marginTop: "5px",
      fontStyle: "italic",
      color: "#787C7B"
    },
    navlink: {
      textDecoration: 'none',
      color: "#70CE9C"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}><Link to="/productos/impresoras" style={styles.navlink}>Impresoras</Link></h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}>Nuestra línea de impresoras profesionales</li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}><Link to="/productos/materiales" style={styles.navlink}>Materiales</Link></h3>
          <ul style={styles.optionList}>
            <li style={styles.optionListItem}>Los diversos materiales con propiedades únicas</li>
          </ul>
      </div>
    </div>
  );
}
