import ContactUs from "./ContactUs";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
};

export default function ContactSection() {
  return (
    <section className="contactUs" style={styles.container}>
      <ContactUs />
    </section>
  );
}
