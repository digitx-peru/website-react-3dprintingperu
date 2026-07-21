import { Link } from "react-router-dom";
import useBreakpoints from "../../hooks/useBreakpoints";

import { CaretRightOutlined } from "@ant-design/icons";

import typography from "../../Style/typography";

export default function NewsCard({ redirectUrl, title, message, image }) {
  const { isMd, isLg } = useBreakpoints();

  const cardBorderRadius = 8;

  const styles = {
    linkContainer: {
      display: "flex",
      backgroundColor: "rgb(71,167,153)",
      borderRadius: `${cardBorderRadius}px`,
      // textDecoration: "none",
      // backgroundImage: `url(${image})`,
      width: "100%", //need
      height: "150px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.8)",
      ...(isMd && {
        // border: "1px solid rgb(200, 200, 200)",
        height: "150px",
        // backgroundImage: `url(${image})`,
      }),
    },
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100%", //need
      flexGrow: "1",
      borderRadius: `${cardBorderRadius}px`,
      // backgroundImage: `url(${image})`,
      overflow: "hidden",
    },
    image: {
      // width: "40%",
      // height: "100%",
      flex: "4.5 0 0",
      objectFit: "cover",
      objectPosition: "center",
      // Creates a fading mask from fully visible to fully transparent
      WebkitMaskImage:
        "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
      maskImage:
        "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      flex: "8.5 0 0",
      color: "white",
      padding: "0 15px",
      backgroundColor: "rgb(71,167,153)",
      height: "100%",
      // Pulls the text box slightly left so text can sit nicely over the faded area if needed
      ...(isMd && {
        // backgroundImage: `url(${image})`,
        flex: "4 0 0",
      }),
    },
    title: {
      fontWeight: "100",
      fontSize: typography.fluid.h3,
      margin: 0,
      flex: "1 0 0",
      ...(isMd && {}),
    },
    arrowContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: "1.5 0 0",
      ...(isMd && {
        flex: "1.5 0 0",
      }),
    },
  };

  return (
    <Link to={redirectUrl} style={styles.linkContainer}>
      <div style={styles.container}>
        {isMd && <img src={image} alt="" style={styles.image} />}
        <div style={styles.infoContainer}>
          <h3 style={styles.title}>{title}</h3>
        </div>
        {!isLg && (
          <div style={styles.arrowContainer}>
            <CaretRightOutlined
              style={{
                color: "#ffffff", // Changes arrow color to white
                fontSize: "24px", // Adjust size as needed
              }}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
