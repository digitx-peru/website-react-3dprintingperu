import { FacebookFilled, LinkedinFilled } from "@ant-design/icons";

export default function FooterSocial() {
  const styles = {
    footerSocial: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "white",
      gap: 15,
    },
    footerSocialIcons: {
      display: "flex",
      flexDirection: "row",
      gap: 32,
    },
  };

  return (
    <div className="footerSocial" style={styles.footerSocial}>
      <p style={{ textAlign: "center" }}>
        Siguenos para estar al tanto de las novedades en impresoras y
        materiales.
      </p>
      <div style={styles.footerSocialIcons}>
        <a
          target="_blank"
          href="https://www.facebook.com/3DPrintingPeru"
          rel="noreferrer"
        >
          <FacebookFilled style={{ fontSize: 32 }} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/3dprintingperu/"
          rel="noreferrer"
        >
          <LinkedinFilled style={{ fontSize: 32 }} />
        </a>
      </div>
    </div>
  );
}
