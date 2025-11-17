import { useState } from "react";

import { Button, Form, Input, Modal, Select } from "antd";

import emailHandler from "../utils/emailHandler";
import useMediaQuery from "../hooks/useMediaQuery";

// import { mediumScreenSize } from "../style/screenSizes";

export default function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //possible options: buy, print, support
  const [currentDropDownOption, setCurrentDropDownOption] = useState("buy");

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    // You could also trigger an API call, animation, etc. here
  }, [currentDropDownOption]);

  //Screenwidth breakpoints
  const isMediumScreenSize = useMediaQuery(768);

  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  //Puntos de quiebre para cambiar el tamaño
  const is1280 = useMediaQuery(1280);

  //Form reference
  const [form] = Form.useForm();

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
      padding: "25px 50px",
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
    formItemButton: {
      display: "flex",
      justifyContent: "center",
    },
    formItemLabelTitle: {
      color: "rgb(62,255,180)",
    },
    formItemLabel: {
      color: "white",
    },
    formItemSubmitButton: {
      height: isColumnLayoutWidth ? "60px" : "auto",
      width: "200px",
      backgroundColor: "rgb(99,218,178)"
    },
    modalMessage: {
      fontSize: "14px",
    },
  };

  //OnFinish eventHandler
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  //onDropDownOptionChange
  const onDropDownOptionChange = (newValue) => {
    let newTextMessage;

    switch (newValue) {
      case "buy":
        newTextMessage = "Hola 3DP,Quisiera comprar una impresora 3D para fabricar piñones, que serviran como pieza de repuesto para mi maquinaria. Las dimensiones (en cm) de esta pieza estan en el rango de: alto:  10 - 15cm, ancho: 10-15cm y profundidad: 3cm. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de una pieza ejemplo. Muchas gracias, Mi nombre"
        break;

      case "print":
        newTextMessage = "Hola 3DP, Quisiera solicitar la fabricación de una pieza, son piñones, que serviran como pieza de repuesto para mi maquinaria. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de la pieza. Muchas gracias, Mi nombre"
        break;

      case "support":
        newTextMessage = "Hola 3DP, Quisiera solicitar el mantenimiento de una impresora 3D, son piñones, que serviran como pieza de repuesto para mi maquinaria. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de la pieza. Muchas gracias, Mi nombre"
        break;
    }

    return newTextMessage;

  }

  return (
    <>
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
          showModal();
          form.resetFields();
        }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 style={styles.formItemLabelTitle}>Haz tu consulta</h2>
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

        <div style={styles.formItemGroup}>
          <Form.Item
            label={<label style={styles.formItemLabel}>¿Qué necesita?</label>}
            name="requirement"
            style={{ ...styles.formItem, flexGrow: 0, width: '50%' }}
            rules={[
              {
                required: true,
                message: "Phone required",
              },
            ]}
          >
            <Select
              defaultValue='buy'
              options={[
                { value: 'buy', label: <span>Comprar impresora 3D</span> },
                { value: 'print', label: <span>Fabricar una pieza</span> },
                { value: 'support', label: <span>Mantenimiento de una impresora 3D</span> },
              ]}
              onChange={(value) => setCurrentDropDownOption(value)}
            />
          </Form.Item>
        </div>

        <Form.Item
          label={<label style={styles.formItemLabel}>Mensaje</label>}
          name="message"
          style={styles.formItem}
        >
          <Input.TextArea rows={4} defaultValue=onDropDownOptionChange()/>
        </Form.Item>

        <Form.Item style={{ ...styles.formItem, ...styles.formItemButton }}>
          <Button
            style={styles.formItemSubmitButton}
            type="primary"
            htmlType="submit"
          >
            Enviar
          </Button>
        </Form.Item>
      </Form>
      <Modal
        open={isModalOpen}
        style={{ padding: 20 }}
        centered
        closable={false}
        footer={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              padding: "10px 20px",
            }}
          >
            <Button
              key="ok"
              type="primary"
              style={{ height: 40 }}
              onClick={handleOk}
            >
              OK
            </Button>
          </div>
        }
      >
        <p style={styles.modalMessage}>Tu mensaje ha sido enviado</p>
      </Modal>
    </>
  );
}
