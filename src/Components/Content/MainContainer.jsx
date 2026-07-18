import useBreakpoints from "../../hooks/useBreakpoints";

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
  floatButtonEnabled = true,
  floatContent,
  contactFormEnabled = true,
}) {
  const { isMd, isLg } = useBreakpoints();
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      textAlign: "justify",
      fontSize: "12px",
      lineHeight: "1.5",
      // paddingBottom: "20px",
      ...(isMd && {
        paddingBottom: "50px",
      }),
    },
    pageContent: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "justify",
      fontSize: "12px",
      lineHeight: "1.5",
      ...(isMd && {
        fontSize: "16px",
        marginBottom: "50px",
      }),
    },
  };

  return (
    <main style={styles.mainContainer}>
      {/* Hero section*/}
      {heroEnabled && (
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
      {floatButtonEnabled && isMd && (
        <FloatButton preselectedApplications={floatContent} />
      )}
      {/* Contact Us section */}
      {contactFormEnabled && <ContactSection />}
    </main>
  );
}
