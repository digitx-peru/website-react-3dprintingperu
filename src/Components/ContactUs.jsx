import { Button, Form, Input } from "antd";

import emailHandler from "../utils/emailHandler";
import useMediaQuery from "../hooks/useMediaQuery";

import { mediumScreenSize } from "../style/screenSizes";

export default function ContactUs() {
  //Screenwidth breakpoints
  const isMediumScreenSize = useMediaQuery(mediumScreenSize);

  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  //Puntos de quiebre para cambiar el tamaño
  const is1280 = useMediaQuery(1280);

  //Form reference
  const [form] = Form.useForm();

  //OnFinish eventHandler
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const styles = {
    form: {
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      gap: 30,
      alignItems: "stretch",
      alignSelf: isMediumScreenSize ? "stretch" : "initial",
      width: isMediumScreenSize ? "auto" : is1280 ? "600px" : "900px",
      backgroundColor: "#323232",
      margin: isColumnLayoutWidth ? "0 15px" : "0",
      padding: "15px",
      color: "white",
    },
    formItemGroup: {
      display: "flex",
      flexDirection: isColumnLayoutWidth ? "column" : "row",
      gap: "30px",
    },
    formItem: {
      marginBottom: 0,
      flexGrow: 1,
    },
    formItemLabel: {
      color: "white",
    },
  };

  return (
    <Form
      form={form}
      name="contactUs"
      layout="vertical"
      style={styles.form}
      initialValues={{
        remember: true,
      }}
      onFinish={(values) => {
        emailHandler(values);
        form.resetFields();
      }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2 style={styles.formItemLabel}>Haz tu consulta</h2>
      <div style={styles.formItemGroup}>
        <Form.Item
          label={<label style={styles.formItemLabel}>Nombre completo</label>}
          name="customerName"
          style={styles.formItem}
          rules={[
            {
              required: true,
              message: "Name required",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label style={styles.formItemLabel}>Email</label>}
          name="email"
          style={styles.formItem}
          rules={[
            {
              required: true,
              message: "Email required",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>

      <div style={styles.formItemGroup}>
        <Form.Item
          label={<label style={styles.formItemLabel}>Teléfono</label>}
          name="phone"
          style={styles.formItem}
          rules={[
            {
              required: true,
              message: "Phone required",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label style={styles.formItemLabel}>Empresa</label>}
          name="companyName"
          style={styles.formItem}
          rules={[
            {
              required: true,
              message: "Company required",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>

      <Form.Item
        label={<label style={styles.formItemLabel}>Mensaje</label>}
        name="message"
        style={styles.formItem}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item style={styles.formItem}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
