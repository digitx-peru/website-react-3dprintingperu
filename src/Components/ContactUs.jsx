import { Button, Form, Input } from "antd";

import emailHandler from "../utils/emailHandler";

export default function ContactUs() {
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      <h2 style={{ color: "white" }}>Haz tu consulta</h2>
      <div style={styles.formItemGroup}>
        <Form.Item
          label={<label style={{ color: "white" }}>Name</label>}
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
          label={<label style={{ color: "white" }}>Email</label>}
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
          label={<label style={{ color: "white" }}>Phone</label>}
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
          label={<label style={{ color: "white" }}>Company</label>}
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
        label={<label style={{ color: "white" }}>Message</label>}
        name="message"
        style={styles.formItem}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item style={styles.formItem}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const styles = {
  form: {
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 30,
    width: "60%",
    alignItems: "stretch",
    backgroundColor: "#323232",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
  },
  formItemGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  formItem: {
    marginBottom: 0,
    flexGrow: 1,
  },
};
