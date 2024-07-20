// components/Projects.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="flex gap-8">
        {/* Project List */}
        <div className="w-1/3">
          <div className="border-2 border-gray-300 rounded-lg bg-white shadow-md">
            <div className="p-4">
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.title}
                  className={`p-4 cursor-pointer rounded-lg mb-4 hover:bg-gray-100 transition-all duration-300 flex items-center justify-between ${
                    selectedProject.title === project.title
                      ? "border-2 border-blue-600 bg-blue-50 text-blue-900"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => handleProjectClick(project)}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <motion.div
                    className={`h-3 w-3 rounded-full ${
                      selectedProject.title === project.title
                        ? "bg-blue-600"
                        : "bg-transparent"
                    }`}
                    layoutId="indicator"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="w-2/3">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover transition-transform duration-500 ease-in-out"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-700 py-1 px-3 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
