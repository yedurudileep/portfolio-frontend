import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/passphoto.jpeg";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-title">
            Dileep Kumar <br />
            Reddy Yeduru
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Software Engineer",
              2000,
              "Web Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="hero-role"
          />

          <p className="hero-description">
            I am a BTech Computer Science graduate with a strong foundation
            in Java, Data Structures & Algorithms, and Full Stack Web
            Development. I enjoy building scalable applications and
            continuously improving my problem-solving skills.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>

            <a href="/resume.pdf" download className="btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/yedurudileep"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a> */}
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image">
          <div className="image-circle">
            <img src={heroImage} alt="Dileep" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;