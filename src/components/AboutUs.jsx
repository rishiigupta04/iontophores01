import React from "react";
import { Linkedin } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <h2 className="section-heading">About Company and CEO</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src="award.jpg"
              alt="Company Achievement"
              className="achievement-image"
            />
          </div>

          <div className="about-text">
            <div className="award-image-container">
              <img
                width={400}
                src="awardd2.jpg"
                alt="Company Recognition"
                className="award-image"
              />
            </div>
            <div>
              <p>
                <span style={{ fontWeight: "bold", textAlign: "left" }}>
                  Drepto's
                </span>{" "}
                patch for transdermal methotrexate delivery has undergone
                rigorous development, leveraging cutting-edge technology, and
                extensive research. The innovative design ensures controlled and
                consistent drug release, significantly reducing the required
                dosage and minimizing side effects. Our patch offers a
                non-invasive, painless alternative to traditional methods,
                enhancing patient compliance and comfort. <br /> <br /> By
                integrating our advanced technology, we provide a precise,
                efficient, and patient-friendly solution for rheumatoid
                arthritis treatment, setting a new benchmark in drug delivery
                innovation.
              </p>
            </div>
          </div>
        </div>
        <div id="testimonials" className="testimonials">
          <div className="container" id="team-links">
            <h2 className="section-title">Our Team</h2>
            <div className="testimonial-grid">
              <div className="testimonial">
                <img
                  src="/rahulsir.jpeg"
                  alt="Rahul Kumar Gupta"
                  className="team-member-image"
                />
                <h3>Rahul Kumar Gupta</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/rahul-kumar-gupta-4b8bb8190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </p>
                <p>
                  Founder and CEO <br />
                  <span>IIT Bombay</span>
                </p>
              </div>
              <div className="testimonial">
                <img
                  src="/rohitsir.jpeg"
                  alt="Prof. Rohit Srivastava"
                  className="team-member-image"
                />
                <h3>Prof. Rohit Srivastava</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/rohit-srivastava-02bb2b16/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </p>
                <p>
                  Scientific Advisor, Mentor
                  <br />
                  Prof. IIT Bombay
                </p>
              </div>
              <div className="testimonial">
                <img
                  src="/dr_rupesh.jpg"
                  alt="Dr. Rupesh Ghyar"
                  className="team-member-image"
                />
                <h3>Dr. Rupesh Ghyar</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/rupesh-ghyar-7510442b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </p>
                <p>
                  Technical Advisor <br />
                  Alumnus, IIT Bombay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission-vision">
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-text">
            Our mission is to revolutionize the treatment of rheumatoid
            arthritis by providing an innovative, non-invasive, and
            patient-friendly transdermal methotrexate delivery solution. We aim
            to improve patient outcomes, safety, and compliance by reducing
            dosage requirements and side effects. Through cutting-edge
            technology and a commitment to excellence, we strive to capture a
            significant share of the evolving RA and iontophoretic markets,
            ultimately enhancing the quality of life for millions worldwide.
          </p>

          <h3 className="vision-title">Our Vision</h3>
          <p className="vision-text">
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
