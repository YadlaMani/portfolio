import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const sections = [
  { id: "techstack", title: "Tech Stack" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "codingprofiles", title: "Coding Profiles" },
];

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundColor = "#FF5A5F"; // Airbnb red
  const linkColor = "#FFFFFF"; // White for the text
  const underlineColor = "#FEEBC8"; // Light yellow underline color

  return (
    <nav
      className="fixed top-0 left-0 w-full shadow-lg z-50"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
            YMN
          </p>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="relative text-white font-bold group"
            >
              {section.title}
              <span
                className="absolute left-0 bottom-0 block h-1 w-0 bg-[${underlineColor}] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: underlineColor }}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[${backgroundColor}] text-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="text-xl cursor-pointer text-white font-bold relative group"
              onClick={() => setIsOpen(false)}
            >
              {section.title}
              <span
                className="absolute left-0 bottom-0 block h-1 w-0 bg-[${underlineColor}] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: underlineColor }}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
