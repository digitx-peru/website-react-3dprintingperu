import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NewsCard from "../Components/HomeScreen/NewsCard";
import Hero from "../Components/Hero";
import ContactUs from "../Components/ContactUs";
import useMediaQuery from "../hooks/useMediaQuery";

import HeroImageHome from "../assets/heroImages/hero_img_home.jpg"

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
            redirectUrl="/noticias/one"
            title="Newscard title"
            message="Lorem ipsum"
          />
          <NewsCard
            redirectUrl="/noticias/two"
            title="Newscard title 2"
            message="Lorem ipsum"
          />
          <NewsCard
            redirectUrl="/noticias/one"
            title="Newscard title 3"
            message="Lorem ipsum"
          />
        </div>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
