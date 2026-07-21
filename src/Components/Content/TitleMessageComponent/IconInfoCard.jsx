import useBreakpoints from "../../../hooks/useBreakpoints";

import typography from "../../../Style/typography";

export default function IconInfoCard({
  iconImagePath = "/images/components/homePage/infocard/info_card_icon_1.png",
  title,
  message,
  backgroundColor,
}) {
  //Check windows size
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    componentContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: backgroundColor,
      padding: "15px",
      boxSizing: "border-box",
      borderRadius: "8px",
      ...(isMd && {
        flexDirection: "row",
      }),
      ...(isLg && {
        width: "300px",
        height: "400px",
        gap: "30px",
        flexDirection: "column",
      }),
    },
    infoContainer: {
      display: "flex",
      flex: "1 0 0",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "20px",
      ...(isMd && {
        alignSelf: "center",
      }),
    },
    image: {
      ...(isMd && {
        alignSelf: "center",
        padding: "15px",
      }),
      ...(isMd && {
        alignSelf: "flex-end",
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
      {isMd && (
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
