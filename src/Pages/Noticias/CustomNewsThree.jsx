import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CustomContentNewsThree from "../../Components/Content/news/CustomContentNewsThree";

export default function Noticia() {
  const isDevice = useMediaQuery(768);


  const styles = {
    //Main container style rules how the hero's image behaves
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position:"absolute",
      zIndex:2,
      maxWidth:"100vw"
    },
    applicationContent: {
      display: "flex",
      flexDirection: isDevice ? "column" : "row",
      justifyContent: "center",
      gap: 20,
      padding: isDevice ? "0 15px" : "100px 400px",
    },
  };

  return (
    <>
      <Header />
      <div style={styles.mainContainer}>
        <div className={"applicationContent"} style={styles.applicationContent}>
          <CustomContentNewsThree />
        </div>
      </div>
      <Footer />
    </>
  );
}
