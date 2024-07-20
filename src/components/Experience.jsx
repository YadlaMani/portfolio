// components/Experience.js
import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="border-2 border-gray-300 p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {experience.role}
                </h3>
                <h4 className="text-xl text-gray-700 mb-4">
                  {experience.company} &nbsp;{experience.year}
                </h4>
                <p className="text-gray-600 mb-4">{experience.description}</p>
              </div>
              <div className="lg:w-1/3 lg:pl-8 mt-4 lg:mt-0">
                <h4 className="text-xl font-semibold text-black mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="p-2 bg-gray-100 rounded-lg text-black text-sm font-medium shadow hover:shadow-md transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
