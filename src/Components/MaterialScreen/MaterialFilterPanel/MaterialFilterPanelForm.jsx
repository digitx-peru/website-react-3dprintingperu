import { Form } from "antd";
import MaterialFilterPanelInputGroup from "./MaterialFilterPanelInputGroup";

export default function MaterialFilterPanelForm({ propertyFilterTextChanged }) {
  return (
    <Form name="basic" layout="vertical">
      <MaterialFilterPanelInputGroup formItemLabel={"Tensile Modulus"} propertyFilterTextChanged={propertyFilterTextChanged}/>
      <MaterialFilterPanelInputGroup formItemLabel={"Elongation at Break"} propertyFilterTextChanged={propertyFilterTextChanged}/>
      <MaterialFilterPanelInputGroup formItemLabel={"Heat Distortion Temp @182C"} propertyFilterTextChanged={propertyFilterTextChanged}/>
    </Form>
  );
}
