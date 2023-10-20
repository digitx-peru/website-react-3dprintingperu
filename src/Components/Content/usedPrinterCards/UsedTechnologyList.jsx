import UsedPrinterCard from "./UsedPrinterCard";

export default function UsedTechnologyList() {
  const styles = {
    technologyCardContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 25,
    },
  };

  return (
    <div
      className="technologyCardContainer"
      style={styles.technologyCardContainer}
    >
      <h4 style={{ margin: 0 }}>Technology used:</h4>
      <UsedPrinterCard />
      <UsedPrinterCard />
    </div>
  );
}
