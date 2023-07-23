import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NewsCard from "../Components/HomeScreen/NewsCard";
import Hero from "../Components/Hero";
import ContactUs from "../Components/ContactUs";
import useMediaQuery from "../hooks/useMediaQuery";

import { smallScreenSize, mediumScreenSize } from "../style/screenSizes";

import { getHeroContentFromDB } from "../utils/dataHandler";

export default function Home() {
  //Screenwidth breakpoints
  const isSmallScreenSize = useMediaQuery(smallScreenSize);
  const isMediumScreenSize = useMediaQuery(mediumScreenSize);

  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  //Puntos de quiebre para mostrar 3 y 4 impresoras en el grid
  const is1280 = useMediaQuery(1280);
  const is1580 = useMediaQuery(1580);

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
        <Hero content={getHeroContentFromDB("home")} />
        <div style={styles.newsCardContainer}>
          <NewsCard
            redirectUrl="/noticias/noticiaUno"
            title="Newscard title"
            message="Lorem ipsum"
          />
          <NewsCard
            redirectUrl="/noticias/noticiaUno"
            title="Newscard title 2"
            message="Lorem ipsum"
          />
        </div>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
