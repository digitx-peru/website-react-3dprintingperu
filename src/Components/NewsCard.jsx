import { Link } from "react-router-dom";

export default function NewsCard({ redirectUrl, title, message }) {
  return (
    <Link to={redirectUrl} style={styles.linkContainer}>
      <div style={styles.container}>
        <img src="https://picsum.photos/800/400" alt="" style={styles.image} />
        <div style={styles.infoContainer}>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </Link>
  );
}

const styles = {
  linkContainer: {
    flexGrow: 1,
    border: "1px solid rgb(200, 200, 200)",
    borderRadius: 8,
    width: "100%",
  },
  container: {},
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  infoContainer: {
    padding: 10,
  },
};
