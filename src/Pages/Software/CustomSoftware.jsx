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

export default function CustomSoftware() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);
  const is1440 = useMediaQuery(1440);

  const heroContent = {
    title: "RhinoArtisan",
    message: "Herramientas avanzadas para diseño de joyeria en 3D, por los creadores de RhinoGold",
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
      <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage} heroImgTitleEnabled={true} heroImgTitle={"/images/logo_artisan.jpeg"}/>
      <div style={styles.mainContainer}>
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          <div style={{ backgroundColor: "#E3BF7B", position: "sticky", top: 0, padding: "0px 200px"}}>
            <ul style={{
              display: "flex",
              flexDirection: "row",
              columnGap: 50,
              padding: "0px 0px"
            }}>
              <li style={{listStyle: 'none'}}>Diseñadores</li>
              <li style={{listStyle: 'none'}}>Manufactura</li>
              <li style={{listStyle: 'none'}}>Tiendas</li>
            </ul>
          </div>
          <CustomContentSoftware />
        </section>
        <FloatButton preselectedApplications={["Dispositivos medicos"]} />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
