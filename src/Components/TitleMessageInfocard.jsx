export default function TitleMessageInfocard({
  children,
  title,
  message,
  sectionName,
}) {

  return (
    <section className={sectionName} style={{display: "flex", flexDirection: "column", alignItems: "stretch", padding: "0px 200px"}}>
      <h2 className="title">{title}</h2>
      <p className="message">{message}</p>
      <div className="IconInfoCardContainer" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>{children}</div>
    </section>
  );
}
