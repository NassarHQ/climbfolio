import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Calendar,
  Code,
  Sparkles,
  MousePointer2,
} from "lucide-react";
import cindara from "../assets/planetOne.png";
import aetheron from "../assets/planetTwo.png";
import nyxora from "../assets/planetThree.png";
import sun from "../assets/sun.png";

const planets = [
  {
    name: "Cindara",
    image: cindara,
    color: "#FF6B6B",
    orbitRadius: "29rem",
    orbitSpeed: "60s",
    project: {
      name: "DropAlert",
      year: "2025",
      description:
        "Developed a machine learning model to predict student dropout risk using Python, achieving 86% accuracy and 0.78 F1-score. Implemented SMOTE to address class imbalance and engineered features to improve predictive performance.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "SMOTE", "SQL"],
      link: "https://github.com/NassarHQ/DropAlert",
      features: [
        "Developed dropout prediction model",
        "Applied SMOTE for class balancing",
        "Feature engineering for accuracy improvement",
        "86% accuracy, 0.78 F1-score",
      ],
    },
  },
  {
    name: "Aetheron",
    image: aetheron,
    color: "#4ECDC4",
    orbitRadius: "19rem",
    orbitSpeed: "90s",
    project: {
      name: "AmusePark",
      year: "2024",
      description:
        "Designed and implemented a modular Java-based amusement park management system managing 20+ entities including rides, stores, and visitors. Focused on scalability and maintainability through clean object-oriented design.",
      tech: ["Java", "OOP Design", "System Architecture"],
      link: "https://github.com/NassarHQ/CS151_07_amusement_park_2024",
      features: [
        "Managed 20+ entities",
        "Scalable and maintainable OOP architecture",
        "Clean modular design",
        "Backend system for park operations",
      ],
    },
  },
  {
    name: "Nyxora",
    image: nyxora,
    color: "#A8E6CF",
    orbitRadius: "9rem",
    orbitSpeed: "120s",
    project: {
      name: "Motion AI",
      year: "2024",
      description:
        "Collaborated on a team project using Python and OpenCV, achieving 95% pose feedback accuracy. Integrated Generative AI APIs for pose analysis, improving accuracy by 12%, and optimized preprocessing to improve speed by 30%. Ensured code quality through unit testing and peer review.",
      tech: ["Python", "OpenCV", "Generative AI APIs", "Data Structures"],
      link: null, // No repo yet
      comingSoon: true, // Show 'Coming Soon' instead of 'View Repo'
      features: [
        "Pose analyzer with 95% accuracy",
        "Generative AI integration for +12% accuracy",
        "Optimized preprocessing for 30% faster speed",
        "Unit testing and peer-reviewed contributions",
      ],
    },
  },
];

const sunProject = {
  name: "Sun",
  image: sun,
  color: "#FFD93D",
  project: {
    name: "MPEA Research",
    year: "2024",
    description:
      "Implemented a predictive model to estimate MPEA elastic constants, reducing reliance on DFT simulations by 50%. Incorporated physical descriptors to improve prediction accuracy by 18%.",
    tech: [
      "Python",
      "Machine Learning",
      "Google Cloud",
      "Research & Development",
    ],
    link: "https://www.sjsu.edu/projectengineeringsuccess/pics/Santosh%20KC%202%20-%202024.jpg",
    features: [
      "Reduced DFT simulation cost by 50%",
      "Integrated physical descriptors",
      "18% accuracy improvement",
      "Applied to materials science research",
    ],
  },
};

