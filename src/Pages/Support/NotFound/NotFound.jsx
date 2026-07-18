import PageContent from "../../../Components/PageContent";
import TextImageRow from "../../../Components/Content/TextImageRow";

export default function NotFound() {
  const styles = {
    title: {
      color: "#0A4F4F",
      fontSize: "96px",
      textAlign: "center",
    },
    message: {
      color: "#0A4F4F",
      fontSize: "24px",
      textAlign: "center",
    },
  };

  return (
    <>
      <PageContent
        heroEnabled={false}
        floatButtonEnabled={false}
        contactFormEnabled={false}
      >
        <TextImageRow
          imageName={"/support/notfound/notfound_printer.png"}
          altTextImage="broken printer"
          invertedColumn={true}
        >
          <h3 style={styles.title}>404</h3>
          <p style={styles.message}>Página no encontrada</p>
        </TextImageRow>
      </PageContent>
    </>
  );
}
