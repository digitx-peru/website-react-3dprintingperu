import { useState } from "react";
import { Button, Modal } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import NavbarCollapse from "./NavbarCollapse";

export default function NavMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = {
    icon: {
      fontSize: "25px",
      width: "50px",
      height: "50px",
    },
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button icon={<MenuOutlined />} onClick={showModal} style={styles.icon} />
      <Modal
        title="Ir a"
        open={isModalOpen}
        style={{ padding: 20 }}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<CloseOutlined style={{ fontSize: '24px' }}/>}
        footer={
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', padding: '10px 20px' }}>
              <Button key="ok" type="primary" style={{height: 40}}>OK</Button>
            </div>
          }
      >
        <NavbarCollapse onClickLink={handleOk} />
      </Modal>
    </>
  );
}
