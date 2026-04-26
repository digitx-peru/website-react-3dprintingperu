export default function PageContent({ iconImage, title, message }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      height: "400px",
      backgroundColor: "#D9D9D8",
      padding: "15px",
      boxSizing: "border-box",
    },
    image: {
      alignSelf: "flex-end",
      marginBottom: "15px",
    },
    title: {
      marginBottom: "10px",
    },
  };

  return (
    <div className="cardContainer" style={styles.container}>
      <img
        src="\images\infocard\info_card_icon_concept.png"
        alt=""
        className="icon"
        style={styles.image}
      />
      <h2 className="cardTitle" style={styles.title}>
        {title}
      </h2>
      <p className="cardInfo">{message}</p>
    </div>
  );
}
