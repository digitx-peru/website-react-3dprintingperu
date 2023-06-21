import { Checkbox, Collapse, Input } from "antd";
import { techOptions } from "./printerFilterOptions";

export default function PrinterFilterPanel({ technologyCheckBoxChange, searchTextChanged }) {


  return (
    <Collapse
      defaultActiveKey={["1"]}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <Collapse.Panel header="Tecnologia" key="1">
        <div>
          <Checkbox.Group
            options={techOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={technologyCheckBoxChange}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Volumen" key="2">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            prefix="X (mm)"
            style={{ width: 200 }}
            onChange={(e) => searchTextChanged("X", e)}
          />
          <Input
            prefix="Y (mm)"
            style={{ width: 200 }}
            onChange={(e) => searchTextChanged("Y", e)}
          />
          <Input
            prefix="Z (mm)"
            style={{ width: 200 }}
            onChange={(e) => searchTextChanged("Z", e)}
          />
        </div>
      </Collapse.Panel>
    </Collapse>
  );
}
