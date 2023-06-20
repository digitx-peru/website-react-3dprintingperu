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
                <Hero backgroundUrl={'https://picsum.photos/3000/600'} title='Hero header' message='Lorem ipsum'/>
                <div style={styles.newsCardContainer}>
                    <NewsCard redirectUrl='/noticias/noticiaUno' title='Newscard title' message='Lorem ipsum'/>
                    <NewsCard redirectUrl='/noticias/noticiaUno' title='Newscard title 2' message='Lorem ipsum'/>
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
        justifyContent: 'space-between',
    },
}