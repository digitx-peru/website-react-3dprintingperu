export default function FooterNavColumn({ title, children }) {
  const styles = {
    footerNavColumnContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    title: {
      color: "rgb(62,255,180)",
      margin: 0,
      fontSize: "20px",
    },
    list: {
      padding: "0 0 0 20px",
    }
  };

  return (
    <div style={styles.footerNavColumnContainer}>
      <h4 style={styles.title}>{title}</h4>
      <ul style={styles.list}>{children}</ul>
    </div>
  );
}
