import { useParams } from "react-router-dom";

import { Tabs } from 'antd';

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import CustomContentFoundryOverview from "../../Components/Content/industry/foundry/CustomContentFoundryOverview";
import CustomContentFoundrySandCasting from "../../Components/Content/industry/foundry/CustomContentFoundrySandCasting";
import CustomContentFoundryLostWax from "../../Components/Content/industry/foundry/CustomContentFoundryLostWax";
import UsedTechnologyList from "../../Components/Content/usedPrinterCards/UsedTechnologyList";
import FloatButton from "../../Components/FloatButton";
import heroImgFoundry from "../../assets/heroImages/hero_img_foundry.jpg";

export default function CustomFoundry() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "Reduce costos y tiempos de entrega",
    message: "Incrementa tu capacidad de producir piezas mas complejas",
    heroImage: heroImgFoundry,
  }

  const tabItems = [
    {
      key: '1',
      label: 'Introdución',
      children: <CustomContentFoundryOverview />
    },
    {
      key: '2',
      label: 'Moldes de arena',
      children: <CustomContentFoundrySandCasting />
    },
    {
      key: '3',
      label: 'Cera perdida',
      children: <CustomContentFoundryLostWax />
    },
  ];

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // position:"absolute",
      // zIndex:2,
      maxWidth: "100vw"
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "50px 0px 0px 0px",
      marginBottom: "50px",
      maxWidth: "100vw",
      position: "relative !important",
      backgroundColor: "rgb(239,251,246)"
    },
    column: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  };

  return (
    <>
      <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage} />
      <div style={styles.mainContainer}>
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          <FloatButton preselectedApplications={["Fundicion"]}/>
          <Tabs defaultActiveKey="1" items={tabItems} tabBarStyle={{ margin: isDevice ? "0 15px" : "0px 200px", borderBottom: "5px solid rgb(99,218,178)" }} />


          {/* <UsedTechnologyList /> */}
        </section>
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
