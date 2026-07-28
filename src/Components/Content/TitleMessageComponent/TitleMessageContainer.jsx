import useBreakpoints from "../../../hooks/useBreakpoints";

import typography from "../../../Style/typography";
import globalStyle from "../../../Style/globalStyle";

import RowComponent from "../RowComponent";

export default function TitleMessageContainer({
  children,
  title,
  message,
  sectionName,
}) {
  //Check windows size
  const { isTablet, isDesktop, isLargeTablet, isWideScreen } = useBreakpoints();

  const paddingSize = "20px";

  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      ...(isTablet && {
        padding: "20 200px",
      }),
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      ...(isWideScreen && {
        width: "1440px",
      }),
    },
    title: {
      textAlign: "left",
      fontSize: typography.fluid.h2,
      lineHeight: typography.lineHeights.headingTight,
      padding: `0 ${globalStyle.lateralPadding.mobile}`,
      ...(isTablet && {
        padding: `0 ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isDesktop && {
        padding: `0 ${globalStyle.lateralPadding.desktop}`,
      }),
      ...(isWideScreen && {
        padding: "0",
      }),
    },
    message: {
      fontSize: typography.fluid.body,
      padding: `0 ${globalStyle.lateralPadding.mobile}`,
      ...(isTablet && {
        padding: `0 ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isDesktop && {
        padding: `0 ${globalStyle.lateralPadding.desktop}`,
      }),
      ...(isWideScreen && {
        padding: "0",
      }),
    },
    childrenContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: `0 ${globalStyle.lateralPadding.mobile}`,
      ...(isTablet && {
        padding: `0 ${globalStyle.lateralPadding.tablet}`,
        gap: "20px",
      }),
      ...(isDesktop && {
        padding: `0 ${globalStyle.lateralPadding.desktop}`,
        flexDirection: "row",
        gap: "40px",
      }),
      ...(isWideScreen && {
        width: "1440px",
      }),
    },
  };

  return (
    <RowComponent>
      <div className={sectionName} style={styles.layout}>
        <div className="infoContainer" style={styles.infoContainer}>
          {title !== undefined && (
            <h2 className="title" style={styles.title}>
              {title}
            </h2>
          )}
          {message !== undefined && (
            <p className="message" style={styles.message}>
              {message}
            </p>
          )}
        </div>
        <div className="childrenContainer" style={styles.childrenContainer}>
          {children}
        </div>
      </div>
    </RowComponent>
  );
}
