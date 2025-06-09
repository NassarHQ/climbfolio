import { React, useState, useEffect } from "react";

const projects = [
  {
    name: "DropAlert",
    year: "2025",
    description: "Predicts student dropouts using machine learning.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    link: "https://github.com/yourusername/dropalert",
  },
  {
    name: "AmusePark",
    year: "2024",
    description: "Java OOP-based amusement park simulator.",
    tech: ["Java"],
    link: "https://github.com/yourusername/amusepark",
  },
  {
    name: "Motion AI",
    year: "2025",
    description: "Pose detection using OpenCV for workout form correction.",
    tech: ["Python", "OpenCV"],
    link: "https://github.com/yourusername/motion-ai",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="">
      <div>
        <h2 className="font-winky font-bold text-4xl bg-blue-500 bg-clip-text text-transparent flexjustify-center">
          Projects
        </h2>
      </div>
    </section>
  );
};

export default Projects;
