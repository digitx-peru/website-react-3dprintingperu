import useBreakpoints from "../../../../../hooks/useBreakpoints";

export default function NavDropDownContainer({ linkpath, children }) {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  const styles = {
    dropdownOptionsContainer: {
      display: "flex",
      flexDirection: "column",
      marginTop: "0",
      gap: "0",
      ...(isDesktop && {
        flexDirection: "row",
        marginTop: "40px",
        gap: "75px",
      }),
      ...(isWideScreen && {
        gap: "100px",
      }),
    },
  };

  return (
    <div
      className="dropdownOptionsContainer"
      style={styles.dropdownOptionsContainer}
    >
      {children}
    </div>
  );
}
