import { FacebookFilled, LinkedinFilled } from "@ant-design/icons";

export default function FooterSocial() {
  const styles = {
    footerSocial: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: "white",
      gap: 15,
    },
    footerSocialIcons: {
      display: "flex",
      flexDirection: "row",
      marginRight: "10px",
      gap: 32,
    },
  };

  return (
    <div className="footerSocial" style={styles.footerSocial}>
      <div style={styles.footerSocialIcons}>
        <a
          target="_blank"
          href="https://www.facebook.com/3DPrintingPeru"
          rel="noreferrer"
        >
          <FacebookFilled style={{ fontSize: 48 ,color: "rgb(62,255,180)"}} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/3dprintingperu/"
          rel="noreferrer"
        >
          <LinkedinFilled style={{ fontSize: 48, color: "rgb(62,255,180)"}} />
        </a>
      </div>
      <p style={{ textAlign: "start" }}>
        Siguenos para estar al tanto de las  <br /> novedades en impresoras y
        materiales.
      </p>
    </div>
  );
}
