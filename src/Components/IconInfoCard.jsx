export default function PageContent({ iconImage, title, message }) {
  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  // const styles = {
  //   cardContainer: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     //   rowGap: "0px",
  //   },
  //   pageContent: {
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     padding: "50px 0px",
  //     width: "100vw",
  //     backgroundColor: "rgb(239,251,246)",
  //   },
  //   column: {
  //     paddingLeft: 100,
  //     paddingRight: 100,
  //   },
  // };

  return (
    <div className="cardContainer" style={{width: "400px", height: "300px", backgroundColor: "#D9D9D8"}}>
      <img src="" alt="" className="icon" />
      <h2 className="cardTitle">{title}</h2>
      <p className="cardInfo">{message}</p>
    </div>
  );
}
