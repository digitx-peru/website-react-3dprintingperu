import useBreakpoints from "../../../hooks/useBreakpoints";

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
      fontSize: "16px",
      ...(isMd && {
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
      fontSize: "clamp(18px, 4vw, 24px)",
    },
  };

  return (
    <div className="cardContainer" style={styles.componentContainer}>
      {isMd && (
        <img src={iconImagePath} alt="" className="icon" style={styles.image} />
      )}
      <div style={styles.infoContainer}>
        <h2 className="cardTitle" style={styles.title}>
          {title}
        </h2>
        <p className="cardInfo">{message}</p>
      </div>
    </div>
  );
}
