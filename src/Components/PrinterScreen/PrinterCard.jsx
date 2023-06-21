export default function PrinterCard({ name, description, software, price }) {
  return (
    <div style={styles.printerCardContent}>
      <img
        src="https://picsum.photos/300/150"
        alt=""
        style={styles.printerCardImage}
      />
      <div style={styles.printerCardInfoContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
          <div>
            <h3>Software</h3>
            <p>{software}</p>
          </div>
          <div>
            <h3>Precio Ref</h3>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  printerCardContent: {
    border: "1px solid #EEEEEE",
    borderRadius: 8,
    width: 400,
  },
  printerCardImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
  },
  printerCardInfoContent: {
    padding: 25,
  },
};
