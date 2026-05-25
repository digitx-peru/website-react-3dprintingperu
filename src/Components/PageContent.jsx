// import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs";
import FloatButton from "./FloatButton";
import MainContainer from "./MainContainer";

export default function PageContent({
  children,
  heroTitle,
  heroMessage,
  heroImage,
  floatButton = true,
  floatContent,
}) {
  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  const heroContent = {
    title: heroTitle,
    message: heroMessage,
    heroImage: `/images/${heroImage}`,
  };

  return (
    <>
      <Header
        heroTitle={heroContent.title}
        heroMessage={heroContent.message}
        heroImage={heroContent.heroImage}
      />
      <MainContainer
        children={children}
        floatButton={floatButton}
        floatContent={floatContent}
      />
      <Footer />
    </>
  );
}
