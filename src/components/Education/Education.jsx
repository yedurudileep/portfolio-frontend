import React from "react";
import "./Education.css";
import {
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">

        <p className="section-tag">
          EDUCATION
        </p>

        <h2 className="section-title">
          My Academic Journey
        </h2>

        {/* Education */}

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <h3>
            Bachelor of Technology (B.Tech)
          </h3>

          <h4>
            Computer Science & Engineering
          </h4>

          <p className="college-name">
            Aditya Institute of Technology and Management
          </p>

          <p className="education-year">
            2022 - 2026
          </p>

          <p className="education-cgpa">
            CGPA: 8.97
          </p>

        </div>

        {/* Achievements */}

        <div className="achievement-card">

          <div className="achievement-icon">
            <FaTrophy />
          </div>

          <h3>
            Achievements
          </h3>

          <ul className="achievement-list">

            <li>
              <FaCheckCircle />
              Secured First Place in a College Web Development Hackathon
            </li>

            <li>
              <FaCheckCircle />
              Solved 90+ Problems on LeetCode
            </li>

            <li>
              <FaCheckCircle />
              Built and Deployed Multiple React & MERN Projects
            </li>

          </ul>

        </div>

        {/* Certifications */}

        <div className="certification-card">

          <div className="certification-icon">
            <FaCertificate />
          </div>

          <h3>
            Certifications
          </h3>

          <ul className="achievement-list">

            <li>
              <FaCheckCircle />
              ServiceNow Certified System Administrator (CSA)
            </li>

            <li>
              <FaCheckCircle />
              ServiceNow Certified Application Developer (CAD)
            </li>

            <li>
              <FaCheckCircle />
              Introduction to SQL - Simplilearn
            </li>

            <li>
              <FaCheckCircle />
              NPTEL - Introduction to Machine Learning
            </li>

          </ul>

        </div>

        {/* Internship */}

        <div className="internship-card">

          <div className="internship-icon">
            <FaBriefcase />
          </div>

          <h3>
            Internship Experience
          </h3>

          <h4>
            ServiceNow CAD & CSA Intern
          </h4>

          <p className="college-name">
            SmartBridge (Remote)
          </p>

          <p className="education-year">
            May 2025 - June 2025
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;