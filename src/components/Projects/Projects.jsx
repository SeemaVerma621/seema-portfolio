import React from "react";
import ProjectsData from "../Data/ProjectsData.json";
import ProjectCard from "../Common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="px-5 md:px-20 py-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="w-12 h-1 bg-purple-600 rounded-full mt-2"></div>
        </div>

        {/* <button className="text-purple-600 font-medium">
          View All Projects →
        </button> */}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;