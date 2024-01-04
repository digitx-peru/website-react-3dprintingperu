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
      gap: 50,
      alignItems: "center",
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 50,
      padding: isDevice ? "0 15px" : "0 400px",
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
          <Tabs defaultActiveKey="1" items={tabItems} />
          {/* <UsedTechnologyList /> */}
        </section>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
