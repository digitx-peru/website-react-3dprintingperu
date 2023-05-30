import Header from "../Components/Header"
import Footer from "../Components/Footer"
import NewsCard from "../Components/NewsCard"
import Hero from "../Components/Hero"
import ContactUs from "../Components/ContactUs"

export default function Home() {

    return (
        <>
            <Header />
            <div style={styles.mainContainer}>
                <Hero backgroundUrl={'https://picsum.photos/3000/600'} />
                <div style={styles.newsCardContainer}>
                    <NewsCard />
                    <NewsCard />
                </div>
                <ContactUs />
            </div>
            <Footer />    
        </>
    )
}

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
        alignItems: 'center',
    },
    newsCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        width: '60%',
    },
}