import { Link } from "react-router-dom";
import useBreakpoints from "../../hooks/useBreakpoints";

import typography from "../../Style/typography";

export default function NewsCard({ redirectUrl, title, message, image }) {
  const { isMd, isLg } = useBreakpoints();

  const cardBorderRadius = 8;

  // const styles = {
  //   linkContainer: {
  //     // backgroundColor: "rgb(71,167,153)",
  //     // borderRadius: `${cardBorderRadius}px`,
  //     ...(isMd && {
  //       border: "1px solid rgb(200, 200, 200)",
  //       display: "block",
  //       textDecoration: "none",
  //       width: "100%",
  //     }),
  //   },
  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //     borderRadius: `${cardBorderRadius}px`,
  //     ...(isMd && {
  //       flexDirection: "row",
  //       // height: "100%",
  //       // width: "100%",
  //       // overflow: "hidden",
  //     }),
  //   },
  //   image: {
  //     objectFit: "cover",
  //     // objectPosition: "center",
  //     borderRadius: 8,
  //     // width: "100%",
  //     ...(isMd && {
  //       // flex: "4 0 0",
  //       // Creates a fading mask from fully visible to fully transparent
  //       WebkitMaskImage:
  //         "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
  //       maskImage:
  //         "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
  //     }),
  //   },
  //   infoContainer: {
  //     display: "flex",
  //     alignItems: "center",
  //     color: "white",
  //     padding: 10,
  //     borderTop: "4px solid rgb(62,255,180)",
  //     backgroundColor: "rgb(71,167,153)",
  //     // height: "auto",
  //     // height: "calc(100% - 300px)",
  //     borderRadius: `0 0 ${cardBorderRadius}px ${cardBorderRadius}px`,
  //     ...(isMd && {
  //       padding: "0 15px",
  //       flex: "6 0 0",
  //       // backgroundColor: "rgb(71,167,153)",
  //       // height: "100%",
  //       // Pulls the text box slightly left so text can sit nicely over the faded area if needed
  //       // paddingLeft: "35px",
  //     }),
  //   },
  //   title: {
  //     fontWeight: "100",
  //     fontSize: typography.fluid.h3,
  //     margin: 0,
  //     ...(isMd && {}),
  //   },
  // };

  const styles = {
    linkContainer: {
      display: "flex",
      // backgroundColor: "rgb(71,167,153)",
      borderRadius: `${cardBorderRadius}px`,
      // textDecoration: "none",
      // backgroundImage: `url(${image})`,
      width: "100%", //need
      height: "150px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 1)",
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
      flex: "5.5 0 0",
      color: "white",
      padding: "0 15px",
      backgroundColor: "rgb(71,167,153)",
      height: "100%",
      // Pulls the text box slightly left so text can sit nicely over the faded area if needed
      ...(isMd &&
        {
          // backgroundImage: `url(${image})`,
        }),
    },
    title: {
      fontWeight: "100",
      fontSize: typography.fluid.h3,
      margin: 0,
      flex: "1 0 0",
      ...(isMd && {}),
    },
  };

  return (
    <Link to={redirectUrl} style={styles.linkContainer}>
      <div style={styles.container}>
        {isMd && <img src={image} alt="" style={styles.image} />}
        <div style={styles.infoContainer}>
          <h3 style={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
