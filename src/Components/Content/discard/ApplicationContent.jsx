import useMediaQuery from "../../hooks/useMediaQuery";

export default function ApplicationContent({ width, typeContent }) {
  const isDevice = useMediaQuery(768);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      rowGap: 40,
      width: width,
    },
    imageRight: {
      float: "right",
      marginLeft: 20,
    },
    imageLeft: {
      float: "left",
      marginRight: 20,
    },
    imageCenter: {
      width: "100%",
    },
  };

  return (
    <div
      className="textContainer"
      style={styles.container}
    >
      <div className="imageTextWrapper">
        <img
          src={typeContent.sectionOne.imageUrl}
          alt=""
          style={isDevice ? styles.imageCenter : styles.imageRight}
        />
        <h3>The Challenge</h3>
        <p>{typeContent.sectionOne.challengeMessage}</p>
        <h3>The Solution</h3>
        <p>{typeContent.sectionOne.solutionMessage}</p>
      </div>
      <div className="imageTextWrapper">
        <img
          src={typeContent.sectionTwo.imageUrl}
          alt=""
          style={!isDevice ? styles.imageRight : styles.imageCenter}
        />
        <h3>The Challenge</h3>
        <p>{typeContent.sectionTwo.challengeMessage}</p>
        <h3>The Solution</h3>
        <p>{typeContent.sectionOne.solutionMessage}</p>
      </div>
    </div>
  );
}
