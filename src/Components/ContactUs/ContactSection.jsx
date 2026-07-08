import useBreakpoints from "../../hooks/useBreakpoints";

import ContactUs from "./ContactUs";

export default function ContactSection() {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      ...(isMd && {
        marginBottom: "20px",
      }),
    },
  };
  return (
    <section className="contactUs" style={styles.container}>
      <ContactUs />
    </section>
  );
}
