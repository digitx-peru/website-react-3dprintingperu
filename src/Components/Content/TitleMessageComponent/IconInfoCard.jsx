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
      ...(isLg && {
        width: "300px",
        height: "400px",
        gap: "30px",
      }),
    },
    infoContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "20px",
    },
    image: {
      alignSelf: "flex-end",
    },
    title: {
      fontSize: typography.fluid.h3,
    },
    message: {
      fontSize: typography.fluid.body,
    },
  };

  return (
    <div className="cardContainer" style={styles.componentContainer}>
      {isLg && (
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
