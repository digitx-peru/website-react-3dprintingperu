import { AppstoreOutlined } from "@ant-design/icons";

export default function EndOfContent() {
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", margin: "50px 0"}}>
            <p>---------------------</p>
            <AppstoreOutlined />
            <p>---------------------</p>
        </div>
    )
}