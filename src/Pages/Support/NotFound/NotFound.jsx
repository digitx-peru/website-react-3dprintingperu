import { useParams } from "react-router-dom";

import useMediaQuery from "../../../hooks/useMediaQuery";

import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

export default function NotFound() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);
  const is1440 = useMediaQuery(1440);

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "0px",
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100vw",
    },
    column: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  };

  return (
    <>
      <Header heroTitle={"Ooops!"} />
      <div style={styles.mainContainer}>
        <section
          className={"applicationContent"}
          style={styles.applicationContent}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "250px",
                  fontWeight: "bold",
                  color: "#0A4F4F",
                }}
              >
                404
              </p>
              <p style={{ color: "#0A4F4F" }}>Página no encontrada</p>
            </div>

            <img src="/images/support/notfound/notfound_printer.png" alt="" />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
