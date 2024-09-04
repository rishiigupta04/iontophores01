import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
    // Here you would typically send the data to your backend
  };

  return (
    <section id="contact" className="container">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Contact Us
      </h1>
      <h4 style={{ textAlign: "center", fontWeight: "normal" }}>
        Have questions about our innovative Iontophoresis devices? Reach out to
        us and let's start a conversation now!
      </h4>

      <div className="contact-grid">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form
            action="https://iontophoretic-devices.io/submit-form"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                style={{ border: "1px solid #00857c" }}
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                style={{ border: "1px solid #00857c" }}
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Contact Number:</label>
              <input
                style={{ border: "1px solid #00857c" }}
                type="number"
                id="number"
                name="number"
                required
                value={formData.number}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                style={{ border: "1px solid #00857c" }}
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                style={{ border: "1px solid #00857c" }}
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Customer Support</h2>
          <h3 style={{ fontWeight: "normal" }}>
            Our dedicated support team is available to assist you with any
            inquiries or concerns. <br /> <br />
          </h3>
          <p>
            <strong>Phone:</strong> 022 25764761
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span style={{ display: "inline" }}>
              rahulkumargupta@iitb.ac.in
            </span>
          </p>
          <p>
            <strong>Working Hours:</strong> Monday - Friday, 9am - 5pm IST
          </p>

          <h2>Connect With Us</h2>
          <h3 style={{ fontWeight: "normal" }}>
            Stay updated with our latest news and breakthrough innovations in RA
            treatment.
          </h3>
          <div className="social-links">
            <a href="#" target="_blank" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" title="Twitter">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" title="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
