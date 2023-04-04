import Navbar from "./Navbar";

export default function Header() {
    return (
        <header style={styles.header}>
            <img src={require("../assets/icons/3dp_logo.png")} style={styles.icon} alt="" />
            <Navbar />
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 87,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        border: '1px solid grey',
    },
    icon: {
        width: 85,
        height: 85,
    }
}