import { useQuery } from "react-query";

import MaterialFilterPanelForm from "./MaterialFilterPanelForm";

import { getPrintersNamesListFromAPI, getTechnologiesNamesListFromAPI } from "../../../utils/dataHandler";

import { Checkbox, Collapse } from "antd";

import {
  defaultPrinterOptions,
  defaultTechOptions,
} from "./defaultMaterialFilterOptions";

export default function MaterialFilterPanel({
  printerFilterCheckBoxChangeHandler,
  technologyFilterCheckBoxChangeHandler,
  propertyFilterInputChangeHandler,
}) {

  //Data fetching //////////////////////////////////////////////////////////////////////////////////////////

  const printersNameListData = useQuery(["printersNamesListFetching"], getPrintersNamesListFromAPI);

  const techNameListData = useQuery(["techNamesListFetching"], getTechnologiesNamesListFromAPI);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      gap: 10,
    },
    checkboxGroup: {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <Collapse
      className="filterMaterialPanel"
      defaultActiveKey={["1"]}
      style={styles.container}
    >
      <Collapse.Panel header="Impresora" key="1">
        <Checkbox.Group
          options={
            printersNameListData.isLoading
              ? defaultPrinterOptions
              : printersNameListData.data.names
          }
          style={styles.checkboxGroup}
          onChange={printerFilterCheckBoxChangeHandler}
        />
      </Collapse.Panel>

      <Collapse.Panel header="Tecnologia" key="2">
        <Checkbox.Group
          options={
            techNameListData.isLoading
              ? defaultTechOptions
              : techNameListData.data.tec
          }
          style={styles.checkboxGroup}
          onChange={technologyFilterCheckBoxChangeHandler}
        />
      </Collapse.Panel>

      <Collapse.Panel header="Propiedades" key="3">
        <MaterialFilterPanelForm
          propertyFilterInputChangeHandler={propertyFilterInputChangeHandler}
        />
      </Collapse.Panel>
    </Collapse>
  );
}
