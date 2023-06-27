import { Checkbox, Collapse, Form, Input } from "antd";

import {
  printerOptions,
  techOptions,
  industryOptions,
  applicationOptions,
  materialTypeOptions,
} from "./materialFilterOptions";

export default function MaterialFilterPanel({
  printerCheckBoxChange,
  technologyCheckBoxChange,
  applicationCheckBoxChange,
  industryCheckBoxChange,
  materialTypeCheckBoxChange,
  propertyFilterTextChanged,
}) {
  return (
    <Collapse
      defaultActiveKey={["1"]}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <Collapse.Panel header="Impresora" key="1">
        <div>
          <Checkbox.Group
            options={printerOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={printerCheckBoxChange}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Tecnologia" key="2">
        <div>
          <Checkbox.Group
            options={techOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={technologyCheckBoxChange}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Industria" key="3">
        <div>
          <Checkbox.Group
            options={industryOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={industryCheckBoxChange}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Aplicacion" key="4">
        <div>
          <Checkbox.Group
            options={applicationOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={applicationCheckBoxChange}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Tipo de material" key="5">
        <div>
          <Checkbox.Group
            options={materialTypeOptions}
            style={{ display: "flex", flexDirection: "column" }}
            onChange={materialTypeCheckBoxChange}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Volumen" key="6">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Form name="basic">
            <Form.Item label="Tensile Modulus" layout="vertical">
              <Input
                prefix="min"
                style={{ width: 225 }}
                onChange={(event) =>
                  propertyFilterTextChanged("tensileModulus", "min", event)
                }
              />
              <Input
                prefix="max"
                style={{ width: 225 }}
                onChange={(event) =>
                  propertyFilterTextChanged("tensileModulus", "max", event)
                }
              />
            </Form.Item>
          </Form>
        </div>
      </Collapse.Panel>
    </Collapse>
  );
}
