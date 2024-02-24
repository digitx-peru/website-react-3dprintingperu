import useMediaQuery from "../../hooks/useMediaQuery";

export default function PrinterCard({
  printerImageUrl,
  name,
  description,
  builVolume,
  technology,
}) {
  const isColumn = useMediaQuery(1024);

  const styles = {
    printerCardContent: {
      border: "1px solid silver",
      borderRadius: "8px",
      width: "300px",
    },
    printerCardImage: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      height: "300px",
      width: "300px",
      objectFit: "contain",
    },
    printerCardInfoContent: {
      padding: "10px",
    },
    printerName: {
      fontSize: "24px",
      margin: "10px 0px",
    },
    printCardDescription: {
      fontSize: isColumn ? "14px" : "16px",
      minHeight: isColumn ? "75px" : "100px",
    },
    printerVolumeAndTechnologyWrapper: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      gap: "20px",
    },
    printCardBodyText: {
      fontSize: isColumn ? "14px" : "16px",
    },
  };
  return (
    <div style={styles.printerCardContent}>
      <img
        src={printerImageUrl}
        alt={name + " 3d printer"}
        style={styles.printerCardImage}
      />
      <div style={styles.printerCardInfoContent}>
        <h4 style={styles.printerName}>{name}</h4>
        <p style={styles.printCardDescription}>{description}</p>
        <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
          <div style={styles.printerVolumeAndTechnologyWrapper}>
            <div>
              <h4>Volumen XYZ ({builVolume.unit})</h4>
              <p style={styles.printCardBodyText}>
                {builVolume.x} x {builVolume.y} x {builVolume.z}
              </p>
            </div>
            <div>
              <h4>Tecnología</h4>
              <p style={styles.printCardBodyText}>{technology}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
