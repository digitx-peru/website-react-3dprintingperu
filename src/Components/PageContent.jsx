// import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs";
import FloatButton from "./FloatButton";

export default function PageContent({ children, heroTitle, heroMessage, heroImage, floatButton = true, floatContent }) {
    // const isDevice = useMediaQuery(768);
    // const is1440 = useMediaQuery(1440);

    const heroContent = {
        title: heroTitle,
        message: heroMessage,
        heroImage: `/images/${heroImage}`,
    };

    const styles = {
        pageMainContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "0px",
        },
        pageContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "50px 0px",
            width: "100vw",
            backgroundColor: "rgb(239,251,246)",
        },
        column: {
            paddingLeft: 100,
            paddingRight: 100,
        },
    };

    return (
        <>
            <Header
                heroTitle={heroContent.title}
                heroMessage={heroContent.message}
                heroImage={heroContent.heroImage}
            />
            <div style={styles.pageMainContainer}>
                <section
                    className={"pageContent"}
                    style={styles.pageContent}
                >
                    {children}
                </section>
                {floatButton && <FloatButton preselectedApplications={floatContent} />}
                <ContactUs />
                <Footer />
            </div>
        </>
    );
}