import useBreakpoints from "../../hooks/useBreakpoints";

import globalStyle from "../../Style/globalStyle";

import RowComponent from "../Content/RowComponent";

export default function PolyurethaneImageTitle() {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#3EFFB4",
    },
    layout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: `${globalStyle.verticalPadding.mobile} ${globalStyle.lateralPadding.mobile}`,
      ...(isTablet && {
        padding: `${globalStyle.verticalPadding.tablet} ${globalStyle.lateralPadding.tablet}`,
      }),
      ...(isDesktop && {
        padding: `${globalStyle.verticalPadding.desktop} ${globalStyle.lateralPadding.desktop}`,
      }),
      ...(isWideScreen && {
        width: globalStyle.contentMaxWidth,
      }),
    },
    image: {
      width: "100%",
    },
    title: {
      textAlign: "center",
      fontSize: "clamp(24px, 4vw, 32px)",
    },
  };

  return (
    <RowComponent>
      <div style={styles.container}>
        <div style={styles.layout}>
          <img
            style={styles.image}
            src="/images/pages/services/production/silicone_urethane/silicone_urethane_cycle.png"
            alt=""
          />
          <h2 style={styles.title}>
            Amplio rango de aplicaciones industriales
          </h2>
        </div>
      </div>
    </RowComponent>
  );
}
