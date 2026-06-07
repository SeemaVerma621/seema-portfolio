import { GitGraph, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-lg transition-all duration-300 dark:bg-gray-900 shadow-xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 h-full">
        <h3 className="font-bold text-lg">{project.title}</h3>

        <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
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

        <div className="flex gap-4 mt-4">
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-1 text-purple-600 text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 text-purple-600 text-sm"
          >
            <GitGraph size={16} />
            GitHub
          </a>
        </div>
      </div>
      </div>
  
  );
};

export default ProjectCard