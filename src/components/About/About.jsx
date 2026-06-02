import React from "react";
import "./About.css";

import heroImage from "../../assets/images/passphoto.jpeg";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Left Side */}

        <div className="about-left">

          <div className="about-image-card">
            <img
              src={heroImage}
              alt="Dileep"
            />
          </div>

        </div>

        {/* Right Side */}

        <div className="about-right">

          <p className="section-tag">
            ABOUT ME
          </p>

          <h2>
            Computer Science Graduate 🚀
          </h2>

          <p>
            I am a passionate software developer with strong
            knowledge in Java, Data Structures & Algorithms,
            React, Node.js and MongoDB.
          </p>

          <p>
            I enjoy building scalable web applications,
            solving coding problems and continuously
            improving my development skills.
          </p>

          <div className="about-info">

            <div className="info-card">
              <span>Name</span>
              <h4>Dileep Kumar Reddy Yeduru</h4>
            </div>

            <div className="info-card">
              <span>Degree</span>
              <h4>B.Tech CSE</h4>
            </div>

            <div className="info-card">
              <span>Email</span>
              <h4>yedurudileep771981@gmail.com</h4>
            </div>

            <div className="info-card">
              <span>Location</span>
              <h4>Andhra Pradesh</h4>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;