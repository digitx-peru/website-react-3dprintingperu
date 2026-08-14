import { Link } from "react-router-dom";

import { Collapse } from "antd";

import typography from "../../../Style/typography";
import globalStyle from "../../../Style/globalStyle";

import ApplicationsDropdown from "./NavbarDropDownOptions/ApplicationsDropdown";
import ProductsDropdown from "./NavbarDropDownOptions/ProductsDropdown";
import ServicesDropdown from "./NavbarDropDownOptions/ServicesDropdown";

////////////////////////// Main Component //////////////////////////

export default function NavbarCollapse({ onClickLink }) {
  const styles = {
    collapseContainer: {
      display: "flex",
      flexDirection: "column",
    },
    collapsePanel: {
      fontSize: typography.fluid.h3,
    },
  };

  const collapseStyles = {
    header: {
      background: "#1F1F1F",
      color: "rgb(62,255,180)",
      fontWeight: "400"
    },
    body: {
      background: "#3F3F3F",
      color: "rgb(62,255,180)",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        style={styles.collapseContainer}
        styles={collapseStyles}
      >
        <Collapse.Panel
          header={<span style={styles.collapsePanel}>Servicios</span>}
          key="1"
        >
          <ServicesDropdown />
        </Collapse.Panel>
        <Collapse.Panel
          header={<span style={styles.collapsePanel}>Productos</span>}
          key="2"
        >
          <ProductsDropdown />
        </Collapse.Panel>
        <Collapse.Panel
          header={<span style={styles.collapsePanel}>Aplicaciones</span>}
          key="3"
        >
          <ApplicationsDropdown />
        </Collapse.Panel>
      </Collapse>
    </nav>
  );
}
