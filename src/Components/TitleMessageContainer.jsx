export default function TitleMessageContainer({
  children,
  title,
  message,
  sectionName,
}) {
  const styles = {
    sectionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "0px 200px",
      margin: "50px 0",
    },
    title: {
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
    <section className={sectionName} style={styles.sectionContainer}>
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
    </section>
  );
}
