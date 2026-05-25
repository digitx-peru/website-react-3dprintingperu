import ContactUs from "./ContactUs";
import FloatButton from "./FloatButton";

export default function MainContainer({
  children,
  floatButton = true,
  floatContent,
}) {
  const styles = {
    pageMainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "justify",
      paddingTop: "50px",
      paddingBottom: "50px",
      fontSize: "12px",
      lineHeight: "1.5",
    },
    pageContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: "50px",
      width: "100vw",
    },
  };

  return (
    <main style={styles.pageMainContainer}>
      <section className={"pageContent"} style={styles.pageContent}>
        {children}
      </section>
      {floatButton && <FloatButton preselectedApplications={floatContent} />}
      <section className="contactUs">
        <ContactUs />
      </section>
    </main>
  );
}
