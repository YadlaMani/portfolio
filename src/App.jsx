import React from "react";
import Hero from "./components/Hero";
import TopNav from "./components/TopNav"; // Updated to use TopNav
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import CodingProfiles from "./components/CodingProfile";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
export default function App() {
  return (
    <div className="relative min-h-screen text-neutral-300 antialiased select-none selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Navigation */}
      <TopNav />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 mt-20 md:mt-24">
        {/* Sections with IDs for smooth scrolling */}
        <section id="hero">
          <Hero />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="codingprofiles">
          <CodingProfiles />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
      <SocialLinks />
    </div>
  );
}
