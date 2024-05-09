import { useParams } from "react-router-dom";

import { Tabs } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import CustomContentJewelryOverview from "../../Components/Content/industry/jewelry/CustomContentJewelryOverview";
import CustomContentJewelryLostWax from "../../Components/Content/industry/jewelry/CustomContentJewelryLostWax";
import CustomContentJewelryRubberMold from "../../Components/Content/industry/jewelry/CustomContentJewelryRubberMold";
import FloatButton from "../../Components/FloatButton";
import UsedTechnologyList from "../../Components/Content/usedPrinterCards/UsedTechnologyList";

import heroImgJewelry from "../../assets/heroImages/hero_img_jewelry.jpg";

export default function CustomJewelry() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "Libertad de diseño y mayor calidad",
    message: "Incrementa la productividad en la manufactura de joyería",
    heroImage: heroImgJewelry,
  };

  const tabItems = [
    {
      key: "1",
      label: "Introdución",
      children: <CustomContentJewelryOverview />,
    },
    {
      key: "2",
      label: "Cera perdida",
      children: <CustomContentJewelryLostWax />,
    },
    {
      key: "3",
      label: "Moldes de caucho",
      children: <CustomContentJewelryRubberMold />,
    },
  ];

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position:"absolute",
      zIndex:2,
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "rgb(239,251,246)",
      padding: "50px 0px 0px 0px" ,
      marginBottom:"50px",
      backgroundColor:"rgb(239,251,246)"
    },
    column: {
      paddingLeft: 100,
      paddingRight: 100,
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
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          <Tabs defaultActiveKey="1" items={tabItems} tabBarStyle={{ margin: isDevice ? "0 15px" : "0px 200px", borderBottom:"5px solid rgb(99,218,178)"}}/>
          {/* <UsedTechnologyList /> */}
        </section>
        <FloatButton/>
        <ContactUs/>
        <Footer />
      </div>
    </>
  );
}
