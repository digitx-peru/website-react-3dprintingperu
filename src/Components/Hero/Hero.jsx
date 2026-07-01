import useMediaQuery from "../../hooks/useMediaQuery";

import HeaderHeroOverlay from "../Overlays/HeaderHeroOverlay";

export default function Hero({
  title = "Title",
  message = null,
  imgTitleEnabled = false,
  imgTitle = "/images/logo_artisan.jpeg",
  backgroundImage,
}) {
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);

  const styles = {
    container: {
      position: "relative",
      display: "flex",
      height: "500px",
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      backgroundColor: backgroundImage ? "none" : "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
    textContainer: {
      display: "flex",
      flex: 1, //Too avoid doing flex column in the container
      flexDirection: "column",
      justifyContent: "center",
      color: "white",
      padding: "0 50px",
      gap: isTablet ? "30px" : "10px 0",
      zIndex: 2,
    },
    imageTitle: {
      width: "600px",
    },
    title: {
      fontSize: isMobile ? 32 : 64,
      fontWeight: isMobile ? "bold" : "normal"
    },
    message: {
      fontSize: isMobile ? "20px" : "24px",
    },
  };

  return (
    <section className="hero" style={styles.container}>
      <HeaderHeroOverlay />
      <div className="heroTextContent" style={styles.textContainer}>
        {imgTitleEnabled == true ? (
          <img style={styles.imageTitle} src={imgTitle} alt="App Logo" />
        ) : (
          <h1 style={styles.title}>{title}</h1>
        )}
        {message !== null && <p style={styles.message}>{message}</p>}
      </div>
    </section>
  );
}
