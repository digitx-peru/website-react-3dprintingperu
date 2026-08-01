import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import useBreakpoints from "../../../hooks/useBreakpoints";

export default function NavbarModal({ isOpen, onClose, children }) {
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "0 20px",
      ...(isTablet && {
        alignItems: "center",
        padding: 0,
      }),
    },
    contentLayout: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      ...(isTablet && {
        width: "400px",
        maxWidth: "400px",
      }),
    },
    closeButton: {
      alignSelf: "end",
      color: "rgb(62,255,180)",
      backgroundColor: "#3F3F3F",
      borderColor: "rgb(62,255,180)",
    },
    content: {
      position: "relative",
      backgroundColor: "#3F3F3F",
      ...(isTablet && {}),
    },
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.contentLayout}>
        <Button
          icon={<CloseOutlined />}
          onClick={onClose}
          style={styles.closeButton}
        />
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}
