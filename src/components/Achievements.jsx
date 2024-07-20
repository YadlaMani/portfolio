// components/Achievements.js
import React from "react";
import { motion } from "framer-motion";
import hackfusion from "../assets/achievements/hackfusion.jpg";
import ideathon from "../assets/achievements/ideathon.png";
import hacksquad from "../assets/achievements/hacksquad.jpg";
import hacksphere from "../assets/achievements/hacksphere.png";

const achievementsData = [
  {
    title: "HackFusion Hackathon",
    institution: "CVR College of Engineering",
    date: "March 2024",
    mode: "Offline",
    achievement:
      "Secured 1st place out of 50+ teams, winning the Hackathon in the sustainability development category for our innovative approach.",
    image: hackfusion,
  },
  {
    title: "National-level Ideathon",
    institution: "NewGen IDEC, Hyderabad",
    date: "March 2024",
    mode: "Offline",
    achievement:
      "Secured 5th place out of 100+ teams with an innovative prototype showcasing advanced user interaction design.",
    image: ideathon,
  },
  {
    title: "Hacksquad 2023",
    institution: "Novu",
    date: "October 2023",
    mode: "Online",
    achievement:
      "Placed 5th out of nearly 2000 teams worldwide, recognizing our dedication to open-source projects.",
    image: hacksquad,
  },
  {
    title: "HackSpeare Hackathon",
    institution: "BITS Pilani, Hyderabad Campus",
    achievement:
      "Placed 2nd position. Developed a real-time collaboration tool prototype in 24 hours.",
    image: hacksphere,
  },
];

const Achievements = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
        Achievements
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover="hover"
            layout
            transition={{ layout: { duration: 0.5, type: "spring" } }}
            style={{
              marginTop: index % 2 === 0 ? "2rem" : "0",
              marginBottom: index % 2 === 0 ? "0" : "2rem",
            }}
          >
            <motion.img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500"
              variants={{
                hover: { opacity: 1 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-lg mb-2">{achievement.institution}</p>
              <p className="text-lg mb-2">{achievement.date}</p>
              <p className="text-md mb-2">{achievement.mode}</p>
              <p className="text-md font-light">{achievement.achievement}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
