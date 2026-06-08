import { GitGraph, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden h-full flex flex-col"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover flex-shrink-0"
      />

      <div className="p-4 flex flex-col flex-grow justify-between">

        <div>
          <h3 className="font-bold text-lg dark:text-white">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm mt-2 dark:text-gray-400 line-clamp-3 min-h-[60px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700 dark:bg-[#7f8796] dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-purple-600 text-sm hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-purple-600 text-sm hover:underline"
          >
            <GitGraph size={16} />
            GitHub
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;