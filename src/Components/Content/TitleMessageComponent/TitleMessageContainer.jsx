import useMediaQuery from "../../../hooks/useMediaQuery";

import RowComponent from "../RowComponent";

export default function TitleMessageContainer({
  children,
  title,
  message,
  sectionName,
}) {
  //Check windows size
  const isTablet = useMediaQuery(768);

  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: isTablet ? "20px" : "0 200px",
    },
    title: {
      textAlign: isTablet ? "left" : "center",
      marginBottom: "20px",
      fontSize: isTablet ? "24px" : "24px",
    },
    message: {
      marginBottom: "20px",
    },
    childrenContainer: {
      display: "flex",
      flexDirection: isTablet ? "column" : "row",
      justifyContent: "center",
      gap: isTablet ? "20px" : "40px",
    },
  };

  return (
    <RowComponent>
      <div className={sectionName} style={styles.layout}>
        <h2 className="title" style={styles.title}>
          {title}
        </h2>
        {message !== null && (
          <p className="message" style={styles.message}>
            {message}
          </p>
        )}
        <div className="childrenContainer" style={styles.childrenContainer}>
          {children}
        </div>
      </div>
    </RowComponent>
  );
}
