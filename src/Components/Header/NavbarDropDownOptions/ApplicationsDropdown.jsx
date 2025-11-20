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
      // maxWidth: "200px"
    },
    listTitle: {
      fontWeight: "400",
      fontSize: "16px"
    },
    optionList: {
      padding: 0,
      marginTop: "20px",
    },
    optionListItem: {
      listStyle: 'none',
      fontSize: "16px",
      marginTop: "5px"
    },
    navlink: {
      textDecoration: 'none',
      color: "#3EFFB4"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Naval y Pesca</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Mástiles</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Fundición</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="/industrias/fundicion" style={styles.navlink}>Moldes de arena</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Joyeria</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="/industrias/joyeria" style={styles.navlink}>Moldes de caucho o silicona</Link></li>
          <li style={styles.optionListItem}><Link to="/industrias/joyeria" style={styles.navlink}>Vaciado</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Investigación</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Desarrollo de polvos metálicos</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Salud</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Ortesis</Link></li>
          <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Prótesis</Link></li>
          <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Ortopedia</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Consumidor final</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Muebles</Link></li>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Prototipos</Link></li>
        </ul>
      </div>
    </div>
  );
}
