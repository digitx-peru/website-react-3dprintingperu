import { Button } from "antd";

export default function Hero({backgroundUrl, title}) {

  return (
    <section style={{...styles.hero, backgroundImage: `url(${backgroundUrl})`}}>
      <h1 style={{ fontSize: 64 }}>{title}</h1>
      <p>
        Push the boundaries with exper additive manufacturing solutions and
        consultation that make the existing better and the new possible
      </p>
      <Button style={styles.heroButton}>Saber mas</Button>
    </section>
  );
}

const styles = {
  hero: {
    height: 500,
    backgroundColor: "#353535",
    alignItems: "center",
    color: "white",
    padding: 50,
    alignSelf: "stretch",
  },
  heroButton: {
    backgroundColor: "transparent",
    borderColor: "white",
    color: "white",
    marginTop: 20,
  },
};
