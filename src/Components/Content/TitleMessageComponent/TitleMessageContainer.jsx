import useBreakpoints from "../../../hooks/useBreakpoints";

import RowComponent from "../RowComponent";

export default function TitleMessageContainer({
  children,
  title,
  message,
  sectionName,
}) {
  //Check windows size
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "20px",
      ...(isMd && {
        padding: "20 200px",
      }),
    },
    title: {
      textAlign: "left",
      marginBottom: "20px",
      fontSize: "24px",
      ...(isMd && {
        textAlign: "center",
        fontSize: "24px",
      }),
    },
    message: {
      marginBottom: "20px",
    },
    childrenContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // padding: "20px",
      gap: "20px",
      ...(isMd && {
        flexDirection: "row",
        gap: "40px",
      }),
    },
  };

  return (
    <RowComponent>
      <div className={sectionName} style={styles.layout}>
        {title !== undefined && (
          <h2 className="title" style={styles.title}>
            {title}
          </h2>
        )}
        {message !== undefined && (
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
