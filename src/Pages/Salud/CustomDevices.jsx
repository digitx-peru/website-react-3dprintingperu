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

  const heroContent = {
    title: "Desafia los limites con la Impresion 3D Industrial",
    message: null,
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

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
    alignItems: "center",
  },
  applicationContent: {
    display: "flex",
    justifyContent: "center",
    columnGap: 100,
    paddingLeft: 100,
    paddingRight: 100,
  },
  technologyCardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
};
