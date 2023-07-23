import { useState } from "react";

import { useQuery } from "react-query";

import MaterialFilterPanelForm from "./MaterialFilterPanelForm";

import { getPrintersFromDB } from "../../../utils/dataHandler";

import { Checkbox, Collapse } from "antd";

import {
  defaultPrinterOptions,
  defaultTechOptions,
} from "./defaultMaterialFilterOptions";

export default function MaterialFilterPanel({
  printerCheckBoxChange,
  technologyCheckBoxChange,
  propertyFilterTextChanged,
}) {
  const [printersSelection, setPrintersSelection] = useState({});
  const [technologiesSelection, setTechnologiesSelection] = useState({});
  const [propertiesInput, setPropertiesInput] = useState({});

  //Printer Data fetching
  const printerListData = useQuery(["printerFetching"], getPrintersFromDB, {
    //Unique Names Filtering
    select: (printerData) => {
      const printerNameArray = printerData.printers.map(
        (printer) => printer.name
      );
      const uniquePrinterNameArray = [...new Set(printerNameArray)];

      //Transforming unique names list into an object list
      const uniquePrinterArrayFormatted = uniquePrinterNameArray.map(
        (printerName) => {
          const printerOption = {
            label: printerName,
            value: printerName,
          };

          return printerOption;
        }
      );

      //Retuns array of objects with structure {label, value}
      return uniquePrinterArrayFormatted;
    },
  });

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
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
            printerListData.isLoading
              ? defaultPrinterOptions
              : printerListData.data
          }
          style={styles.checkboxGroup}
          onChange={printerCheckBoxChange}
        />
      </Collapse.Panel>

      <Collapse.Panel header="Tecnologia" key="2">
        <Checkbox.Group
          options={defaultTechOptions}
          style={styles.checkboxGroup}
          onChange={technologyCheckBoxChange}
        />
      </Collapse.Panel>

      <Collapse.Panel header="Propiedades" key="3">
        <MaterialFilterPanelForm />
      </Collapse.Panel>
      
    </Collapse>
  );
}
