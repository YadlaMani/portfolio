import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/ProfileImage.jpg";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 py-8 lg:px-16 lg:py-12 bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0 space-y-4">
        <motion.img
          src={ProfileImage}
          alt="Profile"
          className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          Mani Yadla
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          {HERO_CONTENT}
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
