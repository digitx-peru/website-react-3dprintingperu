export default function HeaderHeroOverlay() {
  const styles = {
    backgroundImageOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: "0.7",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div
      className="backgroundOverlay"
      style={styles.backgroundImageOverlay}
    ></div>
  );
}
