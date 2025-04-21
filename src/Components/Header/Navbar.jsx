import { Link } from "react-router-dom";
import { useState } from "react";

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

export default function Navbar({ setOverlayVisible, setActiveNavBarCategory }) {

  const [activeLink, setActiveLink] = useState(null);

  const handleOnClick = (buttonId) => {
    setActiveLink(buttonId);
    setOverlayVisible(true)
    setActiveNavBarCategory(buttonId);
  };


  return (
    <nav style={styles.navbar}>
      <ul style={styles.optionList}>
        <li style={{...styles.optionListItem, ...(activeLink === 'aplicaciones' ? styles.activeLink : {})}}>
          <a style={styles.link}
            onClick={() => handleOnClick("aplicaciones")}>
            Aplicaciones
          </a>
        </li >
        <li style={{...styles.optionListItem, ...(activeLink === 'producto' ? styles.activeLink : {})}}>
          <a style={styles.link}
            onClick={() => handleOnClick("producto")}>
            Productos
          </a>
        </li>
        <li style={{...styles.optionListItem, ...(activeLink === 'servicios' ? styles.activeLink : {})}}>
          <a style={styles.link}
            onClick={() => handleOnClick("servicios")}>
            Servicios
          </a>
        </li>
        <li style={{...styles.optionListItem, ...(activeLink === 'recursos' ? styles.activeLink : {})}}>
          <a style={styles.link}
            onClick={() => handleOnClick("recursos")}>
            Recursos
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    color: "rgb(62,255,180)",
    alignSelf: "stretch",
    alignItems: "stretch"
  },
  dropDownText: {
    fontSize: 18
  },
  optionList: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    columnGap: 50,
  },
  optionListItem: {
    listStyle: 'none',
    fontSize: "20px",
    display: "flex",
    alignItems: "end"
  },
  link: {
    textAlign: "center"
  },
  activeLink: {
    borderBottom: '3px solid rgb(62,255,180)',
  }
};
