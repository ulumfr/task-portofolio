import React from "react";
import CardProject from "../components/card/cardproject";
import { projects } from "../data/projectdata";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <motion.section
      className="text-primary-color"
      id="projects"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-10 sm:px-28 lg:px-8 pt-16">
        <h2
          className="text-center text-3xl font-semibold mb-3"
          data-aos="zoom-in"
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <CardProject
                imgPath={project.imgPath}
                title={project.title}
                sub={project.sub}
                text={project.text}
                projectLink={project.projectLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
