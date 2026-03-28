import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CustomContentNewsTwo from "../../Components/Content/politics/privacy";

import heroImgFoundry from "../../assets/heroImages/hero_img_foundry.jpg";

export default function Noticia() {
  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "Política de privacidad",
    message: "",
    heroImage: heroImgFoundry,
  }

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
      padding: isDevice ? "0 15px" : "100px 400px",
    },
  };

  return (
    <>
      <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage}/>
      <div style={styles.mainContainer}>
        <div className={"applicationContent"} style={styles.applicationContent}>
          <CustomContentNewsTwo />
        </div>
      </div>
      <Footer />
    </>
  );
}
