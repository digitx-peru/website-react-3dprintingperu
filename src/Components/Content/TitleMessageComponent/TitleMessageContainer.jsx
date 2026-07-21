import useBreakpoints from "../../../hooks/useBreakpoints";

import typography from "../../../Style/typography";

import RowComponent from "../RowComponent";

export default function TitleMessageContainer({
  children,
  title,
  message,
  sectionName,
}) {
  //Check windows size
  const { isMd, isLg } = useBreakpoints();

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
      ...(isMd && {
        padding: "0 30px",
      }),
    },
    message: {
      fontSize: typography.fluid.body,
      ...(isMd && {
        padding: "0 30px",
      }),
    },
    childrenContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      ...(isMd && {
        padding: "0 30px",
        gap: "20px",
      }),
      ...(isLg && {
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
