export default function SectionJump() {

    const styles = {
        mainContainer: {
            backgroundColor: "#E3BF7B",
            position: "sticky",
            top: 0,
            padding: "0px 200px"
        },
        navList: {
            display: "flex",
            flexDirection: "row",
            columnGap: 50,
            padding: "0px 0px"
        },
        listItem: {
            listStyle: 'none'
        }
    };

    return (
        <div className="sectionJumpContainer" style={styles.mainContainer}>
            <ul className="navList" style={styles.navList}>
                <li style={styles.listItem}>Diseñadores</li>
                <li style={styles.listItem}>Manufactura</li>
                <li style={styles.listItem}>Tiendas</li>
            </ul>
        </div>
    )
}