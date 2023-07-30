import { Input, Form } from "antd";

export default function MaterialFilterPanelInputGroup({
  formItemLabel,
  formItemPropertyName,
  propertyFilterInputChangeHandler,
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
    <Form.Item label={formItemLabel} name={formItemLabel} id={formItemLabel}>
      <div className="materialFilterPanelInputGroup" style={styles.container}>
        <Input
          style={styles.input}
          addonBefore={<p style={styles.addonBefore}>Min</p>}
          onChange={(event) =>
            propertyFilterInputChangeHandler(formItemPropertyName, "min", event)
          }
        />
        <Input
          style={styles.input}
          addonBefore={<p style={styles.addonBefore}>Max</p>}
          onChange={(event) =>
            propertyFilterInputChangeHandler(formItemPropertyName, "max", event)
          }
        />
      </div>
    </Form.Item>
  );
}
