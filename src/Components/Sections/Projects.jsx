import React from "react";
import { config } from "../../config";

const Projects = () => {
  return (
    <section className="h-screen flex justify-start items-end md:items-end">
      <div className="p-4 grid md:grid-cols-[repeat(auto-fit,220px)] w-full md:w-[500px] justify-center gap-4 flex md:flex-none overflow-x-auto">
        {config.projects.map((project) => (
          <div
            key={project.name}
            className="bg-white/50 overflow-hidden backdrop-blur-md rounded-lg transition-all hover:bg-white hover:scale-105 cursor-pointer min-w-[220px] md:min-w-0"
          >
            <a href={project.link} target="_blank">
              <img
                className="w-full object-cover"
                src={project.image}
                alt={project.name}
                onMouseEnter={() => handleProjectHover(project.image)}
                onMouseLeave={() =>
                  handleProjectHover(config.projects[0].image)
                }
              />
              <div className="p-2">
                <h2 className="text-[#1a202c] font-bold text-xl m-0">
                  {project.name}
                </h2>
                <p className="text-[#555] text-base m-0">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
