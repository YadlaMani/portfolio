import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-4 z-50">
      <a
        href="https://www.linkedin.com/in/yadla-mani"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 hover:text-[#0077B5] text-3xl text-black"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/YadlaMani"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 hover:text-[#8B30AA] text-3xl text-black"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/mani_yadla"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 hover:text-[#1DA1F2] text-3xl text-black"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:yadlamaniymn@gmail.com"
        className="transition-transform transform hover:scale-110 hover:text-[#FF5A5F] text-3xl text-black"
        aria-label="Send Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
