import useBreakpoints from "../../hooks/useBreakpoints";

import ContactUs from "./ContactUs";

export default function ContactSection({defaultOption}) {
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
      <ContactUs defaultOption={defaultOption}/>
    </section>
  );
}
