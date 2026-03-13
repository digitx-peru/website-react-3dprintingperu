import { useParams } from "react-router-dom";

import { Tabs } from 'antd';

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs";
import CustomContentSoftware from "../../Components/Content/software/CustomContentSoftware";
import FloatButton from "../../Components/FloatButton"
// import UsedTechnologyList from "../../Components/ApplicationScreens/UsedTechnologyList";

import heroImgMedDevices from "../../assets/heroImages/hero_img_med_devices.jpg";
import CustomContentPolyurethane from "../../Components/Content/applications/CustomContentPolyurethane";

export default function CustomPolyurethane() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);
  const is1440 = useMediaQuery(1440);

  const heroContent = {
    title: "Producción de piezas basados en poliuretano",
    message: "Plásticos de uso final para la industria",
    heroImage: "/images/background_artisan.jpeg",
  };

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "0px"
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100vw",
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
          <CustomContentPolyurethane />
        </section>
        <FloatButton preselectedApplications={["Dispositivos medicos"]} />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
