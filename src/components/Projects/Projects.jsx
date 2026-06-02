import React from "react";
import "./Projects.css";

import projects from "../../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="container">

        <p className="projects-tag">
          MY PROJECTS
        </p>

        {/* <h2 className="projects-title">
          Featured Projects
        </h2> */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {projects.map((project, index) => (
            <SwiperSlide key={index}>

              <div className="project-card">

                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span>{project.tech}</span>

                  <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>

                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a> */}

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Projects;