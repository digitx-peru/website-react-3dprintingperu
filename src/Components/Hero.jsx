export default function Hero({ title, message, backgroundImagePath }) {
  const styles = {
    hero: {
      height: 500,
      backgroundColor: "#353535",
      alignItems: "center",
      color: "white",
      padding: 50,
      alignSelf: "stretch",
      backgroundImage: `url(${backgroundImagePath})`,
      backgroundSize: "cover",
    },
    heroTitle: {
      fontSize: 64,
    },
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>{title}</h1>
      {message !== null && <p>{message}</p>}      
    </section>
  );
}
