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
  const { isMd, isLg } = useBreakpoints();

  const paddingSize = "20px";

  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: "20px",
      ...(isMd && {
        padding: "20 200px",
      }),
    },
    title: {
      textAlign: "left",
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      lineHeight: typography.lineHeights.headingTight,
      padding: `0 ${globalStyle.lateralPadding.mobile}`,
      ...(isMd && {
        padding: `0 ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isLg && {
        padding: `0 ${globalStyle.lateralPadding.desktop}`,
      }),
    },
    message: {
      fontSize: typography.fluid.body,
      padding: `0 ${globalStyle.lateralPadding.mobile}`,
      ...(isMd && {
        padding: `0 ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isLg && {
        padding: `0 ${globalStyle.lateralPadding.desktop}`,
      }),
    },
    childrenContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "0 20px",
      ...(isMd && {
        padding: "0 30px",
        gap: "20px",
      }),
      ...(isLg && {
        flexDirection: "row",
        gap: "40px",
      }),
    },
  };

  return (
    <RowComponent>
      <div className={sectionName} style={styles.layout}>
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
        <div className="childrenContainer" style={styles.childrenContainer}>
          {children}
        </div>
      </div>
    </RowComponent>
  );
}
