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
      fontSize: "24px"
    },
    optionList: {
      padding: 0,
      marginTop: "20px",
    },
    optionListItem: {
      listStyle: 'none',
      marginTop: "5px"
    },
    navlink: {
      textDecoration: 'none',
      color: "#70CE9C"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Impresion 3D</h3>
        <ul style={{...styles.optionList, marginTop: "50px"}}>
          <li style={styles.optionListItem}><a href="" style={styles.navlink}>Fotopolímeros avanzados</a></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Producción de piezas de plástico</h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}><a href="" style={styles.navlink}>Inyección con moldes eggshell</a></li>
          <li style={styles.optionListItem}><a href="" style={styles.navlink}>Vaciado con silicona y uretano</a></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Otros</h3>
        <ul style={{...styles.optionList, marginTop: "50px"}}>
          <li style={styles.optionListItem}><a href="" style={styles.navlink}>Diseño 3D</a></li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.listTitle}>Mantenimiento</h3>
        <ul style={{...styles.optionList, marginTop: "50px"}}>
        <li style={styles.optionListItem}><a href="" style={styles.navlink}>Impresoras 3D</a></li>
        </ul>
      </div>
    </div>
  );
}