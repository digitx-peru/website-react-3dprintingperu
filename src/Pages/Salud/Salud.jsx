import { useParams } from "react-router-dom";

import { Col, Row } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs";
import CustomContentMedDevices from "../../Components/ApplicationScreens/CustomContentMedDevices";
import UsedTechnologyList from "../../Components/ApplicationScreens/UsedTechnologyList";

export default function Salud() {
  const routerParams = useParams();

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
      padding: isDevice ? "0 15px" : "0 100px",
    },
    column: {
      paddingLeft: 100,
      paddingRight: 100
    }
  };

  return (
    <>
      {/* <Header heroTitle={heroContent.title} heroMessage={heroContent.message} heroImage={heroContent.heroImage}/>
      <div style={styles.mainContainer}>
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          {isDevice ? (
            <>
              <CustomContentMedDevices />
              <UsedTechnologyList />
            </>
          ) : (
            <Row>
              <Col
                span={20}
                justify={"end"}
                align={"middle"}
                style={styles.column}
              >
              <CustomContentMedDevices />
              </Col>
              <Col span={4}>
                <UsedTechnologyList />
              </Col>
            </Row>
          )}
        </section>
        <ContactUs />
      </div>
      <Footer /> */}
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
