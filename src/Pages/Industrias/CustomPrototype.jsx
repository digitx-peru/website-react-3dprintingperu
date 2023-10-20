import { useParams } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import CustomContentPrototypes from "../../Components/Content/industry/prototyping/CustomContentPrototypes";
import UsedTechnologyList from "../../Components/Content/usedPrinterCards/UsedTechnologyList";

import heroImgPrototype from "../../assets/heroImages/hero_img_replicates.jpg";

export default function CustomPrototype() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);

  const heroContent = {
    title: "Desafia los limites con la Impresion 3D Industrial",
    message: null,
    heroImage: heroImgPrototype,
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
          <CustomContentPrototypes />
          {/* <UsedTechnologyList /> */}
        </section>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
