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
    label: <Link to="/industrias/arte y proto">Arte y prototipos</Link>,
  },
];

const itemsSalud = [
  {
    key: "1",
    label: <Link to="/salud/medicina">Dispositivos Médicos</Link>,
  },
  {
    key: "2",
    label: <Link to="/salud/odontologia">Bioprinting</Link>,
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

// const itemsServicios = [
//   {
//     key: "1",
//     label: <Link to="/aplicaciones/automotriz">Automotriz</Link>,
//     disabled: true,
//   },
//   {
//     key: "2",
//     label: <Link to="/aplicaciones/fundicion">Fundicion</Link>,
//     disabled: true,
//   },
//   {
//     key: "3",
//     label: <Link to="/aplicaciones/joyeria">Joyeria</Link>,
//     disabled: true,
//   },
//   {
//     key: "4",
//     label: <Link to="/aplicaciones/replicas">Replicas</Link>,
//     disabled: true,
//   },
// ];

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
          <Space style={styles.dropDownText}>Industrias</Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: itemsSalud,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space style={styles.dropDownText}>Salud</Space>
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
  },
  dropDownText: {
    fontSize: 18
  }
};
