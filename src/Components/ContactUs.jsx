import { Button, Form, Input } from "antd";
const { TextArea } = Input;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function ContactUs() {
  return (
    <Form
      name="contactUs"
      layout="vertical"
      style={styles.form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2 style={{color: 'white'}}>Haz tu consulta</h2>
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
          name="company"
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
        style={styles.formItem}
      >
        <TextArea rows={4} />
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
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
  formItem: {
    marginBottom: 0,
    flexGrow: 1,
  },
};
