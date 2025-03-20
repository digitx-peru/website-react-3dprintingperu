import { useParams } from "react-router-dom";

import { Tabs } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import CustomContentPrototypesOverview from "../../Components/Content/industry/prototyping/CustomContentPrototypesOverview";
import CustomContentPrototypesPrototyping from "../../Components/Content/industry/prototyping/CustomContentPrototypesPrototyping";
import CustomContentPrototypesArt from "../../Components/Content/industry/prototyping/CustomContentPrototypesArt";
import UsedTechnologyList from "../../Components/Content/usedPrinterCards/UsedTechnologyList";
import FloatButton from "../../Components/FloatButton";
import heroImgPrototype from "../../assets/heroImages/hero_img_replicates.jpg";

export default function CustomPrototype() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "Sin limites de formas y colores",
    message: null,
    heroImage: heroImgPrototype,
  }

  const tabItems = [
    {
      key: "1",
      label: "Introdución",
      children: <CustomContentPrototypesOverview />,
    },
    {
      key: "2",
      label: "Prototipado",
      children: <CustomContentPrototypesPrototyping />,
    },
    {
      key: "3",
      label: "Arte",
      children: <CustomContentPrototypesArt />,
    },
  ];

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center",
      // position:"absolute",
      maxWidth: "100vw"
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 50,
      padding: isDevice ? "0 15px" : "0 0px",
      backgroundColor:"rgb(239,251,246)"
    },
    column: {
      paddingLeft: 100,
      paddingRight: 100,
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
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          <Tabs defaultActiveKey="1" items={tabItems} tabBarStyle={{ margin: isDevice ? "0 15px" : "0px 200px", borderBottom:"5px solid rgb(99,218,178)",boxSizing: "border-box"}}/>
          {/* <UsedTechnologyList /> */}
        </section>
        <FloatButton />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
