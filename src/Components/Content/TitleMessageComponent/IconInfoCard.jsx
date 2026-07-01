import useMediaQuery from "../../../hooks/useMediaQuery";

export default function IconInfoCard({
  iconImagePath = "/images/components/homePage/infocard/info_card_icon_1.png",
  title,
  message,
  backgroundColor,
}) {
  //Check windows size
  const isTablet = useMediaQuery(768);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: isTablet ? "auto" : "300px",
      height: isTablet ? "auto" : "400px",
      backgroundColor: backgroundColor,
      padding: "15px",
      boxSizing: "border-box",
      borderRadius: "10px",
      gap: isTablet ? 0 : "30px",
    },
    image: {
      alignSelf: "flex-end",
    },
  };

  return (
    <div className="cardContainer" style={styles.container}>
      {!isTablet && <img src={iconImagePath} alt="" className="icon" style={styles.image} />}
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        <h2 className="cardTitle" style={styles.title}>
          {title}
        </h2>
        <p className="cardInfo">{message}</p>
      </div>
    </div>
  );
}
