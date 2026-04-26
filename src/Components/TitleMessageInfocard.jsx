export default function TitleMessageInfocard({
  children,
  title,
  message,
  sectionName,
}) {
  return (
    <section
      className={sectionName}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        padding: "0px 200px",
        margin: "40px 0",
      }}
    >
      <h2 className="title" style={{ marginBottom: "20px" }}>
        {title}
      </h2>
      <p className="message" style={{ marginBottom: "20px" }}>{message}</p>
      <div
        className="IconInfoCardContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {children}
      </div>
    </section>
  );
}
