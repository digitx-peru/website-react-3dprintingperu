import { Checkbox, Collapse, Input } from "antd";
import { techOptions } from "./printerFilterOptions";

import VolumeFilterInputGroup from "./VolumeFilter/VolumeFilterInputGroup";

export default function PrinterFilterPanel({
  technologyCheckBoxChangeHandler,
  dimensionChangeHandler,
}) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      gap: 10,
    },
  };

  return (
    <Collapse defaultActiveKey={["1"]} style={styles.container}>
      <Collapse.Panel header="Tecnología" key="1">
        <div>
          <Checkbox.Group
            options={techOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={technologyCheckBoxChangeHandler}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Volumen" key="2">
        <VolumeFilterInputGroup dimensionChangeHandler={dimensionChangeHandler}/>
      </Collapse.Panel>
    </Collapse>
  );
}
