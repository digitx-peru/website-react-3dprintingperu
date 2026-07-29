import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function NavbarModal({ isOpen, onClose, children }) {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
    },
    content: {
      position: "relative",
      backgroundColor: "#3F3F3F",
      width: "100%",
    },
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <Button
        icon={<CloseOutlined />}
        onClick={onClose}
        style={styles.closeButton}
      />
      <div style={styles.content}>{children}</div>
    </div>
  );
}
