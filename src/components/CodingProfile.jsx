import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegStickyNote } from "react-icons/fa";

const profiles = [
  {
    name: "LeetCode",
    rating: "1,834",
    problemsSolved: "400+",
    icon: <SiLeetcode className="w-12 h-12 text-yellow-500" />,
    link: "https://leetcode.com/u/yadla_mani/",
  },
  {
    name: "CodeChef",
    rating: "1658 - 3 stars",
    problemsSolved: "200+",
    icon: <SiCodechef className="w-12 h-12 text-red-500" />,
    link: "https://www.codechef.com/users/blank003",
  },
];

const profileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const problemsSolvedVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const CodingProfiles = () => {
  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Coding Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
              variants={profileVariants}
              initial="hidden"
              animate="visible"
              onClick={() => handleRedirect(profile.link)}
            >
              <div className="flex items-center mb-6">
                {profile.icon}
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                  {profile.name}
                </h3>
              </div>
              <div className="flex items-center mb-6 space-x-3">
                <BsGraphUpArrow className="w-8 h-8 text-gray-600" />
                <span className="text-gray-700 text-lg font-medium">
                  {profile.rating}
                </span>
              </div>
              <motion.div
                className="flex items-center space-x-3"
                variants={problemsSolvedVariants}
                initial="hidden"
                animate="visible"
              >
                <FaRegStickyNote className="w-8 h-8 text-blue-500" />
                <span className="text-gray-700 text-lg font-semibold">
                  {profile.problemsSolved} Problems Solved
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            GitHub Contributions
          </h3>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=YadlaMani" // Replace with your GitHub username
            alt="GitHub Contributions"
            className="mx-auto rounded-lg shadow-lg border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
