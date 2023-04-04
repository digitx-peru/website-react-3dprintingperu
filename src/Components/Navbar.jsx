import { Link } from "react-router-dom";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const itemsIndustrias = [
  {
    key: "1",
    label: <Link to="/industrias/automotriz">Automotriz</Link>,
  },
  {
    key: "2",
    label: <Link to="/industrias/fundicion">Fundicion</Link>,
    disabled: true,
  },
  {
    key: "3",
    label: <Link to="/industrias/joyeria">Joyeria</Link>,
    disabled: true,
  },
  {
    key: "4",
    label: <Link to="/industrias/replicas">Replicas</Link>,
    disabled: true,
  },
];

const itemsSalud = [
  {
    key: "1",
    label: <Link to="/salud/medicina">Medicina</Link>,
    disabled: true,
  },
  {
    key: "2",
    label: <Link to="/salud/odontologia">Odontologia</Link>,
    disabled: true,
  },
];

const itemsProductos = [
  {
    key: "1",
    label: <Link to="/productos/auxiliares">Auxiliares</Link>,
    disabled: true,
  },
  {
    key: "2",
    label: <Link to="/productos/impresoras">Impresoras</Link>,
    disabled: true,
  },
  {
    key: "3",
    label: <Link to="/productos/materiales">Materiales</Link>,
    disabled: true,
  },
];

const itemsServicios = [
  {
    key: "1",
    label: <Link to="/aplicaciones/automotriz">Automotriz</Link>,
    disabled: true,
  },
  {
    key: "2",
    label: <Link to="/aplicaciones/fundicion">Fundicion</Link>,
    disabled: true,
  },
  {
    key: "3",
    label: <Link to="/aplicaciones/joyeria">Joyeria</Link>,
    disabled: true,
  },
  {
    key: "4",
    label: <Link to="/aplicaciones/replicas">Replicas</Link>,
    disabled: true,
  },
];

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Dropdown
        menu={{
          items: itemsIndustrias,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Industrias
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: itemsSalud,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Salud
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: itemsProductos,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Productos
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: itemsServicios,
        }}
        disabled
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Servicios
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
  },
};
