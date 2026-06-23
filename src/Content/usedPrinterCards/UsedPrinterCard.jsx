import { Link } from "react-router-dom";

export default function UsedPrinterCard() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px",
      border: "1px solid silver",
      borderRadius: "8px",
      rowGap: 10,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      columnGap: 20,
    },
    imageWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    infoWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    priceWrapper: {},
  };

  return (
    <Link to="/">
      <div style={styles.container}>
        <div className={"content"} style={styles.content}>
          <div className={"imageWrapper"} style={styles.imageWrapper}>
            <img src="https://picsum.photos/100/100" alt="" />
            <p>Atlas-H</p>
          </div>
          <div className={"infoWrapper"} style={styles.infoWrapper}>
            <p style={{ fontWeight: "bold" }}>Titan</p>
            <p>FDM</p>
            <div style={styles.priceWrapper}>
              <p>Price range:</p>
              <p>$150k</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
