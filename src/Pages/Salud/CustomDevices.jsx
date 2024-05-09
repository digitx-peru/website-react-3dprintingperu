import { useParams } from "react-router-dom";

import { Tabs } from 'antd';

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import CustomContentMedDevicesImplants from "../../Components/Content/health/CustomContentMedDevicesImplants";
import CustomContentMedDevicesProsthesis from "../../Components/Content/health/CustomContentMedDevicesProsthesis"
// import UsedTechnologyList from "../../Components/ApplicationScreens/UsedTechnologyList";

import heroImgMedDevices from "../../assets/heroImages/hero_img_med_devices.jpg";

export default function CustomDevices() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);
  const is1440 = useMediaQuery(1440);

  const heroContent = {
    title: "Cada paciente un caso diferente",
    message: "La Impresion 3D es la forma de atender las necesidades especificas de cada uno",
    heroImage: heroImgMedDevices,
  };

  const tabItems = [
    {
      key: '1',
      label: 'Prótesis',
      children: <CustomContentMedDevicesProsthesis />
    },
    {
      key: '2',
      label: 'Implantes',
      children: <CustomContentMedDevicesImplants />
    },
  ];

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position:"absolute",
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "50px 0px",
      width:"100vw",
      backgroundColor:"rgb(239,251,246)"
      // padding: is1440 ? "0 50px" : isDevice ? "0 15px" : "0 400px",
      //padding: isDevice ? "0 15px" : is1440 ? "0 100px" : "0 300px",
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
          <Tabs defaultActiveKey="1" items={tabItems} tabBarStyle={{ margin: isDevice ? "0 15px" : "0px 200px", borderBottom:"5px solid rgb(99,218,178)"}} />
          {/* <UsedTechnologyList /> */}
        </section>
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
