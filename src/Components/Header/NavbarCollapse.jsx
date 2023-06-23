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
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Impresoras</span>} key="1">
          <div style={styles.collapsePanel}>
            <Link to="/industrias/automotriz" onClick={onClickLink}>Automotriz</Link>
            <Link to="/industrias/fundicion" onClick={onClickLink}>Fundicion</Link>
            <Link to="/industrias/joyeria" onClick={onClickLink}>Joyeria</Link>
            <Link to="/industrias/replicas" onClick={onClickLink}>Replicas</Link>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Salud</span>} key="2">
          <div style={styles.collapsePanel}>
            <Link to="/salud/medicina" onClick={onClickLink}>Medicina</Link>
            <Link to="/salud/odontologia" onClick={onClickLink}>Odontologia</Link>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Productos</span>} key="3">
          <div style={styles.collapsePanel}>
            <Link to="/productos/auxiliares" onClick={onClickLink}>Auxiliares</Link>
            <Link to="/productos/impresoras" onClick={onClickLink}>Impresoras</Link>
            <Link to="/productos/materiales" onClick={onClickLink}>Materiales</Link>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={<span style={{ fontSize: '20px' }}>Servicios</span>} collapsible="disabled" key="4"></Collapse.Panel>
      </Collapse>
    </nav>
  );
}
