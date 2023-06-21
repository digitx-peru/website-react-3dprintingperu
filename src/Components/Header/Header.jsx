import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <Link to="/">
        <img
          src={require("../../assets/icons/3dp_logo.png")}
          style={styles.icon}
          alt=""
        />
      </Link>
      <Navbar />
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderBottom: "3px solid grey",
    columnGap: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
  },
  icon: {
    height: 80,
    objectFit: "contain",
  },
};
