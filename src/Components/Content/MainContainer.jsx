import useMediaQuery from "../../hooks/useMediaQuery";

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
  const isMobile = useMediaQuery(480);
  const isTablet = useMediaQuery(768);
  const isDevice = useMediaQuery(1000);
  const isMedium = useMediaQuery(1320);

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
      textAlign: "justify",
      fontSize: isMedium ? "12px" : "16px",
      lineHeight: "1.5",
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
      {/* Content section*/}
      <section className={"pageContent"} style={styles.pageContent}>
        {children}
      </section>
      {/* Float Button */}
      {floatButton && !isTablet && <FloatButton preselectedApplications={floatContent} />}
      {/* Contact Us section */}
      <ContactSection />
    </main>
  );
}
