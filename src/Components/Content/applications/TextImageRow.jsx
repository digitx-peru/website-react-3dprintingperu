export default function TextImageRow({ children, sectionName, imageRight = false, imageName }) {

    const styles = {
        container: {
            display: "flex",
            flexDirection: imageRight ? 'row-reverse' : 'row',
            alignItems: 'stretch',
            //   textAlign: "justify",
            //   width: 'auto',
            //   fontSize: isMedium ? "12px" : "16px",
            fontSize: '16px',
            lineHeight: "1.5",
            margin: '0px 0px 5px 0px',
        },
        textSection: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 0.6,
            padding: imageRight ? "0px 80px 0px 200px" : "0px 200px 0px 80px"
        },
        imageSection: {
            display: "flex",
            flex: 0.4,
            justifyContent: imageRight ? "end" : 'start',
            alignItems: "center",
            padding: imageRight ? "0px 200px 0px 0px" : "0px 0px 0px 200px",
        },
        image: {
            maxHeight: "400px",
            width: "auto",
            maxWidth: "100%",
        },
    };

    return (
        <section className={`${sectionName} componentContainer`} style={styles.container}>
            <div className={"imageHolder"} style={styles.imageSection}>
                <img
                    style={styles.image}
                    src={`/images/${imageName}`}
                    alt=""
                />
            </div>
            <div className={"textHolder"} style={styles.textSection}>
                {children}
            </div>
        </section>
    )
}