import useBreakpoints from "../../hooks/useBreakpoints";

import ContactUs from "./ContactUs";

export default function ContactSection() {
  const { isMd, isLg } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
      ...(isMd && {
      }),
    },
  };
  return (
    <section className="contactUs" style={styles.container}>
      <ContactUs />
    </section>
  );
}
