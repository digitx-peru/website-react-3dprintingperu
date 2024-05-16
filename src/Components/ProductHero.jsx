import useMediaQuery from "../hooks/useMediaQuery";

export default function ProductHero({ title, message, imageSrc }) {
  const isMobile = useMediaQuery(480);
  
  const styles = {
    container: {
      position: "relative",
      alignSelf: "stretch",
    },
    heroImage: {
      position: "relative",
      width: "100%",
      height: "500px",
      objectFit: "cover",
    },
    overlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      opacity: "0.7",
      display: "flex",
      alignItems: "center",
    },
    textContainer: {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 50px 0 50px",
      gap: "10px 0",
    },
    heroTitle: {
      color: "white",
      fontSize: isMobile ? 48 : 64,
    },
  };

  return (
    <section style={styles.container}>
      <img style={styles.heroImage} src={imageSrc} alt="" />
      <div style={styles.overlay}></div>
      <div style={styles.textContainer}>
        <h1 style={styles.heroTitle}>{title}</h1>
        {message !== null && <p style={{fontSize: 24}}>{message}</p>}
      </div>
    </section>
  );
}
