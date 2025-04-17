import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Added phone and email icons
import { z } from "zod";
// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string({ message: "Name is not valid" }),

  email: z.string().email({ message: "Invalid email address" }),
  number: z.string().regex(/^\d{10}$/, { message: "Invalid Contact Number" }),
  subject: z.string().min(3, { message: "Subject too short" }),
  message: z
    .string()
    .min(5, { message: "Message too short, please elaborate." }),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null); // State for status message
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.format();
      setErrors({
        name: fieldErrors.name?._errors[0],
        email: fieldErrors.email?._errors[0],
        number: fieldErrors.number?._errors[0],
        subject: fieldErrors.subject?._errors[0],
        message: fieldErrors.message?._errors[0],
      });
      setStatusMessage(null);
      return;
    }

    setIsLoading(true); // Start loading
    setStatusMessage(null); // Clear previous status messages
    setErrors({}); // Clear previous errors

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx8FDhsKagKKHWHzkKd8ddDD-XPJ5fsdw8P9r_2mBfh-B53EEf_uqRKuYweRVYwmNEd/exec",
        {
          method: "POST",
          mode: "no-cors", // prevent CORS errors
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Submission error:", err);
      setStatusMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading regardless of outcome
    }
  };

  return (
    <section id="contact" className="container">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Contact Us
      </h1>
      <h4
        style={{ textAlign: "center", fontWeight: "normal", fontSize: "20px" }}
      >
        Have questions about our innovative iontophoretic device? Reach out to
        us and let's start a conversation now!
      </h4>

      <div className="contact-grid">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
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
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="number">Contact Number:</label>
              <input
                style={{ border: "1px solid #00857c" }}
                type="text"
                id="number"
                name="number"
                required
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
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
              {errors.subject && (
                <p style={{ color: "red" }}>{errors.subject}</p>
              )}
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
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message}</p>
              )}
            </div>
            <button type="submit" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Display status message */}
          {statusMessage && (
            <p
              style={{
                color: statusMessage.includes("successfully") ? "green" : "red",
              }}
            >
              {statusMessage}
            </p>
          )}
        </div>

        <div className="contact-info">
          <h2 style={{ textAlign: "center", fontSize: "30px" }}>
            We're Growing Fast and Hiring!
          </h2>
          <h3 style={{ fontWeight: "normal", textAlign: "center" }}>
            Join our team and help shape the future of technology. <br /> <br />
          </h3>
          <section style={{ marginBottom: "40px" }}>
            <div>
              <a
                href="https://forms.gle/Li6JY1YQW5fs8bUW8"
                target="blank"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundColor: "#00857c",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                Submit Your Application
              </a>
            </div>
          </section>
          <hr />
          <div style={{ paddingTop: "5px" }}>
            <h2>Connect With Us</h2>
            <p>
              <FaPhone /> <strong>Phone:</strong> 022 25764761
            </p>
            <p style={{ marginTop: "10px" }}>
              <FaEnvelope /> <strong>Email:</strong>{" "}
              rahulkgupta@dreptobiodevices.com
            </p>
            <p style={{ marginTop: "10px" }}>
              <strong>Working Hours:</strong> Monday - Friday, 9am - 5pm IST
            </p>
          </div>

          {/* Optional: Add social media links if needed */}
          {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} style={{ margin: "0 10px" }} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} style={{ margin: "0 10px" }} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} style={{ margin: "0 10px" }} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
