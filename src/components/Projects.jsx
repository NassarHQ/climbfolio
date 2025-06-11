import { React, useState, useEffect } from "react";
import cindara from "../assets/planetOne.png";
import aetheron from "../assets/planetTwo.png";
import nyxora from "../assets/planetThree.png";
import sun from "../assets/sun.png";

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
        <div className="relative w-[65rem] h-[65rem] mt-7">
          {/* Orbit 1 */}
          <div className="absolute inset-0 border border-white/30 rounded-full animate-[spin_60s_linear_infinite]">
            <div className="absolute left-1/2 top-1/2">
              <div className="translate-x-[29rem] -translate-y-1/2">
                <img src={cindara} alt="planet cindara" className="w-24 h-24" />
              </div>
            </div>
          </div>

          {/* Orbit 2 */}
          <div className="absolute inset-[10rem] border border-white/30 rounded-full animate-[spin_90s_linear_infinite]">
            <div className="absolute left-1/2 top-1/2">
              <div className="translate-x-[19rem] -translate-y-1/2">
                <img
                  src={aetheron}
                  alt="planet aetheron"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Orbit 3 */}
          <div className="absolute inset-[20rem] border border-white/30 rounded-full animate-[spin_120s_linear_infinite]">
            <div className="absolute left-1/2 top-1/2">
              <div className="translate-x-[9rem] -translate-y-1/2">
                <img
                  src={nyxora}
                  alt="planet nyxora"
                  className="w-24 h-24 bg-transparent bg-clip-border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-40 h-40 flex items-center justify-center mt-16">
        {/* Glow aura */}
        <div className="absolute w-[400%] h-[400%] rounded-full bg-[rgba(255,166,0,0.35)] blur-[150px]"></div>

        {/* Sun */}
        <img
          src={sun}
          alt="Sun"
          className="w-32 h-32 rounded-full animate-[spin_100s_linear_infinite]"
        />
      </div>
    </section>
  );
};

export default Projects;
