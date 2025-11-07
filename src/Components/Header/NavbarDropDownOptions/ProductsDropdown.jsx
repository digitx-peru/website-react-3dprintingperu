import { Link } from "react-router-dom";

export default function ProductsDropdown() {

  const styles = {
    dropdownOptionsContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "40px",
      gap: '50px'
    },
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "200px"
    },
    listTitle: {
      fontWeight: "400",
      fontSize: "16px"
    },
    optionList: {
      padding: 0,
      marginTop: "20px",
      fontSize: "16px"
    },
    optionListItem: {
      listStyle: 'none',
      marginTop: "5px",
      fontSize: "16px"
    },
    navlink: {
      textDecoration: 'none',
      color: "#3EFFB4"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Impresion 3D</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="/productos/impresoras" style={styles.navlink}>Impresoras</Link></li>
          <li style={styles.optionListItem}><Link to="/productos/materiales" style={styles.navlink}>Materiales</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Software</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>RhynoArtisan</Link></li>
        </ul>
      </div>
    </div>
  );
}
