export default function PageContent({
  iconImagePath = "/images/infocard/info_card_icon_concept.png",
  title,
  message,
  backgroundColor,
}) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      height: "400px",
      backgroundColor: backgroundColor,
      padding: "15px",
      boxSizing: "border-box",
      borderRadius: "10px",
      gap: "30px"
    },
    image: {
      alignSelf: "flex-end",
    },
    // title: {
    //   textAlign: "center",
    //   marginBottom: "20px",
    // },
  };

  return (
    <div className="cardContainer" style={styles.container}>
      <img src={iconImagePath} alt="" className="icon" style={styles.image} />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "20px"
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
