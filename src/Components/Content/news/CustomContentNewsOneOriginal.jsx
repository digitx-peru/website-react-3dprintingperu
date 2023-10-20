import useMediaQuery from "../../../hooks/useMediaQuery";

export default function CustomContentFoundry({ width }) {
  const isDevice = useMediaQuery(768);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      rowGap: 15,
      width: width,
      fontSize: isDevice ? "16px" : "20px",
      lineHeight: "1.5",
    },
    imageRight: {
      float: "right",
      marginLeft: 20,
    },
    imageLeft: {
      float: "left",
      marginRight: 20,
    },
  };

  return (
    <div className="textContainer" style={styles.container}>
      <h2>55-year-old received occipital prosthesis from 3D printer</h2>
      <h3>
        Spectacular technical and medical premiere at Salzburg University
        Hospital - Patient Rainer Trummer: "I'm doing great!"
      </h3>
      <p>
        Computer scientist Rainer Trummer (55) from the city of Salzburg has a
        lifelong history of suffering behind him: he suffers from
        craniosynostosis. That is, one of the cranial bones ossified too early
        during childhood, resulting in a deformation of the skull. "Especially
        as a child, I was often teased. Later, people said less, but you could
        tell what they were thinking. Of course, that left its mark on me."
      </p>
      <p>
        For a long time, Trummer searched for a doctor who could help him. An
        operation already planned abroad was canceled because of the Covid
        pandemic and could not be rescheduled. Then the Salzburg resident turned
        to Professor Alexander Gaggl, head of the Department of Oral and
        Maxillofacial Surgery at the University Hospital of Salzburg, and his
        team: "I had known Professor Gaggl since another operation in 2012 and
        had complete trust in him."
      </p>
      <h3>Balloon filled with water stretched the scalp</h3>
      <p>
        Professor Gaggl and his team decided on a spectacular treatment that
        would take months to complete: "From the beginning, we planned to
        replace the visually missing occiput with a prosthesis. However, we
        faced the challenge that the scalp is very taut and hardly stretchable."
        So last year, Rainer Trummer had a plastic balloon implanted under his
        scalp, which was then filled with saline solution over the course of 6
        months until it reached the size of the planned implant. A total of 250
        milliliters of saline solution were pumped into the balloon.
      </p>
      <p>
        Then the most technically spectacular thing: The Salzburg Provincial
        Clinics set up a laboratory with their own 3D printers at the University
        Hospital in 2021. Trummer was to become the first patient with an
        implant from the 3D printer, which was also produced in-house. "This was
        possible because with the 3D Systems Kumovis R1, we have a 3D printer
        that can print implants made of PEEK plastic under cleanroom
        conditions," explains Simon Enzinger, managing senior physician at
        Department of Oral and Maxillofacial Surgery.
      </p>
      <h3>
        Salzburg University Hospital is a pioneer in 3D printing throughout
        Europe
      </h3>
      <p>
        In-house clinical engineers created a model of the occipital prosthesis
        having a diameter of 12 and a thickness of up to 3 centimeters on the
        computer using the patient’s CT images and then printed the implant on a
        3D Systems’ Kumovis R1. The manufacturing process took about 10 hours.
      </p>
      <h3>The result is "a miracle" for the patient</h3>
      <p>
        On February 10, a few days before Rainer Trummer's 55th birthday,
        Professor Gaggl and Senior Physician Enzinger performed the procedure,
        which took 6 hours - a comparatively "short" time. Enzinger said, "We
        fixed the implant to the top of the skull with 4 plates and 8 screws."
        And with a grin, he adds, "It holds bombproof!"
      </p>
      <p>
        A good 6 weeks later, the surgical wounds have largely healed. "I'm
        doing great, I'm totally happy!" beams Rainer Trummer. "I don't feel
        like I have an implant in my head, but now I have a completely 'normal'
        head. It's like a miracle for me."
      </p>
      <h3>Type B expertise center and digitization strategy</h3>
      <p>
        The Department of Oral and Maxillofacial Surgery is one of three
        so-called type B expertise centers at the University Hospital Salzburg -
        specifically for cleft lip, jaw and palate and craniofacial anomalies.
        Professor Gaggl said, "Normally, we perform operations on children for
        cranial malformations - we are all the more pleased that we have now
        been able to give a long-standing patient a new lease on life."
      </p>
      <p>
        The establishment of the 3D printing lab is part of a digitization
        strategy that the University Hospital of Salzburg has consistently
        pursued since the onset of the Covid pandemic: "We wanted to take with
        us the positive momentum that the pandemic triggered in this area,"
        explains lecturer Paul Sungler, Managing Director of the University
        Hospital Salzburg and an experienced surgeon. "We stand for digitization
        in the interest of patients, and 3D printing and its many clinical
        application possibilities are a central building block here."
      </p>
      <h3>Patient-specific plastic implants printed on Kumovis R1</h3>
      <p>
        Founded in 2017 as a spin-off of the Technical University of Munich,
        startup Kumovis GmbH was acquired by global additive manufacturing
        solutions leader, 3D Systems (NYSE:DDD) in 2022. 3D Systems offers
        personalized healthcare solutions that include the Kumovis R1 printer
        and implantable high-performance plastics such as the VESTAKEEP® i4 3DF
        (PEEK filament from Evonik Industries AG) used here.
      </p>
      <p>
        Additionally, 3D Systems team provides support in application
        development, qualification of the printers, and regulatory
        implementation of holistic process chains for manufacturing
        patient-specific medical devices.
      </p>
      <p>
        Stefan Leonhardt, director, medical devices, 3D Systems adds, "Since
        patient safety is our top priority, we have invested a lot of resources
        in biological and mechanical testing of printed implants over the last
        few years, from which innovative clinics and their patients are now
        benefiting. The entire team is extremely proud that our technology has
        now made its way into patient care."
      </p>
    </div>
  );
}
