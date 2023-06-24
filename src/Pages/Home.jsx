import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import NewsCard from "../Components/NewsCard";
import Hero from "../Components/Hero";
import ContactUs from "../Components/ContactUs";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const isDevice = useMediaQuery(768);

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center",
    },
    newsCardContainer: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      gap: 15,
      justifyContent: "space-between",
      padding: 30,
    },
  };

  return (
    <>
      <Header />
      <div className="mainContainer" style={styles.mainContainer}>
        <Hero
          backgroundUrl={"https://picsum.photos/3000/600"}
          title="Hero header"
          message="Lorem ipsum"
        />
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
