import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ApplicationContent from "../../Components/ApplicationScreens/ApplicationContent";

export default function Noticia() {
  const isDevice = useMediaQuery(768);

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
      padding: isDevice ? "0 15px" : "0 100px"
    },
  };

  return (
    <>
      <Header />
      <div style={styles.mainContainer}>
        <Hero
          backgroundUrl={"https://picsum.photos/3000/600"}
          title="Hero title"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className={"applicationContent"} style={styles.applicationContent}>
          <ApplicationContent  />
        </div>
      </div>
      <Footer />
    </>
  );
}
