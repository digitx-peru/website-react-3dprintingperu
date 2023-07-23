import { Button } from "antd";

export default function Hero({ content }) {

  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: `url(${content.backgroundUrl})`,
      }}
    >
      <h1 style={{ fontSize: 64 }}>{content.title}</h1>
      <p>{content.message}</p>
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
