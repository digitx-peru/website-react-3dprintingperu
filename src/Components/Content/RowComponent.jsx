import useBreakpoints from "../../hooks/useBreakpoints";

export default function RowComponent({ children, backgroundColor }) {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    container: {
      backgroundColor: backgroundColor,
      marginBottom: "20px",
      ...(isMd && {
        marginBottom: "30px",
      }),
    },
  };

  return (
    <article className="application-card" style={styles.container}>
      {children}
    </article>
  );
}
