import { Link } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";

export default function NewsCard({ redirectUrl, title, message, image }) {
  const isDevice = useMediaQuery(768);

  const styles = {
    linkContainer: {
      flexGrow: 1,
      border: "1px solid rgb(200, 200, 200)",
      borderRadius: "8px 8px 0px 0px",
      width: "400px",
      backgroundColor : "rgb(71,167,153)",
    },
    container: {
      display:"flex",
      flexDirection:"column",
      height: "100%",
      borderRadius: 8,
    },
    image: {
      width: "400px",
      height: 300,
      objectFit: "cover",
      backgroundColor : "white",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      color : "white",
      padding: 10,
      borderTop: "4px solid rgb(62,255,180)",
      backgroundColor : "rgb(71,167,153)",
      height: "auto",
      height: 'calc(100% - 300px)'
    },
  };

  return (
    <Link to={redirectUrl} style={styles.linkContainer}>
      <div style={styles.container}>
        <img src={image} alt="" style={styles.image} />
        <div style={styles.infoContainer}>
          <h3 style={{fontWeight : "100"}}>{title}</h3>
          {/* <p>{message}</p> */}
        </div>
      </div>
    </Link>
  );
}
