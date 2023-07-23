import { Input, Form } from "antd";

export default function MaterialFilterPanelInputGroup({
  formItemLabel,
  propertyFilterTextChanged,
}) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    input: {
      width: "200px",
    },
    addonBefore: {
      width: "25px",
    },
  };

  return (
    <Form.Item label={formItemLabel}>
      <div className="materialFilterPanelInputGroup" style={styles.container}>
        <Input
          style={styles.input}
          addonBefore={<p style={styles.addonBefore}>Min</p>}
          onChange={(event) =>
            propertyFilterTextChanged("tensileModulus", "min", event)
          }
        />
        <Input
          style={styles.input}
          addonBefore={<p style={styles.addonBefore}>Max</p>}
          onChange={(event) =>
            propertyFilterTextChanged("tensileModulus", "max", event)
          }
        />
      </div>
    </Form.Item>
  );
}
