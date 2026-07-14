import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";
import FloatButton from "./FloatButton/FloatButton";
import MainContainer from "./Content/MainContainer";

export default function PageContent({
  children,
  heroTitle,
  heroMessage,
  backgroundImage,
  heroEnabled = true,
  floatButtonEnabled = true,
  floatContent,
  contactFormEnabled = true,
}) {
  return (
    <>
      <Header backgroundImage={backgroundImage} />
      <MainContainer
        heroTitle={heroTitle}
        heroMessage={heroMessage}
        backgroundImage={backgroundImage}
        children={children}
        heroEnabled={heroEnabled}
        floatButtonEnabled={floatButtonEnabled}
        floatContent={floatContent}
        contactFormEnabled={contactFormEnabled}
      />
      <Footer />
    </>
  );
}
