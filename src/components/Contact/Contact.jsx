import React, { useState } from "react";
import axios from "axios";
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
    console.log("API URL =", import.meta.env.VITE_API_URL);

console.log(
  "Full URL =",
  `${import.meta.env.VITE_API_URL}/api/contact`
);

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      );

      setSuccess(response.data.message);
      setError("");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");

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
          {/* Left Side */}

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

          {/* Right Side */}

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="success-message">{success}</p>}

            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
