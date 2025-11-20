import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer/Footer";

import CustomContentNewsTwo from "../../Components/Content/news/CustomContentNewsTwo";

import heroImgNews from "../../assets/heroImages/hero_img_news.jpg";

export default function Noticia() {
  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "La nueva SLS 300",
    message: null,
    heroImage: heroImgNews,
  }

  const styles = {
    //Main container style rules how the hero's image behaves
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // position:"absolute",
      // zIndex:2,
      maxWidth:"100vw"
    },
    applicationContent: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      justifyContent: "center",
      gap: 20,
      padding: isDevice ? "0 15px" : "100px 400px",
    },
  };

  return (
    <>
      <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage}/>
      <div style={styles.mainContainer}>
        {/* <Hero
              title={heroContent.title}
              message={heroContent.message}
              imageSrc={heroContent.heroImage}
            /> */}
        <div className={"applicationContent"} style={styles.applicationContent}>
          <CustomContentNewsTwo />
        </div>
      </div>
      <Footer />
    </>
  );
}
