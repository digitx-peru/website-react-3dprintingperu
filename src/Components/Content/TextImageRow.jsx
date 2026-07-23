import useBreakpoints from "../../hooks/useBreakpoints";

import typography from "../../Style/typography";
import globalStyle from "../../Style/globalStyle";

import RowComponent from "./RowComponent";

export default function TextImageRow({
  children,
  imageEnabled = true,
  imageRight = false,
  imageName,
  invertedColumn = false,
  backgroundColor,
  altTextImage,
  special = false,
}) {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    layoutContainer: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: backgroundColor,
    },
    layout: {
      display: "flex",
      flexDirection: invertedColumn ? "column-reverse" : "column",
      padding: `${globalStyle.verticalPadding.mobile} ${globalStyle.lateralPadding.mobile}`,
      backgroundColor: backgroundColor,
      gap: "15px",
      boxSizing: "border-box",
      ...(isTablet && {
        flexDirection: imageRight ? "row-reverse" : "row",
        gap: "20px",
        padding: `${globalStyle.verticalPadding.tablet} ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isDesktop && {
        flexDirection: imageRight ? "row-reverse" : "row",
        gap: "20px",
        padding: `${globalStyle.verticalPadding.desktop} ${globalStyle.lateralPadding.desktop}`,
      }),
      ...(isWideScreen && {
        width: "1440px",
      }),
    },
    childrenContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      flex: "6 0 0",
      rowGap: "20px",
      ...(isTablet && {}),
      ...(isDesktop && {}),
    },
    imageSection: {
      display: "flex",
      flex: "4 0 0",
      justifyContent: imageRight ? "end" : "start",
      alignItems: "start",
      ...(isTablet && {}),
      ...(isDesktop && {}),
      ...(isWideScreen && {}),
    },
    image: {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "300px",
    },
  };

  return (
    <RowComponent>
      <div style={styles.layoutContainer}>
        <div style={styles.layout}>
          {imageEnabled && (
            <div className={"imageHolder"} style={styles.imageSection}>
              <img
                style={styles.image}
                src={`/images/${imageName}`}
                alt={altTextImage}
              />
            </div>
          )}

          <div className={"textHolder"} style={styles.childrenContainer}>
            {children}
          </div>
        </div>
      </div>
    </RowComponent>
  );
}
