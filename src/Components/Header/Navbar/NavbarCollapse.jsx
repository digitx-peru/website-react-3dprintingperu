import { Link } from "react-router-dom";

import { Collapse } from "antd";

////////////////////////// Main Component //////////////////////////

export default function NavbarCollapse({onClickLink}) {
  const styles = {
    collapsePanel: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 20,
      fontSize: 20,
    },
    collapsedDropdownOption: {
    },
    listTitle: {
      fontSize: "16px"
    },
    optionList: {
      listStyle: 'none',
    },
    navlink: {
      textDecoration: 'none',
      // color: "#3EFFB4",
      fontSize: "16px"
    }

  };

  return (
    <nav style={styles.navbar}>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        size="large"
        style={{ display: "flex", flexDirection: "column", gap: 5}}
      >
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Servicios</span>} key="3">
          <div style={styles.collapsePanel}>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Impresion 3D</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Fotopolímeros avanzados</Link></li>
              </ul>
            </div>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Producción de piezas de plástico</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Vaciado con silicona y uretano</Link></li>
              </ul>
            </div>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Otros</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Diseño 3D</Link></li>
              </ul>
            </div>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Mantenimiento</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Impresoras 3D</Link></li>
              </ul>
            </div>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Productos</span>} key="2">
          <div style={styles.collapsePanel}>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Impresion 3D</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="/productos/impresoras" style={styles.navlink}>Impresoras</Link></li>
                <li style={styles.optionListItem}><Link to="/productos/materiales" style={styles.navlink}>Materiales</Link></li>
              </ul>
            </div>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Software</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="" style={styles.navlink}>RhynoArtisan</Link></li>
              </ul>
            </div>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Aplicaciones</span>} key="1">
          <div style={styles.collapsePanel}>
            <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
              <h3 style={styles.listTitle}>Naval y Pesca</h3>
              <ul style={styles.optionList}>
                <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Mástiles</Link></li>
              </ul>
            </div>
          <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
            <h3 style={styles.listTitle}>Fundición</h3>
            <ul style={styles.optionList}>
              <li style={styles.optionListItem}><Link to="/industrias/fundicion" style={styles.navlink}>Moldes de arena</Link></li>
            </ul>
          </div>
          <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
            <h3 style={styles.listTitle}>Joyeria</h3>
            <ul style={styles.optionList}>
              <li style={styles.optionListItem}><Link to="/industrias/joyeria" style={styles.navlink}>Moldes de caucho o silicona</Link></li>
              <li style={styles.optionListItem}><Link to="/industrias/joyeria" style={styles.navlink}>Vaciado</Link></li>
            </ul>
          </div>
          <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
            <h3 style={styles.listTitle}>Investigación</h3>
            <ul style={styles.optionList}>
              <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Desarrollo de polvos metálicos</Link></li>
            </ul>
          </div>
          <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
            <h3 style={styles.listTitle}>Salud</h3>
            <ul style={styles.optionList}>
              <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Ortesis</Link></li>
              <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Prótesis</Link></li>
              <li style={styles.optionListItem}><Link to="/salud/medicina" style={styles.navlink}>Ortopedia</Link></li>
            </ul>
          </div>
          <div className="collapsedDropdownOption" style={styles.collapsedDropdownOption}>
            <h3 style={styles.listTitle}>Consumidor final</h3>
            <ul style={styles.optionList}>
              <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Muebles</Link></li>
              <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Prototipos</Link></li>
            </ul>
          </div>
          </div>
        </Collapse.Panel>
      </Collapse>
    </nav>
  );
}
