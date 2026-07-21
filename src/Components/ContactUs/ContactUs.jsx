import { useState } from "react";
import useBreakpoints from "../../hooks/useBreakpoints";

import { Button, Form, Input, Modal, Select } from "antd";

import emailHandler from "../../utils/emailHandler";

export default function ContactUs() {
  const { isMd, isLg } = useBreakpoints();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //current text value
  const [currentTextValue, setCurrentTextValue] = useState(
    "Hola 3DP,Quisiera comprar una impresora 3D para fabricar piñones, que serviran como pieza de repuesto para mi maquinaria. Las dimensiones (en cm) de esta pieza estan en el rango de: alto:  10 - 15cm, ancho: 10-15cm y profundidad: 3cm. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de una pieza ejemplo. Muchas gracias, Mi nombre",
  );

  //Form reference
  const [form] = Form.useForm();

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      flex: "1 0 0",
      gap: 30,
      alignItems: "stretch",
      alignSelf: "stretch",
      backgroundColor: "#323232",
      // margin: "0 15px",
      padding: "20px",
      color: "white",
      ...(isMd && {
        alignSelf: "initial",
        // width: "600px",
        margin: "0",
        borderRadius: 8,
      }),
    },
    formItemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      ...(isMd && {
        flexDirection: "row",
      }),
    },
    formItem: {
      marginBottom: 0,
      flexGrow: 1,
      fontSize: "16px",
    },
    formItemInput: {
      fontSize: "16px",
    },
    formItemButton: {
      display: "flex",
      justifyContent: "center",
    },
    formItemLabel: {
      color: "white",
      fontSize: "18px",
    },
    formItemLabelTitle: {
      color: "rgb(62,255,180)",
      fontSize: "24px",
    },
    formItemSubmitButton: {
      height: "60px",
      width: "200px",
      color: "black",
      backgroundColor: "rgb(99,218,178)",
      fontSize: "18px",
      ...(isMd && {
        height: "auto",
        fontSize: "24px",
      }),
    },
    formTextArea: {
      fontSize: "16px",
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
    switch (newValue) {
      case "buy":
        setCurrentTextValue(
          "Hola 3DP,Quisiera comprar una impresora 3D para fabricar piñones, que serviran como pieza de repuesto para mi maquinaria. Las dimensiones (en cm) de esta pieza estan en el rango de: alto:  10 - 15cm, ancho: 10-15cm y profundidad: 3cm. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de una pieza ejemplo. Muchas gracias, Mi nombre",
        );
        break;

      case "print":
        setCurrentTextValue(
          "Hola 3DP, Quisiera solicitar la fabricación de una pieza, son piñones, que serviran como pieza de repuesto para mi maquinaria. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de la pieza. Muchas gracias, Mi nombre",
        );
        break;

      case "support":
        setCurrentTextValue(
          "Hola 3DP, Quisiera solicitar el mantenimiento de una impresora 3D, son piñones, que serviran como pieza de repuesto para mi maquinaria. La pieza estara expuesta a liquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de la pieza. Muchas gracias, Mi nombre",
        );
        break;
      case "rhino":
        setCurrentTextValue(
          "Hola 3DP, Quisiera solicitar una demostración del software rhynoArtisan. Tengo disponibilidad en los siguientes horarios: <Martes XX, a las 4pm> <Viernes XX, a las 10am> Muchas gracias, <Mi nombre>",
        );
        break;
    }
  };

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
        {/* ////////////////////////////////////////////////////////// */}
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
            <Input style={styles.formItemInput} />
          </Form.Item>
          {/* ////////////////////////////////////////////////////////// */}
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
            <Input style={styles.formItemInput} />
          </Form.Item>
        </div>
        {/* ////////////////////////////////////////////////////////// */}
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
            <Input style={styles.formItemInput} />
          </Form.Item>
          {/* ////////////////////////////////////////////////////////// */}
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
            <Input style={styles.formItemInput} />
          </Form.Item>
        </div>
        {/* ////////////////////////////////////////////////////////// */}
        <div style={styles.formItemGroup}>
          <Form.Item
            label={<label style={styles.formItemLabel}>¿Qué necesita?</label>}
            name="requirement"
            style={styles.formItem}
            rules={[
              {
                required: true,
                message: "Phone required",
              },
            ]}
          >
            <Select
              defaultValue="buy"
              styles={{
                input: { fontSize: "16px" },
              }}
              options={[
                { value: "buy", label: <span>Comprar impresora 3D</span> },
                { value: "print", label: <span>Fabricar una pieza</span> },
                {
                  value: "support",
                  label: <span>Mantenimiento de una impresora 3D</span>,
                },
                { value: "rhino", label: <span>RhynoArtisan</span> },
              ]}
              onChange={onDropDownOptionChange}
            />
          </Form.Item>
        </div>
        {/* ////////////////////////////////////////////////////////// */}
        <Form.Item
          label={
            <label style={styles.formItemLabel}>
              Por favor detalle más su requerimiento. Modifique el texto ejemplo
              como desee
            </label>
          }
          //This form doesn't have a name because creates conflict with the value in TextArea.
          style={styles.formItem}
        >
          <Input.TextArea
            rows={4}
            value={currentTextValue}
            onChange={(e) => setCurrentTextValue(e.target.value)}
            style={styles.formTextArea}
          />
        </Form.Item>
        {/* ////////////////////////////////////////////////////////// */}
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
      {/* ////////////////////////////////////////////////////////// */}
      <Modal
        open={isModalOpen}
        // style={{ padding: 20 }}
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
              // style={{ fontSize: "16px" }}
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
