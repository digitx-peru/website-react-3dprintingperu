import useMediaQuery from "../../hooks/useMediaQuery";

export default function PrinterCard({ name, description, software, price }) {
  
  
  const isDevice = useMediaQuery(768);

  const isColumn = useMediaQuery(1024)

  const styles = {
    printerCardContent: {
      border: "1px solid silver",
      borderRadius: 8,
      width: isColumn ? "100%" : "300px",
    },
    printerCardImage: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      width: "100%",
    },
    printerCardInfoContent: {
      padding: "10px",
    },
    printCardDescription: {
      fontSize: isColumn ? "14px" : "16px",
      minHeight: isColumn ? "75px" : "100px"
    },
    printCardBodyText: {
      fontSize: isColumn ? "14px" : "16px",
    }
  };
  return (
    <div style={styles.printerCardContent}>
      <img
        src="https://picsum.photos/300/150"
        alt=""
        style={styles.printerCardImage}
      />
      <div style={styles.printerCardInfoContent}>
        <h4>{name}</h4>
        <p style={styles.printCardDescription}>{description}</p>
        <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
          <div>
            <h4>Volume XYZ (mm)</h4>
            <p style={styles.printCardBodyText}>100x100x100</p>
          </div>
          <div>
            <h4>Precio Ref</h4>
            <p style={styles.printCardBodyText}>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
