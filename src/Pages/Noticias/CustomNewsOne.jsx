import useMediaQuery from "../../hooks/useMediaQuery";

import { Tabs } from "antd";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import CustomContentNewsOneSpanish from "../../Components/Content/news/CustomContentNewsOneSpanish";
import CustomContentNewsOneOriginal from "../../Components/Content/news/CustomContentNewsOneOriginal";

export default function Noticia() {
  const isDevice = useMediaQuery(768);

  const tabItems = [
    {
      key: "1",
      label: "Español",
      children: <CustomContentNewsOneSpanish />,
    },
    {
      key: "2",
      label: "Nota Original",
      children: <CustomContentNewsOneOriginal />,
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
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}
