import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess("Message sent successfully!");
      setError("");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="contact-tag">CONTACT</p>

        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>yedurudileep771981@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 8260396798</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="success-message">{success}</p>
            )}

            {error && (
              <p className="error-message">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;