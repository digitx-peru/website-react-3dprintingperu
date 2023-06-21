import { Col, Row, Card } from "antd";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import ContactUs from "../../Components/ContactUs";
import ApplicationContent from "../../Components/ApplicationContent";
import UsedTechnologyCard from "../../Components/UsedTechnologyCard";

export default function Medicina() {
  return (
    <>
      <Header />
      <div style={styles.mainContainer}>
        <Hero backgroundUrl={"https://picsum.photos/3000/600"} />
        <div className={"applicationContent"} style={styles.applicationContent}>
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
              <Card>
                <div
                  className="technologyCardContainer"
                  style={styles.technologyCardContainer}
                >
                  <h4 style={{ margin: 0 }}>Technology used:</h4>
                  <UsedTechnologyCard />
                  <UsedTechnologyCard />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
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
