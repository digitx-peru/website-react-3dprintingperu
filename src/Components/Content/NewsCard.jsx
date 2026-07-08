import { Link } from "react-router-dom";
import useBreakpoints from "../../hooks/useBreakpoints";

export default function NewsCard({ redirectUrl, title, message, image }) {
  const { isMd, isLg } = useBreakpoints();

  const cardBorderRadius = 8;

  const styles = {
    linkContainer: {
      backgroundColor: "rgb(71,167,153)",
      borderRadius: `${cardBorderRadius}px`,
      ...(isMd && {
        flexGrow: 1,
        border: "1px solid rgb(200, 200, 200)",
        width: "400px",
      }),
    },
    container: {
      display: "flex",
      flexDirection: "column",
      // height: "100%",
      borderRadius: `${cardBorderRadius}px`,
    },
    image: {
      // height: 300,
      objectFit: "cover",
      // backgroundColor : "white",
      // borderTopLeftRadius: 8,
      // borderTopRightRadius: 8,
      borderRadius: 8,
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      color: "white",
      padding: 10,
      borderTop: "4px solid rgb(62,255,180)",
      backgroundColor: "rgb(71,167,153)",
      height: "auto",
      height: "calc(100% - 300px)",
      borderRadius: `0 0 ${cardBorderRadius}px ${cardBorderRadius}px`,
    },
    title: {
      fontWeight: "100",
      fontSize: "16px",
      ...(isMd && {
        fontSize: "14px",
      }),
    },
  };

  return (
    <Link to={redirectUrl} style={styles.linkContainer}>
      <div style={styles.container}>
        <img src={image} alt="" style={styles.image} />
        <div style={styles.infoContainer}>
          <h3 style={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
