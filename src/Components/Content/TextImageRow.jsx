import useMediaQuery from "../../hooks/useMediaQuery";

import RowComponent from "./RowComponent";

export default function TextImageRow({
  children,
  imageRight = false,
  imageName,
  backgroundColor,
  altTextImage,
}) {
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);

  const styles = {
    layoutContainer: {
      display: "flex",
      flexDirection: isTablet ? "column" : imageRight ? "row-reverse" : "row",
      padding: "20px 0",
      fontSize: "16px",
      backgroundColor: backgroundColor,
      gap: isTablet ? "15px" : 0
    },
    textSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      flex: 0.6,
      padding: isTablet ? "0px 20px" : imageRight ? "0px 80px 0px 200px" : "0px 200px 0px 80px",
      rowGap: "20px",
    },
    imageSection: {
      display: "flex",
      flex: 0.4,
      justifyContent: imageRight ? "end" : "start",
      alignItems: "start",
      padding: isTablet ? "0px 20px" : imageRight ? "0px 200px 0px 0px" : "0px 0px 0px 200px",
    },
    image: {
      maxHeight: "400px",
      width: "auto",
      maxWidth: "100%",
    },
  };

  return (
    <RowComponent>
      <div style={styles.layoutContainer}>
        <div className={"imageHolder"} style={styles.imageSection}>
          <img style={styles.image} src={`/images/${imageName}`} alt="" />
        </div>
        <div className={"textHolder"} style={styles.textSection}>
          {children}
        </div>
      </div>
    </RowComponent>
  );
}
