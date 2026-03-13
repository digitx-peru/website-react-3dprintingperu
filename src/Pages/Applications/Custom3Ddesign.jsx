import { useParams } from "react-router-dom";

import { Tabs } from 'antd';

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs";
import FloatButton from "../../Components/FloatButton"

import CustomContent3Ddesign from "../../Components/Content/applications/CustomContent3Ddesign";

export default function Custom3Ddesign() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);
  const is1440 = useMediaQuery(1440);

  const heroContent = {
    title: "El primer paso para la fabricación digital",
    message: "",
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
      <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage}/>
      <div style={styles.mainContainer}>
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          <CustomContent3Ddesign />
        </section>
        <FloatButton preselectedApplications={["Dispositivos medicos"]} />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
