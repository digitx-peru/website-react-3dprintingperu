import useBreakpoints from "../../hooks/useBreakpoints";

import typography from "../../Style/typography";
import globalStyle from "../../Style/globalStyle";

import HeaderHeroOverlay from "../Overlays/HeaderHeroOverlay";

export default function Hero({
  title = "Title",
  message = null,
  imgTitleEnabled = false,
  imgTitle = "/images/logo_artisan.jpeg",
  backgroundImage,
}) {
  const { isTablet, isDesktop } = useBreakpoints();

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
      ...(isTablet && {
        height: "400px",
      }),
      ...(isDesktop && {
        height: "500px",
      }),
    },
    textContainer: {
      display: "flex",
      flex: 1, //Too avoid doing flex column in the container
      flexDirection: "column",
      justifyContent: "center",
      color: "white",
      padding: `0 ${globalStyle.lateralPadding.mobile}`,
      gap: "30px",
      zIndex: 2,
      ...(isTablet && {
        padding: `0 ${globalStyle.lateralPadding.tablet}`,
        gap: "40px",
      }),
      ...(isDesktop && {
        padding: `0 ${globalStyle.lateralPadding.desktop}`,
        gap: "40px",
      }),
    },
    imageTitle: {
      width: "600px",
      ...(isTablet && {}),
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 4rem)",
      lineHeight: typography.lineHeights.headingLoose,
      fontWeight: "bold",
      ...(isTablet && {
        // fontSize: "48px",
        fontWeight: "normal",
      }),
    },
    message: {
      fontSize: typography.fluid.h1,
      lineHeight: typography.lineHeights.headingLoose,
      ...(isTablet && {}),
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
