import { React, useState, useEffect } from "react";
import cindara from "../assets/planetfire.png";
import aetheron from "../assets/planetjup.png";
import nyxora from "../assets/planetpurple.png";

const planets = [
  {
    name: "Cindara",
    project: [
      {
        name: "DropAlert",
        year: "2025",
        description: "Predicts student dropouts using machine learning.",
        tech: ["Python", "Scikit-learn", "Pandas"],
        link: "https://github.com/yourusername/dropalert",
      },
    ],
  },
  {
    name: "Aetheron",
    project: [
      {
        name: "AmusePark",
        year: "2024",
        description: "Java OOP-based amusement park simulator.",
        tech: ["Java"],
        link: "https://github.com/yourusername/amusepark", // Add a link here if needed
      },
    ],
  },
  {
    name: "Nyxora",
    project: [
      {
        name: "Motion AI",
        year: "2025",
        description: "Pose detection using OpenCV for workout form correction.",
        tech: ["Python", "OpenCV"],
        link: "https://github.com/yourusername/motion-ai",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden px-4 py-14 flex justify-center items-center"
    >
      <div>
        {/** Heading */}
        <h2 className="font-winky font-bold text-4xl bg-blue-500 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        {/** Orbits */}
        <div className="relative w-[48rem] h-[48rem] mt-7">
          <div className="absolute inset-0 border border-white/30 rounded-full">
            <img src={cindara} alt="planet cindara"></img>
          </div>
          <div className="absolute inset-[5rem] border border-white/30 rounded-full"></div>
          <div className="absolute inset-[10rem] border border-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
