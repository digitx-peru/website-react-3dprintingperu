import { Link } from "react-router-dom";
import useBreakpoints from "../../hooks/useBreakpoints";

import { CaretRightOutlined } from "@ant-design/icons";

import typography from "../../Style/typography";

export default function NewsCard({ redirectUrl, title, message, image }) {
  const { isTablet, isDesktop } = useBreakpoints();

  const cardBorderRadius = 8;

  const styles = {
    linkContainer: {
      display: "flex",
      backgroundColor: "rgb(71,167,153)",
      borderRadius: `${cardBorderRadius}px`,
      width: "100%", //need
      height: "150px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.8)",
      ...(isTablet && {
        height: "150px",
      }),
      ...(isDesktop && {
        height: "400px",
        flex: "1 1 33.333%",
        maxWidth: "33.333%", // The rigid structural ceiling
      }),
    },
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100%", //need
      flexGrow: "1",
      borderRadius: `${cardBorderRadius}px`,
      overflow: "hidden",
      ...(isDesktop && {
        flexDirection: "column",
      }),
    },
    image: {
      flex: "4.5 0 0",
      objectFit: "cover",
      objectPosition: "center",
      // Creates a fading mask from fully visible to fully transparent
      WebkitMaskImage:
        "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
      maskImage:
        "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
      ...(isDesktop && {
        flexDirection: "column",
        flex: "7.5 0 0",
        WebkitMaskImage: "none",
        maskImage: "none",
        maxWidth: "100%", // Constrains the image to the container
        height: "auto", // Protects the aspect ratio from stretching
        display: "block", // Erases the default inline baseline gap
      }),
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      flex: "8.5 0 0",
      color: "white",
      padding: "0 15px",
      backgroundColor: "rgb(71,167,153)",
      height: "100%",
      ...(isTablet && {
        // backgroundImage: `url(${image})`,
        flex: "4 0 0",
      }),
      ...(isDesktop && {
        flexDirection: "column",
        flex: "2.5 0 0",
        borderTop: "4px solid #7BEFB1",
        alignItems: "start",
        justifyContent: "center",
      }),
    },
    title: {
      fontWeight: "100",
      fontSize: typography.fluid.h3,
      margin: 0,
      flex: "1 0 0",
      ...(isTablet && {}),
      ...(isDesktop && {
        flex: "initial",
      }),
    },
    arrowContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: "1.5 0 0",
      ...(isTablet && {
        flex: "1.5 0 0",
      }),
    },
  };

  return (
    <Link to={redirectUrl} style={styles.linkContainer}>
      <div style={styles.container}>
        {isTablet && <img src={image} alt="" style={styles.image} />}
        <div style={styles.infoContainer}>
          <h3 style={styles.title}>{title}</h3>
        </div>
        {!isDesktop && (
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
