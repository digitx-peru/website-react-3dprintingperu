import { useParams } from "react-router-dom";

import { Col, Row } from "antd";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import ApplicationContent from "../../Components/ApplicationScreens/ApplicationContent";

import useMediaQuery from "../../hooks/useMediaQuery";
import UsedTechnologyList from "../../Components/ApplicationScreens/UsedTechnologyList";

import { getIndustryContentFromDB } from "../../utils/dataHandler";
import { getHeroContentFromDB } from "../../utils/dataHandler";

export default function Industria() {
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
      {/* <Header /> */}
      {/* <main style={styles.mainContainer}>
      <Hero content={getHeroContentFromDB("industria")} />
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          {isDevice ? (
            <>
              <ApplicationContent
                typeContent={getIndustryContentFromDB(
                  routerParams.industryType
                )}
              />
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
                <ApplicationContent
                  typeContent={getIndustryContentFromDB(
                    routerParams.industryType
                  )}
                />
              </Col>
              <Col span={4}>
                <UsedTechnologyList />
              </Col>
            </Row>
          )}
        </section>
        <ContactUs />
      </main>
      <Footer /> */}
    </>
  );
}
