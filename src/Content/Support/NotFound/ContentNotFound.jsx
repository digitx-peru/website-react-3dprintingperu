import useBreakpoints from "../../../hooks/useBreakpoints";

import typography from "../../../Style/typography";
import globalStyle from "../../../Style/globalStyle";

import SpecialContent from "../../../Components/Special/SpecialContent";

export default function ContentNotFound() {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      ...(isTablet && {}),
      ...(isDesktop && {
        flexDirection: "row",
      }),
      ...(isWideScreen && {}),
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      ...(isDesktop && {
        flex: "1 1 50%", // Takes up half the container width
      }),
    },
    title: {
      color: "#0A4F4F",
      fontSize: "96px",
      textAlign: "center",
      ...(isDesktop && {
        fontSize: "128px",
      }),
      ...(isWideScreen && {
        fontSize: "192px",
      }),
    },
    message: {
      color: "#0A4F4F",
      fontSize: "24px",
      textAlign: "center",
      ...(isDesktop && {
        fontSize: "32px",
      }),
      ...(isWideScreen && {
        fontSize: "40px",
      }),
    },
    imageContainer: {
      ...(isDesktop && {
        flex: "1 1 50%", // Takes up the other half
        overflow: "hidden", // Prevents asset bleeding
      }),
    },
    image: {
      width: "100%",
      height: "auto",
      display: "block",
    },
  };

  return (
    <>
      <SpecialContent>
        <div style={styles.layout}>
          <div style={styles.textContainer}>
            <h3 style={styles.title}>404</h3>
            <p style={styles.message}>Página no encontrada</p>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/images/support/notfound/notfound_printer.png"
              alt="broken printer"
              style={styles.image}
            />
          </div>
        </div>
      </SpecialContent>
    </>
  );
}
