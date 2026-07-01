import { Link } from "react-router-dom";

import { Collapse } from "antd";

import ApplicationsDropdown from "./NavbarDropDownOptions/ApplicationsDropdown";
import ProductsDropdown from "./NavbarDropDownOptions/ProductsDropdown";
import ServicesDropdown from "./NavbarDropDownOptions/ServicesDropdown";

////////////////////////// Main Component //////////////////////////

export default function NavbarCollapse({ onClickLink }) {
  const styles = {
    collapsePanel: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 20,
      fontSize: 20,
    },
    collapsedDropdownOption: {},
    listTitle: {
      fontSize: "16px",
    },
    optionList: {
      listStyle: "none",
    },
    navlink: {
      textDecoration: "none",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        size="large"
        style={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <Collapse.Panel
          header={<span style={{ fontSize: "20px" }}>Servicios</span>}
          key="3"
        >
          <ServicesDropdown />
        </Collapse.Panel>
        <Collapse.Panel
          header={<span style={{ fontSize: "20px" }}>Productos</span>}
          key="2"
        >
          <ProductsDropdown />
        </Collapse.Panel>
        <Collapse.Panel
          header={<span style={{ fontSize: "20px" }}>Aplicaciones</span>}
          key="1"
        >
          <ApplicationsDropdown />
        </Collapse.Panel>
      </Collapse>
    </nav>
  );
}