const Projects = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstructions(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlanetClick = (planet) => setSelectedPlanet(planet);
  const closePlanetDetail = () => setSelectedPlanet(null);

  return (
    <section
      id="projects"
      className="w-full overflow-hidden px-4 py-14 flex justify-center items-center"
    >
      {/* anti-spin keyframes */}
      <style>{`
        @keyframes anti-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>

      <div className="relative">
        {/* Heading */}
        <h2 className="font-winky font-bold text-4xl bg-blue-500 bg-clip-text text-transparent text-center mb-10">
          Projects
        </h2>

        {/* Solar System (responsive) */}
        <div className="relative w-[40rem] h-[40rem] md:w-[50rem] md:h-[50rem] lg:w-[64rem] lg:h-[64rem] mt-7">
          {/* Orbit 1 - Cindara (outer ring, spins 60s) */}
          <div className="absolute inset-0 border border-white/30 rounded-full animate-[spin_60s_linear_infinite]">
            <div className="absolute left-1/2 top-1/2">
              <div className="translate-x-[18rem] md:translate-x-[23rem] lg:translate-x-[29rem] -translate-y-1/2">
                <motion.div
                  className="relative cursor-pointer group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlanetClick(planets[0])}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-red-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Click indicator */}
                  <div className="absolute -inset-2 rounded-full border-2 border-red-400/50 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>

                  <img
                    src={cindara}
                    alt="planet cindara"
                    className="w-24 h-24 relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  />

                  {/* Tooltip (gold, doesn't rotate) */}
                  <div
                    className="absolute top-28 left-1/2 -translate-x-1/2
                               bg-gradient-to-r from-yellow-500/90 to-yellow-300/90 text-black
                               font-semibold px-4 py-1 rounded-lg text-sm shadow-lg
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               whitespace-nowrap pointer-events-none
                               animate-[anti-spin_60s_linear_infinite]"
                  >
                    Cindara — DropAlert
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Orbit 2 - Aetheron (middle ring, spins 90s) */}
          <div className="absolute inset-[6rem] md:inset-[8rem] lg:inset-[10rem] border border-white/30 rounded-full animate-[spin_90s_linear_infinite]">
            <div className="absolute left-1/2 top-1/2">
              <div className="translate-x-[12rem] md:translate-x-[15rem] lg:translate-x-[19rem] -translate-y-1/2">
                <motion.div
                  className="relative cursor-pointer group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlanetClick(planets[1])}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Indicator */}
                  <div className="absolute -inset-2 rounded-full border-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>

                  <img
                    src={aetheron}
                    alt="planet aetheron"
                    className="w-24 h-24 relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  />

                  {/* Tooltip (gold, anti-spin 90s) */}
                  <div
                    className="absolute top-28 left-1/2 -translate-x-1/2
                               bg-gradient-to-r from-yellow-500/90 to-yellow-300/90 text-black
                               font-semibold px-4 py-1 rounded-lg text-sm shadow-lg
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               whitespace-nowrap pointer-events-none
                               animate-[anti-spin_90s_linear_infinite]"
                    style={{ animationName: "anti-spin" }}
                  >
                    Aetheron — AmusePark
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Orbit 3 - Nyxora (inner ring, spins 120s) */}
          <div className="absolute inset-[12rem] md:inset-[16rem] lg:inset-[20rem] border border-white/30 rounded-full animate-[spin_120s_linear_infinite]">
            <div className="absolute left-1/2 top-1/2">
              <div className="translate-x-[6rem] md:translate-x-[7.5rem] lg:translate-x-[9rem] -translate-y-1/2">
                <motion.div
                  className="relative cursor-pointer group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlanetClick(planets[2])}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-green-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Indicator */}
                  <div className="absolute -inset-2 rounded-full border-2 border-green-400/50 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>

                  <img
                    src={nyxora}
                    alt="planet nyxora"
                    className="w-24 h-24 bg-transparent bg-clip-border relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  />

                  {/* Tooltip (gold, anti-spin 120s) */}
                  <div
                    className="absolute top-28 left-1/2 -translate-x-1/2
                               bg-gradient-to-r from-yellow-500/90 to-yellow-300/90 text-black
                               font-semibold px-4 py-1 rounded-lg text-sm shadow-lg
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               whitespace-nowrap pointer-events-none
                               animate-[anti-spin_120s_linear_infinite]"
                    style={{ animationName: "anti-spin" }}
                  >
                    Nyxora — Motion AI
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sun in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
            {/* Glow aura */}
            <div className="absolute w-[250%] h-[250%] rounded-full bg-[rgba(255,166,0,0.35)] blur-[100px] pointer-events-none"></div>
            {/* Sun */}
            <motion.div
              className="relative cursor-pointer group z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePlanetClick(sunProject)}
            >
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-yellow-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-yellow-400/50 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
              <img
                src={sun}
                alt="Sun"
                className="w-32 h-32 rounded-full animate-[spin_100s_linear_infinite] drop-shadow-2xl relative z-10 group-hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300"
              />
              {/* Sun tooltip (gold, stays upright) */}
              <div
                className="absolute top-40 left-1/2 -translate-x-1/2
             bg-gradient-to-r from-yellow-500/90 to-yellow-300/90 text-black
             font-semibold px-4 py-1 rounded-lg text-sm shadow-lg
             opacity-0 group-hover:opacity-100 transition-opacity duration-300
             whitespace-nowrap pointer-events-none"
                style={{ animationName: "anti-spin" }}
              >
                Research Hub — MPEA Project
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePlanetDetail}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closePlanetDetail}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={selectedPlanet.image}
                  alt={selectedPlanet.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedPlanet.name}
                  </h3>
                  <p className="text-white/60">Planet of Innovation</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">
                    {selectedPlanet.project.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-white/60 mb-4">
                    <Calendar size={16} />
                    <span>{selectedPlanet.project.year}</span>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed text-lg">
                  {selectedPlanet.project.description}
                </p>

                {/* Features */}
                <div>
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles size={16} className="mr-2" />
                    Key Features
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPlanet.project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 rounded-lg px-3 py-2 text-white/80 text-sm"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <Code size={16} className="mr-2" />
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlanet.project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-white border border-white/10 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  {selectedPlanet.project.comingSoon ||
                  !selectedPlanet.project.link ? (
                    <button
                      disabled
                      className="inline-flex items-center space-x-2 bg-white/10 text-white/70 border border-white/15 font-semibold py-3 px-6 rounded-xl cursor-not-allowed opacity-70"
                      aria-disabled="true"
                    >
                      <MousePointer2 size={20} />
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <a
                      href={selectedPlanet.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      <span>View Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
