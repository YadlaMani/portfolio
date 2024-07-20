import React from "react";
import { motion } from "framer-motion";

const techStack = {
  languages: [
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "python logo",
    },
    {
      name: "C++",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      alt: "cplusplus logo",
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "java logo",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "javascript logo",
    },
    {
      name: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      alt: "c logo",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "typescript logo",
    },
    {
      name: "Solidity",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      alt: "solidity logo",
    },
    {
      name: "Bash",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      alt: "bash logo",
    },
  ],
  frameworks: [
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      alt: "bootstrap logo",
    },
    {
      name: "Express.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "express logo",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "nextjs logo",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "react logo",
    },
    {
      name: "Socket.io",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      alt: "socketio logo",
    },
    {
      name: "Firebase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      alt: "firebase logo",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      alt: "tailwindcss logo",
    },
  ],
  tools: [
    {
      name: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "figma logo",
    },
    {
      name: "Canva",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      alt: "canva logo",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "git logo",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "github logo",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "mongodb logo",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "mysql logo",
    },
    {
      name: "Redis",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      alt: "redis logo",
    },
    {
      name: "Google Cloud",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      alt: "googlecloud logo",
    },
  ],
};

const TechStack = () => {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 relative">
        <span className="bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="p-6 rounded-lg bg-white shadow-md border-2 border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 pb-2 text-black">
            Programming Languages
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {techStack.languages.map((tech) => (
              <motion.div
                key={tech.name}
                className="p-4 border-2 border-gray-300 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:shadow-lg hover:border-gray-400 hover:bg-gray-50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={tech.src}
                  height="40"
                  width="40"
                  alt={tech.alt}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-125"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-lg bg-white shadow-md border-2 border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 pb-2 text-black">
            Frameworks/Libraries
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {techStack.frameworks.map((tech) => (
              <motion.div
                key={tech.name}
                className="p-4 border-2 border-gray-300 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:shadow-lg hover:border-gray-400 hover:bg-gray-50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={tech.src}
                  height="40"
                  width="40"
                  alt={tech.alt}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-125"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-lg bg-white shadow-md border-2 border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 pb-2 text-black">
            Tools
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {techStack.tools.map((tech) => (
              <motion.div
                key={tech.name}
                className="p-4 border-2 border-gray-300 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:shadow-lg hover:border-gray-400 hover:bg-gray-50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={tech.src}
                  height="40"
                  width="40"
                  alt={tech.alt}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-125"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
