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
  special = true,
}) {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    layoutContainer: {
      display: "flex",
      flexDirection: invertedColumn ? "column-reverse" : "column",
      flex: 1,
      padding: globalStyle.lateralPadding.mobile,
      backgroundColor: backgroundColor,
      gap: "15px",
      ...(isMd && {
        flexDirection: imageRight ? "row-reverse" : "row",
        gap: "20px",
        padding: `${globalStyle.verticalPadding.tablet} 0`,
      }),
    },
    textSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      flex: "6 0 0",
      rowGap: "20px",
      ...(isMd && {
        padding: special
          ? `0px ${globalStyle.lateralPadding.tablet}`
          : imageRight
            ? `0px 0px 0px ${globalStyle.lateralPadding.tablet}`
            : `0px ${globalStyle.lateralPadding.tablet} 0px 0px`,
      }),
      ...(isLg && {
        padding: imageRight
          ? `0px 0px 0px ${globalStyle.lateralPadding.desktop}`
          : `0px ${globalStyle.lateralPadding.desktop} 0px 0px`,
      }),
      // ...(isLg && {
      //   padding: imageRight ? "0px 80px 0px 200px" : "0px 200px 0px 80px",
      // }),
    },
    imageSection: {
      display: "flex",
      flex: "4 0 0",
      justifyContent: imageRight ? "end" : "start",
      alignItems: "start",
      ...(isMd && {
        padding: imageRight
          ? `0px ${globalStyle.lateralPadding.tablet} 0px 0px`
          : `0px 0px 0px ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isLg && {
        padding: imageRight
          ? `0px ${globalStyle.lateralPadding.desktop} 0px 0px`
          : `0px 0px 0px ${globalStyle.lateralPadding.desktop}`,
      }),
    },
    image: {
      maxHeight: "400px",
      width: "auto",
      maxWidth: "100%",
    },
  };

  return (
    <RowComponent>
      <div style={styles.layoutContainer}>
        {imageEnabled && (
          <div className={"imageHolder"} style={styles.imageSection}>
            <img
              style={styles.image}
              src={`/images/${imageName}`}
              alt={altTextImage}
            />
          </div>
        )}

        <div className={"textHolder"} style={styles.textSection}>
          {children}
        </div>
      </div>
    </RowComponent>
  );
}
