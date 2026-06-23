import RowComponent from "./RowComponent";

export default function TextImageRow({ children, imageRight = false, imageName, backgroundColor }) {

    const styles = {
        layout: {
            display: "flex",
            flexDirection: imageRight ? 'row-reverse' : 'row',
            fontSize: '16px',
        },
        textSection: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            flex: 0.6,
            padding: imageRight ? "0px 80px 0px 200px" : "0px 200px 0px 80px",
            rowGap: "20px" 
        },
        imageSection: {
            display: "flex",
            flex: 0.4,
            justifyContent: imageRight ? "end" : 'start',
            alignItems: "start",
            padding: imageRight ? "0px 200px 0px 0px" : "0px 0px 0px 200px",
        },
        image: {
            maxHeight: "400px",
            width: "auto",
            maxWidth: "100%",
        },
    };

    return (
    <RowComponent>
        <div style={styles.layout}>
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
        </div>
    </RowComponent>
    )
}