import useBreakpoints from "../../hooks/useBreakpoints";

import RowComponent from "./RowComponent";

export default function TextImageRow({
  children,
  imageEnabled = true,
  imageRight = false,
  imageName,
  backgroundColor,
  altTextImage,
}) {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    layoutContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      fontSize: "16px",
      backgroundColor: backgroundColor,
      gap: "15px",
      ...(isMd && {
        flexDirection: imageRight ? "row-reverse" : "row",
        gap: 0,
        padding: "20px 0",
      }),
    },
    textSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      flex: 0.6,
      rowGap: "20px",
      ...(isMd && {
        padding: imageRight ? "0px 80px 0px 200px" : "0px 200px 0px 80px",
      }),
    },
    imageSection: {
      display: "flex",
      flex: 0.4,
      justifyContent: imageRight ? "end" : "start",
      alignItems: "start",
      ...(isMd && {
        padding: imageRight ? "0px 200px 0px 0px" : "0px 0px 0px 200px",
      }),
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
        {imageEnabled && (
          <div className={"imageHolder"} style={styles.imageSection}>
            <img style={styles.image} src={`/images/${imageName}`} alt="" />
          </div>
        )}

        <div className={"textHolder"} style={styles.textSection}>
          {children}
        </div>
      </div>
    </RowComponent>
  );
}
