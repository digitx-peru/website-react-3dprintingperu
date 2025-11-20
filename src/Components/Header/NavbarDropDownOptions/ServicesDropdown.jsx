import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import NavbarCollapse from "../NavbarCollapse";

export default function ServicesDropdown() {

  const styles = {
    dropdownOptionsContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "40px",
      gap: '50px'
    },
    dropdownOption: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "200px"
    },
    listTitle: {
      fontWeight: "400",
      fontSize: "16px"
    },
    optionList: {
      padding: 0,
      marginTop: "20px",
      fontSize: "16px"
    },
    optionListItem: {
      listStyle: 'none',
      marginTop: "5px",
      fontSize: "16px"
    },
    navlink: {
      textDecoration: 'none',
      color: "#3EFFB4"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Impresion 3D</h3>
        <ul style={{ ...styles.optionList, marginTop: "50px" }}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Fotopolímeros avanzados</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Producción de piezas de plástico</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Vaciado con silicona y uretano</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Otros</h3>
        <ul style={{ ...styles.optionList, marginTop: "50px" }}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Diseño 3D</Link></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Mantenimiento</h3>
        <ul style={{ ...styles.optionList, marginTop: "50px" }}>
          <li style={styles.optionListItem}><Link to="" style={styles.navlink}>Impresoras 3D</Link></li>
        </ul>
      </div>
    </div>
  );
}