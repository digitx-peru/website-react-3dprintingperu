import { Link } from "react-router-dom";

import { Collapse } from "antd";

////////////////////////// Main Component //////////////////////////

export default function NavbarCollapse({onClickLink}) {
  const styles = {
    collapsePanel: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingLeft: 20,
      fontSize: 20,
    },
  };

  return (
    <nav style={styles.navbar}>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        size="large"
        style={{ display: "flex", flexDirection: "column", gap: 5}}
      >
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Industrias</span>} key="1">
          <div style={styles.collapsePanel}>
            <Link to="/industrias/fundicion" onClick={onClickLink}>Fundicion</Link>
            <Link to="/industrias/joyeria" onClick={onClickLink}>Joyeria</Link>
            <Link to="/industrias/prototipos-y-arte" onClick={onClickLink}>Arte y prototipos</Link>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Salud</span>} key="2">
          <div style={styles.collapsePanel}>
            <Link to="/salud/medicina" onClick={onClickLink}>Dispositivos Médicos</Link>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Productos</span>} key="3">
          <div style={styles.collapsePanel}>
            <Link to="/productos/impresoras" onClick={onClickLink}>Impresoras</Link>
            <Link to="/productos/materiales" onClick={onClickLink}>Materiales</Link>
          </div>
        </Collapse.Panel>
      </Collapse>
    </nav>
  );
}
