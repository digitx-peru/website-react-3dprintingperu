import useMediaQuery from "../../hooks/useMediaQuery";

import { Tabs } from "antd";

import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer/Footer";

import CustomContentNewsOneSpanish from "../../Components/Content/news/CustomContentNewsOneSpanish";
import CustomContentNewsOneOriginal from "../../Components/Content/news/CustomContentNewsOneOriginal";

import heroImgFoundry from "../../assets/heroImages/hero_img_foundry.jpg";

export default function Noticia() {
  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "El Hospital de la Universidad de Salzburgo realiza una cirugía innovadora usando avanzada tecnologia ortopedica",
    message: null,
    heroImage: heroImgFoundry,
  }

  const tabItems = [
    {
      key: "1",
      label: "Español",
      children: <CustomContentNewsOneSpanish />,
    },
    {
      key: "2",
      label: "Nota Original",
      children: <CustomContentNewsOneOriginal />,
    },
  ];

  const styles = {
    //Main container style rules how the hero's image behaves
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position:"absolute",
      zIndex:2,
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
      <Header />
      <div style={styles.mainContainer}>
        <Hero
            title={heroContent.title}
            message={heroContent.message}
            imageSrc={heroContent.heroImage}
          />
        <div className={"applicationContent"} style={styles.applicationContent}>
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}
