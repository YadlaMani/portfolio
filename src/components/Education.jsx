// components/Education.js
import React from "react";
import { motion } from "framer-motion";
import ClgImg from "../assets/cvr-image.jpg";

const educationData = {
  college: "CVR College of Engineering",
  degree: "B.Tech in Computer Science and Engineering",
  year: "2022 - 2026",
  percentage: "95.6%",
};

const Education = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="relative">
        <motion.div
          className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg"
          whileHover="hover"
        >
          <img
            src={ClgImg}
            alt={educationData.college}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500"
            variants={{
              hover: { opacity: 1 },
            }}
          >
            <h3 className="text-3xl font-semibold mb-2">
              {educationData.college}
            </h3>
            <p className="text-xl mb-2">{educationData.degree}</p>
            <p className="text-xl mb-2">{educationData.year}</p>
            <p className="text-lg font-semibold">
              Percentage: {educationData.percentage}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
