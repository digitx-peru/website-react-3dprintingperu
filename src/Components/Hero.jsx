import useMediaQuery from "../hooks/useMediaQuery";

export default function Hero({ title = "Title", message = null, imgTitleEnabled = false, imgTitle = "/images/logo_artisan.jpeg" }) {
  const isMobile = useMediaQuery(480);
  const styles = {
    container: {
      position: "relative",
      display: 'flex',
      height: "500px",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "white",
      padding: "0 50px 0 50px",
      gap: "10px 0",
    },
    heroTitle: {
      fontSize: isMobile ? 32 : 64,
    },
  };

  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        {imgTitleEnabled == true ? <img style={{width:"600px"}} src={imgTitle} alt="App Logo" /> : <h1 style={styles.heroTitle}>{title}</h1>}        
        {message !== null && <p style={{ fontSize: 24 }}>{message}</p>}
      </div>
    </section>
  );
}
