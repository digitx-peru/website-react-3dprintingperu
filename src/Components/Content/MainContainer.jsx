import useBreakpoints from "../../hooks/useBreakpoints";

import typography from "../../Style/typography";
import globalStyle from "../../Style/globalStyle";

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
      ...(isMd && {}),
    },
    pageContent: {
      display: "flex",
      flex: "1 0 0",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "justify",
      ...(isMd && {}),
      ...(isLg && {
        marginBottom: globalStyle.verticalPadding.desktop,
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
