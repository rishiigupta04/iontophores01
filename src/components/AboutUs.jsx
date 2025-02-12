import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src="/award.jpg"
              alt="Drepto Biomedical Devices® research team"
              width="400"
              height="300"
              className="about-image-img"
            />
          </div>
          <div className="about-text">
            <p>
              Our iontophoretic patch for transdermal methotrexate delivery has
              undergone rigorous development, leveraging cutting-edge
              technology, and extensive research. The innovative design ensures
              controlled and consistent drug release, significantly reducing the
              required dosage and minimizing side effects. Our patch offers a
              non-invasive, painless alternative to traditional methods,
              enhancing patient compliance and comfort.
            </p>
            <br />
            <p>
              By integrating our advanced Drepto Biomedical Device technology,
              we provide a precise, efficient, and patient-friendly solution for
              rheumatoid arthritis treatment, setting a new benchmark in drug
              delivery innovation.
            </p>
          </div>
        </div>
        <div id="testimonials" className="testimonials">
          <div className="container">
            <h2>Our Team</h2>
            <div className="testimonial-grid">
              <div className="testimonial">
                <img
                  src="/rahulsir.jpeg"
                  alt="Rahul Kumar Gupta"
                  width="60"
                  height="60"
                />
                <h3>Rahul Kumar Gupta</h3>
                <p>
                  Founder and CEO <br />{" "}
                  <span style={{ opacity: "100" }}>
                    Drepto Biomedical Devices®
                  </span>
                </p>
              </div>
              <div className="testimonial">
                <img
                  src="/rohitsir.jpeg"
                  alt="Prof. Rohit Srivastava"
                  width="60"
                  height="60"
                />
                <h3>Prof. Rohit Srivastava</h3>
                <p>
                  Co-Founder, Mentor <br />
                  Prof. IIT Bombay
                </p>
              </div>
              <div className="testimonial">
                <img
                  style={{ objectPosition: "top" }}
                  src="/dr_rupesh.jpg"
                  alt="Dr. Rupesh Ghyar"
                  width="60"
                  height="60"
                />
                <h3>Dr. Rupesh Ghyar</h3>
                <p>
                  Technical Advisor <br />
                  Alumnus, IIT Bombay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission-vision">
          <h3>Our Mission</h3>
          <p>
            Our mission is to revolutionize the treatment of rheumatoid
            arthritis by providing an innovative, non-invasive, and
            patient-friendly transdermal methotrexate delivery solution. We aim
            to improve patient outcomes, safety, and compliance by reducing
            dosage requirements and side effects. Through cutting-edge
            technology and a commitment to excellence, we strive to capture a
            significant share of the evolving RA and iontophoretic markets,
            ultimately enhancing the quality of life for millions worldwide.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision is to revolutionize the treatment of rheumatoid
            arthritis, transforming lives with our innovative drug delivery
            systems. We dream of a world where patients experience relief
            without the burden of invasive procedures or harsh side effects.
            Driven by compassion and a commitment to excellence, we aim to set
            new standards in healthcare, making advanced, patient-friendly
            solutions accessible to all. By relentlessly pursuing innovation and
            prioritizing patient well-being, we strive to enhance the quality of
            life for millions, offering hope and healing to those in need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
