import { Link } from "react-router-dom";

export default function ApplicationsDropdown() {

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
      fontSize: "20px",
      marginTop: "5px"
    },
    navlink: {
      textDecoration: 'none',
      color: "#70CE9C"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Industria</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="/industrias/fundicion" style={styles.navlink}>Fundición</Link></li>
          <li style={styles.optionListItem}><Link to="/industrias/joyeria" style={styles.navlink}>Joyería</Link></li>
          <li style={styles.optionListItem}><Link to="/industrias/prototipos-y-arte" style={styles.navlink}>Arte y prototipos</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Salud</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Dispositivos Médicos</Link></li>
        </ul>
      </div>
    </div>
  );
}
