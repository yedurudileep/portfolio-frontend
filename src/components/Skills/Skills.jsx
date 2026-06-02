import React from "react";
import "./Skills.css";

import skills from "../../data/skills";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="skills-tag">MY SKILLS</p>

        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
