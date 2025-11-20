
////////////////////////// Main Component //////////////////////////

export default function Navbar({ activeNavBarCategory, setOverlayVisible, setActiveNavBarCategory }) {

  const handleOnClick = (buttonId) => {
    setOverlayVisible(true)
    setActiveNavBarCategory(buttonId);
  };

  const styles = {
    navbar: {
      display: "flex",
      color: "rgb(62,255,180)",
      alignSelf: "stretch",
      alignItems: "stretch"
    },
    dropDownText: {
      fontSize: 18
    },
    optionList: {
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "row",
      columnGap: 50,
    },
    optionListItem: {
      listStyle: 'none',
      fontSize: "20px",
      display: "flex",
      alignItems: "end"
    },
    link: {
      textAlign: "center"
    },
    activeLink: {
      borderBottom: '3px solid rgb(62,255,180)',
    }
  };


  return (
    <nav style={styles.navbar}>

      <ul style={styles.optionList}>
        {/*Services menu*/}
        <li style={{ ...styles.optionListItem, ...(activeNavBarCategory === 'servicios' ? styles.activeLink : {}) }}>
          <a style={styles.link}
            onClick={() => handleOnClick("servicios")}>
            Servicios
          </a>
        </li>
        {/*Products menu*/}
        <li style={{ ...styles.optionListItem, ...(activeNavBarCategory === 'producto' ? styles.activeLink : {}) }}>
          <a style={styles.link}
            onClick={() => handleOnClick("producto")}>
            Productos
          </a>
        </li>
        {/*Resources menu*/}
        <li style={{ ...styles.optionListItem, ...(activeNavBarCategory === 'recursos' ? styles.activeLink : {}) }}>
          <a style={styles.link}
            onClick={() => handleOnClick("recursos")}>
            Recursos
          </a>
        </li>
        {/*Applications menu*/}
        <li style={{ ...styles.optionListItem, ...(activeNavBarCategory === 'aplicaciones' ? styles.activeLink : {}) }}>
          <a style={styles.link}
            onClick={() => handleOnClick("aplicaciones")}>
            Aplicaciones
          </a>
        </li >
      </ul>
    </nav>
  );
}


