import React from "react";
import { motion } from "framer-motion";
import ProjectsData from "../Data/ProjectsData.json";
import ProjectCard from "../Common/ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="px-5 md:px-20 py-10">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="flex justify-between items-center mb-10"
      >
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="w-12 h-1 bg-purple-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 items-stretch"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ProjectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;