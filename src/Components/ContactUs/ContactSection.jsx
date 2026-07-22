import useBreakpoints from "../../hooks/useBreakpoints";

import ContactUs from "./ContactUs";

export default function ContactSection() {
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
      ...(isTablet && {
      }),
    },
  };
  return (
    <section className="contactUs" style={styles.container}>
      <ContactUs />
    </section>
  );
}
