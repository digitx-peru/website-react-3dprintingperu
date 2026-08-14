import useBreakpoints from "../../hooks/useBreakpoints";

export default function SectionJumpbar({ navItems }) {
  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  //Ref jump handler
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center", // Centers the element vertically
    });
  };

  const styles = {
    sectionJumpContainer: {
      backgroundColor: "#E3BF7B",
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    sectionJumpNavList: {
      display: "flex",
      flexDirection: "row",
      columnGap: "50px",
      padding: 0, //Remove padding from ul
      ...(isDesktop && {
        columnGap: "100px",
      }),
      ...(isWideScreen && {
        columnGap: "150px",
      }),
    },
    listItem: {
      listStyle: "none",
      cursor: "pointer",
    },
  };

  return (
    <nav className="sectionJumpContainer" style={styles.sectionJumpContainer}>
      <ul className="sectionJumpNavList" style={styles.sectionJumpNavList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleScroll(item.ref)}
            style={styles.listItem}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
