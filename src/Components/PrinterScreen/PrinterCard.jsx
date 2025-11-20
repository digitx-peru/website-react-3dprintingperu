import { useState, useRef, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Button, Tooltip } from "antd";

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
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: "10px",
      borderTop: "4px solid rgb(99,218,178)",
    },
    printerName: {
      fontSize: "24px",
      margin: "10px 0px",
    },
     printCardDescription: {
      fontSize: isColumn ? "14px" : "16px",

      // How many lines control
      minHeight: isColumn ? "75px" : "80px",
      maxHeight: "80px",

      overflow: "hidden",
      color: "rgb(71,167,153)"
    },
    printerVolumeAndTechnologyWrapper: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      gap: "20px",
    },
    printCardBodyText: {
      fontSize: isColumn ? "14px" : "16px",
      color: "rgb(71,167,153)"
    },
  };
  return (
    <div style={styles.printerCardContent}>
      {/*Printer thumbnail*/}
      <img
        src={printerImageUrl}
        alt={name + " 3d printer"}
        style={styles.printerCardImage}
      />
      <div style={styles.printerCardInfoContent}>
        {/*Printer name*/}
        <h4 style={styles.printerName}>{name}</h4>

        <div>
          <p style={styles.printCardDescription}>{description}</p>
        </div>

        {/*Volume and technology section */}
        <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
          <div className="printercard_volume_tech_wrapper" style={styles.printerVolumeAndTechnologyWrapper}>
            <div className="printercard_volume">
              <h4 style={{ color: "rgb(71,167,153)" }}>Volumen XYZ ({builVolume.unit})</h4>
              <p style={styles.printCardBodyText}>
                {builVolume.x} x {builVolume.y} x {builVolume.z}
              </p>
            </div>
            <div className="printercard_tech">
              <h4 style={{ color: "rgb(71,167,153)" }}>Tecnología</h4>
              <p style={styles.printCardBodyText}>{technology}</p>
            </div>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button style={{
            backgroundColor: "#0A4F4F",
            borderColor: "#0A4F4F",
            width: "120px"
          }} type="primary">Me interesa</Button>

        </div>



      </div>
    </div>
  );
}
