import { Form } from "antd";
import MaterialFilterPanelInputGroup from "./MaterialFilterPanelInputGroup";

export default function MaterialFilterPanelForm({ propertyFilterInputChangeHandler }) {
  return (
    <Form name="basic" layout="vertical">
      <MaterialFilterPanelInputGroup
        formItemLabel={"Tensile Modulus"}
        formItemPropertyName={"tensileModulus"}
        propertyFilterInputChangeHandler={propertyFilterInputChangeHandler}
      />
      <MaterialFilterPanelInputGroup
        formItemLabel={"Elongation at Break"}
        formItemPropertyName={"elongationAtBreak"}
        propertyFilterInputChangeHandler={propertyFilterInputChangeHandler}
      />
      <MaterialFilterPanelInputGroup
        formItemLabel={"Heat Distortion Temp @182mpa"}
        formItemPropertyName={"heatDistortionTemp182mpa"}
        propertyFilterInputChangeHandler={propertyFilterInputChangeHandler}
      />
    </Form>
  );
}
