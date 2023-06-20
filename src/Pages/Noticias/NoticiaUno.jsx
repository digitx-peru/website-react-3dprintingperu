import { Col, Row, Card } from "antd";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import ApplicationContent from "../../Components/ApplicationContent";

export default function Automotriz() {
  return (
    <>
      <Header />
      <div style={styles.mainContainer}>
        <Hero
          backgroundUrl={"https://picsum.photos/3000/600"}
          title="Hero title"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className={"applicationContent"} style={styles.applicationContent}>
          <ApplicationContent width='60%'/>
        </div>
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
};
