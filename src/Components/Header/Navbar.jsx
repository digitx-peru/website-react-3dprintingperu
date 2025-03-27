import { Link } from "react-router-dom";

import { Dropdown, Space } from "antd";

////////////////////////// Dropdown list Items //////////////////////////

const itemsIndustrias = [
  {
    key: "1",
    label: <Link to="/industrias/fundicion">Fundicion</Link>,
  },
  {
    key: "2",
    label: <Link to="/industrias/joyeria">Joyeria</Link>,
  },
  {
    key: "4",
    label: <Link to="/industrias/prototipos-y-arte">Arte y prototipos</Link>,
  },
];

const itemsSalud = [
  {
    key: "1",
    label: <Link to="/salud/medicina">Dispositivos Médicos</Link>,
  },
];

const itemsProductos = [
  {
    key: "1",
    label: <Link to="/productos/impresoras">Impresoras</Link>,
  },
  {
    key: "2",
    label: <Link to="/productos/materiales">Materiales</Link>,
  },
];

////////////////////////// Main Component //////////////////////////

export default function Navbar({ setOverlayVisible }) {
  return (
    <nav style={styles.navbar}>
      <a onClick={() => setOverlayVisible(true)}>
        Aplicaciones
      </a>
      <a onClick={() => setOverlayVisible(true)}>
        Productos
      </a>
      <a onClick={() => setOverlayVisible(true)}>
        Servicios
      </a>
      <a onClick={() => setOverlayVisible(true)}>
        Recursos
      </a>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    columnGap: 50,
    color: "rgb(62,255,180)",
  },
  dropDownText: {
    fontSize: 18
  }
};
