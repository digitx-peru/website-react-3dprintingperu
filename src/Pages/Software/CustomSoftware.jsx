import { useParams } from "react-router-dom";

import { Tabs } from 'antd';

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs";
import CustomContentSoftware from "../../Components/Content/software/CustomContentSoftware";
import CustomContentMedDevicesProsthesis from "../../Components/Content/health/CustomContentMedDevicesProsthesis"
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
    heroImage: heroImgMedDevices,
  };

  // const tabItems = [
  //   {
  //     key: '1',
  //     label: 'Prótesis',
  //     children: <CustomContentSoftware />
  //   },
  //   {
  //     key: '2',
  //     label: 'Implantes',
  //     children: <CustomContentSoftware />
  //   },
  // ];

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
      // padding: "25px 0px",
      width: "100vw",
      // backgroundColor: "rgb(239,251,246)"
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
      <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage} />
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
