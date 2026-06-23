import ContactSection from "../ContactUs/ContactSection";
import FloatButton from "../FloatButton/FloatButton";
import Hero from "../Hero/Hero";

export default function MainContainer({
  children,
  heroEnabled = true,
  heroTitle,
  heroMessage,
  backgroundImage,
  heroImgTitleEnabled = false,
  heroImgTitle = null,
  floatButton = true,
  floatContent,
}) {
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      textAlign: "justify",
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
    <main style={styles.mainContainer}>
      {/* Hero section*/}
      {heroEnabled === true && (
        <Hero
          title={heroTitle}
          message={heroMessage}
          imgTitleEnabled={heroImgTitleEnabled}
          imgTitle={heroImgTitle}
          backgroundImage={backgroundImage}
        />
      )}
      {/* Content sectio*/}
      <section className={"pageContent"} style={styles.pageContent}>
        {children}
      </section>
      {/* Float Button */}
      {floatButton && <FloatButton preselectedApplications={floatContent} />}
      {/* Contact Us section */}
      <ContactSection />
    </main>
  );
}
