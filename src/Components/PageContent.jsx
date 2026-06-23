// import useMediaQuery from "../../hooks/useMediaQuery";

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
  floatButton = true,
  floatContent,
}) {
  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  return (
    <>
      <Header backgroundImage={backgroundImage} />
      <MainContainer
        heroTitle={heroTitle}
        heroMessage={heroMessage}
        backgroundImage={backgroundImage}
        children={children}
        floatButton={floatButton}
        floatContent={floatContent}
      />
      <Footer />
    </>
  );
}
