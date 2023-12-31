import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CustomContentNewsThree from "../../Components/Content/news/CustomContentNewsThree";

export default function Noticia() {
  const isDevice = useMediaQuery(768);


  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center",
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
