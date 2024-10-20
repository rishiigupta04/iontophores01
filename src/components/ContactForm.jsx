import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // Added phone and email icons
import { z } from "zod";
import { supabase } from "../../supabaseClient";

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z
    .string()
    .regex(/^\d{10}$/, { message: "Contact number must be 10 digits" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" }),
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      // Set validation errors
      const fieldErrors = validationResult.error.format();
      setErrors({
        name: fieldErrors.name?._errors[0],
        email: fieldErrors.email?._errors[0],
        number: fieldErrors.number?._errors[0],
        subject: fieldErrors.subject?._errors[0],
        message: fieldErrors.message?._errors[0],
      });
      setStatusMessage(null); // Reset status message
      return;
    }

    try {
      // Insert data into Supabase if validation is successful
      const { data, error } = await supabase
        .from("formSubmissions")
        .insert([formData]);

      if (error) {
        setStatusMessage("Failed to send message. Please try again."); // Set failure message
        console.error("Error inserting data:", error);
      } else {
        setStatusMessage("Message sent successfully!"); // Set success message
        console.log("Data inserted successfully:", data);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    } catch (err) {
      setStatusMessage("An error occurred. Please try again."); // Set failure message for unexpected errors
      console.error("Submission error:", err);
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
        Have questions about our innovative Iontophoresis devices? Reach out to
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
            <button type="submit" onClick={handleSubmit}>
              Send Message
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
                href="https://forms.gle/HZih8ZStNjkRy7SS9"
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
              <FaEnvelope /> <strong>Email:</strong> rahulkumargupta@iitb.ac.in
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
