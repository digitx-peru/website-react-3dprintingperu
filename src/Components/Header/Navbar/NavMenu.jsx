import { useState } from "react";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import NavbarModal from "./NavbarModal";

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
      <NavbarModal isOpen={isModalOpen} onClose={handleCancel}>
        <NavbarCollapse onClickLink={handleOk} />
      </NavbarModal>
    </>
  );
}
