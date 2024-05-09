import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NewsCard from "../Components/HomeScreen/NewsCard";
import Hero from "../Components/Hero";
import ContactUs from "../Components/ContactUs";
import useMediaQuery from "../hooks/useMediaQuery";

import HeroImageHome from "../assets/heroImages/hero_img_home.jpg"

import newsOneThumbnail from "../assets/newsImages/newsOne/news_image_thumbail_3dprint_organs.jpeg"
import newsTwoThumbnail from "../assets/newsImages/newsTwo/news_image_thumbnail_new_sls_300.png"
import newsThreeThumbnail from "../assets/newsImages/newsThree/news_image_new_ext_1270_titan_pellet.png"

import FloatButton from "../Components/FloatButton";

export default function Home() {
  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  const heroContent = {
    title: "Desafia los limites con la Impresion 3D Industrial",
    message: null,
    heroImage: HeroImageHome,
  };

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center",
      position:"absolute",
      zIndex:2,
      width:"100%"
    },
    newsCardContainer: {
      display: "flex",
      flexDirection: isColumnLayoutWidth ? "column" : "row",
      gap: 15,
      justifyContent: "space-between",
      padding: 15,
    },
  };

  return (
    <>
      <Header />
      <div className="mainContainer" style={styles.mainContainer}>
        <Hero
          title={heroContent.title}
          message={heroContent.message}
          imageSrc={heroContent.heroImage}
        />
        <div style={styles.newsCardContainer}>
          <NewsCard
            redirectUrl="/noticias/universidad-salsburgo-realiza-cirugia"
            title="La universidad de Salsburgo realiza sorprendente cirugía"
            // message="Lorem ipsum"
            image={newsOneThumbnail}
          />
          <NewsCard
            redirectUrl="/noticias/la-nueva-sls-300"
            title="La nueva SLS 300"
            image={newsTwoThumbnail}
            // message="Lorem ipsum"
          />
          <NewsCard
            redirectUrl="/noticias/la-nueva-ext-1270"
            title="La nueva EXT 1270"
            image={newsThreeThumbnail}
            // message="Lorem ipsum"
          />
        </div>
        <FloatButton />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
