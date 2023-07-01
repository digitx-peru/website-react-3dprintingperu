import { Col, Row } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import ApplicationContent from "../../Components/ApplicationContent";
import UsedTechnologyList from "../../Components/ApplicationScreens/UsedTechnologyList";

export default function Odontologia() {
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
  };
  return (
    <>
      <Header />
      <div style={styles.mainContainer}>
        <Hero backgroundUrl={"https://picsum.photos/3000/600"} />
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          {isDevice ? (
            <>
              <ApplicationContent />
              <UsedTechnologyList />
            </>
          ) : (
            <Row>
              <Col
                span={20}
                justify={"end"}
                align={"middle"}
                style={{ paddingLeft: 100, paddingRight: 100 }}
              >
                <ApplicationContent />
              </Col>
              <Col span={4}>
                <UsedTechnologyList />
              </Col>
            </Row>
          )}
        </section>
        <ContactUs />
      </div>
      <Footer />
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
