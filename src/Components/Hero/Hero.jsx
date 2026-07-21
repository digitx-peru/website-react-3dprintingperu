import useBreakpoints from "../../hooks/useBreakpoints";

import typography from "../../Style/typography";

import HeaderHeroOverlay from "../Overlays/HeaderHeroOverlay";

export default function Hero({
  title = "Title",
  message = null,
  imgTitleEnabled = false,
  imgTitle = "/images/logo_artisan.jpeg",
  backgroundImage,
}) {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    container: {
      position: "relative",
      display: "flex",
      height: "300px",
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      backgroundColor: backgroundImage ? "none" : "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      ...(isMd && {
        height: "400px",
      }),
      ...(isLg && {
        height: "500px",
      }),
    },
    textContainer: {
      display: "flex",
      flex: 1, //Too avoid doing flex column in the container
      flexDirection: "column",
      justifyContent: "center",
      color: "white",
      padding: "0 50px",
      gap: "30px",
      zIndex: 2,
      ...(isMd && {
        gap: "40px",
      }),
    },
    imageTitle: {
      width: "600px",
      ...(isMd && {}),
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 4rem)",
      lineHeight: typography.lineHeights.headingLoose,
      fontWeight: "bold",
      ...(isMd && {
        // fontSize: "48px",
        fontWeight: "normal",
      }),
    },
    message: {
      fontSize: typography.fluid.h1,
      lineHeight: typography.lineHeights.headingLoose,
      ...(isMd && {}),
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
