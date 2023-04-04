import Header from "../Components/Header"
import NewsCard from "../Components/NewsCard"

export default function Home() {

    return (
        <>
            <Header />
            <div style={styles.mainContainer}>
                <div style={styles.heroPic}></div>
                <div style={styles.newsCardContainer}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        </>
    )
}

const styles = {
    newsCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
    },

    heroPic: {
        width: '100%',
        height: 500,
        backgroundColor: '#353535'
    },

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        columnGap: 15,
        padding: 15,
        alignItems: 'center',
    },
}