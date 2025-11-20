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

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Dropdown
        arrow={false}
        menu={{
          items: itemsIndustrias,
        }}
      >
        <a>
          <Space style={styles.dropDownText}>Aplicaciones</Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: itemsProductos,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space style={styles.dropDownText}>Productos</Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: itemsProductos,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space style={styles.dropDownText}>Servicios</Space>
        </a>
      </Dropdown>

      {/* <Dropdown
        menu={{
          items: itemsServicios,
        }}
        disabled
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space style={styles.dropDownText}>Servicios</Space>
        </a>
      </Dropdown> */}
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
