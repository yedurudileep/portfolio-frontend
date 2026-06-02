import React from "react";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <h2 className="footer-logo">
          Dileep
        </h2>

        <p className="footer-text">
          Aspiring Software Engineer | MERN Stack Developer
        </p>

        <div className="footer-socials">

          <a href="https://github.com/yedurudileep">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dileep-kumar-reddy-yeduru-494b25276/" target="_blank" rel="noreferrer" >
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/yeduru_dileep_kumar/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

        </div>

        <p className="footer-copy">
          © 2026 Dileep Kumar Reddy Yeduru.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;