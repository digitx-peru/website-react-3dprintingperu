import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import NavbarCollapse from "../NavbarCollapse";

export default function ResourcesDropdown() {

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
    },
    optionListItem: {
      listStyle: 'none',
      marginTop: "5px",
      fontSize: "16px",
      fontStyle: "italic",
      color: "#787C7B"
    },
    navlink: {
      textDecoration: 'none',
      color: "#3EFFB4"
    }

  };

  return (
    <div className="dropdownOptionsContainer" style={styles.dropdownOptionsContainer}>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.optionListItem}><Link to="" style={styles.navlink}>Blog</Link></h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}>Casos de éxito y novedades de la industria</li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.optionListItem}><Link to="" style={styles.navlink}>FAQs</Link></h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}>Preguntas y respuestas de nuestros servicios y productos</li>
        </ul>
      </div>
      <div className="dropdownOption" style={styles.dropdownOption}>
        <h3 style={styles.optionListItem}><Link to="" style={styles.navlink}>Eventos</Link></h3>
        <ul style={styles.optionList}>
          <li style={styles.optionListItem}>Enterate y registrate a nuestros próximos eventos</li>
        </ul>
      </div>
    </div>
  );
}