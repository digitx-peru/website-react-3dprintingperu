export default function RowComponent({ children, backgroundColor }) {
  const styles = {
    container: {
      backgroundColor: backgroundColor,
      paddingTop: "10px",
      paddingBottom: "10px",
      marginBottom: "20px",
    },
  };

  return (
    <article className="application-card" style={styles.container}>
      {children}
    </article>
  );
}
