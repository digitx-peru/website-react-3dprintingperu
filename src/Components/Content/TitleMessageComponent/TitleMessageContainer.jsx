import RowComponent from "../RowComponent";

export default function TitleMessageContainer({
  children,
  title,
  message,
  sectionName,
}) {
  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
    },
    message: {
      marginBottom: "20px",
    },
    childrenContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "40px",
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
