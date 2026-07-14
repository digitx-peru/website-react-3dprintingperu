import PageContent from "../../../Components/PageContent";
import RowComponent from "../../../Components/Content/RowComponent";

export default function NotFound() {
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "0px",
    },
    applicationContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100vw",
    },
    column: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  };

  return (
    <>
      <PageContent
        heroEnabled={false}
        floatButtonEnabled={false}
        contactFormEnabled={false}
      >
        <RowComponent>
          <p style={{ color: "#0A4F4F" }}>Página no encontrada</p>
          <img
            src={"/images/support/notfound/notfound_printer.png"}
            alt="broken printer"
          />
        </RowComponent>
      </PageContent>
    </>
  );
}
