import useBreakpoints from "../../../hooks/useBreakpoints";

import typography from "../../../Style/typography";

export default function IconInfoCard({
  iconImagePath = "/images/components/homePage/infocard/info_card_icon_1.png",
  title,
  message,
  backgroundColor,
}) {
  //Check windows size
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    componentContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: backgroundColor,
      padding: "15px",
      boxSizing: "border-box",
      borderRadius: "8px",
      ...(isTablet && {
        flexDirection: "row",
      }),
      ...(isDesktop && {
        flexDirection: "column",
        flex: "1 1 33.333%",
        maxWidth: "300px",
        minWidth: 0, // Ensures the container can still shrink below 300px
        height: "400px",
        gap: "30px",
      }),
    },
    infoContainer: {
      display: "flex",
      flex: "1 0 0",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "20px",
      ...(isTablet && {
        alignSelf: "center",
      }),
    },
    image: {
      ...(isTablet && {
        alignSelf: "center",
        padding: "15px",
      }),
      ...(isDesktop && {
        alignSelf: "end",
        maxWidth: "100%", // Constrains the image to the container
        height: "auto", // Protects the aspect ratio from stretching
      }),
    },
    title: {
      fontSize: typography.fluid.h3,
      lineHeight: typography.lineHeights.headingLoose,
    },
    message: {
      fontSize: typography.fluid.body,
      lineHeight: typography.lineHeights.body,
    },
  };

  return (
    <div className="cardContainer" style={styles.componentContainer}>
      {isTablet && (
        <img src={iconImagePath} alt="" className="icon" style={styles.image} />
      )}
      <div style={styles.infoContainer}>
        <h3 className="cardTitle" style={styles.title}>
          {title}
        </h3>
        <p style={styles.message} className="cardInfo">
          {message}
        </p>
      </div>
    </div>
  );
}
