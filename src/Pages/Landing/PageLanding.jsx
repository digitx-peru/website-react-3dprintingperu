import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CustomContentLanding from "../../Content/Landing/ContentLanding";

export default function PageLanding() {
  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "Webinar: Joyería digital. Del diseño a la impresión lista para fundir",
    message: null,
    heroImage: "/images/hero/hero_img_news.jpg",
  };

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center",
    },
    applicationContent: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      justifyContent: "center",
      gap: 20,
      padding: isDevice ? "0 15px" : "100px 200px",
    },
  };

  return (
    <>
      <Header
        heroTitle={heroContent.title}
        heroMessage={heroContent.message}
        heroImage={heroContent.heroImage}
      />
      <div style={styles.mainContainer}>
        <div className={"applicationContent"} style={styles.applicationContent}>
          <CustomContentLanding />
        </div>
      </div>
      <Footer />
    </>
  );
}
