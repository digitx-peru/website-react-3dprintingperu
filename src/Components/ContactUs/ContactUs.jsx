import { useState } from "react";

import { Button, Form, Input, Modal, Select } from "antd";

import useBreakpoints from "../../hooks/useBreakpoints";
import typography from "../../Style/typography";

import emailHandler from "../../utils/emailHandler";

export default function ContactUs({ defaultOption = "buyOption" }) {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buyOption =
    "Hola 3DP,\n\nQuisiera comprar una impresora 3D para fabricar piñones, que serviran como pieza de repuesto para mi maquinaria. Las dimensiones (en cm) de esta pieza estan en el rango de: alto:  10 - 15cm, ancho: 10-15cm y profundidad: 3cm. La pieza estará expuesta a líquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de una pieza ejemplo.\n\nMuchas gracias, Mi nombre";

  const printOption =
    "Hola 3DP,\n\nQuisiera solicitar la fabricación de una pieza, son piñones, que servirán como pieza de repuesto para mi maquinaria. La pieza estará expuesta a líquidos abrasivos y al medio ambiente. La cantidad estimada de piezas que necesitaré imprimir es 20 por semana. Sí cuento con un diseño 3D (archivo .stl) de la pieza.\n\nMuchas gracias, Mi nombre";

  const supportOption =
    "Hola 3DP,\n\nQuisiera solicitar el mantenimiento de una impresora 3D, de marca <3DS> y modelo <modelo>. Pueden recoger el equipo en la dirección: <dirección>.\n\nMuchas gracias, Mi nombre";

  const softwareOption =
    "Hola 3DP,\n\nQuisiera solicitar una demostración del software rhynoArtisan. Tengo disponibilidad en los siguientes horarios: <Martes XX, a las 4pm> <Viernes XX, a las 10am>.\n\nMuchas gracias, <Mi nombre>";

  function defaultOptionValue(value) {
    switch (value) {
      case "buyOption":
        return { res1: buyOption, res2: "buy" };
      case "printOption":
        return { res1: printOption, res2: "print" };
      case "supportOption":
        return { res1: supportOption, res2: "support" };
      case "softwareOption":
        return { res1: softwareOption, res2: "rhino" };
    }
  }

  //current text value
  const [currentTextValue, setCurrentTextValue] = useState(
    defaultOptionValue(defaultOption).res1,
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
      ...(isTablet && {
        alignSelf: "initial",
        margin: "0",
        borderRadius: 8,
      }),
      ...(isDesktop && {
        flex: "0 0 80%",
        margin: "0",
      }),
      ...(isWideScreen && {
        flex: "0 0 60%",
      }),
    },
    formItemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      ...(isTablet && {
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
      fontSize: typography.fluid.body,
      ...(isTablet && {
        height: "30px",
      }),
    },
    formTextArea: {
      fontSize: typography.fluid.body,
      height: "200px",
    },
    modalMessage: {
      fontSize: typography.fluid.body,
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
        setCurrentTextValue(buyOption);
        break;

      case "print":
        setCurrentTextValue(printOption);
        break;

      case "support":
        setCurrentTextValue(supportOption);
        break;
      case "rhino":
        setCurrentTextValue(softwareOption);
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
              defaultValue={defaultOptionValue(defaultOption).res2}
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
              // style={{ fontSize: typography.fluid.h3 }}
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
