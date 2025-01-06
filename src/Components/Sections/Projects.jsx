import React from "react";
import { config } from "../../config";

const Projects = () => {
  return (
    <section className="h-screen flex justify-start items-end md:items-end">
      <div className="p-4 w-full md:w-[500px] overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,220px)] gap-4 justify-start md:justify-center">
          {config.projects.map((project) => (
            <div
              key={project.name}
              className="bg-white/50 overflow-hidden backdrop-blur-md rounded-lg transition-all hover:bg-white hover:scale-105 cursor-pointer w-full md:min-w-0"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-[120px] sm:h-[160px] object-cover"
                  src={project.image}
                  alt={project.name}
                  onMouseEnter={() => handleProjectHover(project.image)}
                  onMouseLeave={() =>
                    handleProjectHover(config.projects[0].image)
                  }
                />
                <div className="p-3 sm:p-4">
                  <h2 className="text-[#1a202c] font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                    {project.name}
                  </h2>
                  <p className="text-[#555] text-xs sm:text-sm line-clamp-2">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
