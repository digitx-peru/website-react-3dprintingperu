import useBreakpoints from "../../hooks/useBreakpoints";

import globalStyle from "../../Style/globalStyle";
import typography from "../../Style/typography";

export default function SpecialContent({ children }) {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
    },
    layout: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: `${globalStyle.verticalPadding.mobile} ${globalStyle.lateralPadding.mobile}`,
      ...(isTablet && {
        padding: `${globalStyle.verticalPadding.tablet} ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isDesktop && {
        padding: `${globalStyle.verticalPadding.desktop} ${globalStyle.lateralPadding.desktop}`,
      }),
      ...(isWideScreen && {
        padding: `${globalStyle.verticalPadding.desktop} 0`,
        width: "1440px",
      }),
    },
  };

  return (
    <div className="SpecialContentContainer" style={styles.container}>
      <div style={styles.layout}>{children}</div>
    </div>
  );
}
