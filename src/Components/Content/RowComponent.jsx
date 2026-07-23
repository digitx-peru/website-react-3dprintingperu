import useBreakpoints from "../../hooks/useBreakpoints";

export default function RowComponent({ children, backgroundColor }) {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    container: {
      backgroundColor: backgroundColor,
      marginBottom: "20px",
      ...(isTablet && {
        marginBottom: "30px",
      }),
      ...(isDesktop && {
        marginBottom: "30px",
      }),
      ...(isWideScreen && {
        marginBottom: "60px",
      }),
    },
  };

  return (
    <article className="application-card" style={styles.container}>
      {children}
    </article>
  );
}
