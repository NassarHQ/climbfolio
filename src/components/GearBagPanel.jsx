import { useState, useRef } from "react";
import jsImg from "../assets/jsImg.png";
import javaImg from "../assets/javaImg.png";
import pythonImg from "../assets/pythonImg.png";
import reactImg from "../assets/reactImg.png";
import twImg from "../assets/twImg.png";
import { motion, AnimatePresence } from "framer-motion";

const GearBagPanel = () => {
  const [isUnzipped, setIsUnzipped] = useState(false);
  const [spilledTools, setSpilledTools] = useState([]);
  const timeoutsRef = useRef([]);

  const skills = [
    { name: "JavaScript", icon: jsImg },
    { name: "React", icon: reactImg },
    { name: "Tailwind", icon: twImg },
    { name: "Java", icon: javaImg },
    { name: "Python", icon: pythonImg },
  ];

  const toggleZipper = () => {
    // Clear any existing timeouts so icons don’t pile up
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setIsUnzipped((prev) => {
      const next = !prev;

      if (next) {
        setSpilledTools([]); // start empty before launching

        skills.forEach((_, i) => {
          const timeoutId = setTimeout(() => {
            setSpilledTools((prevArr) => {
              // Only add index i if it’s not already there
              if (!prevArr.includes(i)) return [...prevArr, i];
              return prevArr;
            });
          }, 300 + i * 300); // 0.3s, 0.6s, 0.9s, etc.
          timeoutsRef.current.push(timeoutId);
        });
      } else {
        // Zip back up: clear all icons immediately
        setSpilledTools([]);
      }

      return next;
    });
  };

  return (
    <section
      id="gear"
      className="min-h-screen flex flex-col items-center justify-center text-white p-8"
    >
      {/** ——— Bag UI ——— */}
      <div className="relative">
        <div
          className="relative w-56 h-96 bg-gradient-to-b from-green-700 to-green-900 rounded-3xl border-[6px] border-green-950 shadow-2xl flex justify-center items-start cursor-pointer"
          onClick={toggleZipper}
        >
          {/** Zipper track */}
          <div
            className="absolute top-14 left-1/2 w-1 h-72 rounded-full z-10"
            style={{
              backgroundColor: isUnzipped ? "#070d0d" : "#ffffff",
            }}
          ></div>

          {/** Zipper Pull */}
          <div
            className="absolute top-8 left-1/2 w-6 h-4 bg-yellow-400 rounded shadow-md -translate-x-1/2 transition-all duration-700 z-20"
            style={{
              transform: isUnzipped
                ? "translate(-50%, 300px)" // pulled all the way down
                : "translate(-50%, 20px)", // near top when closed
            }}
          ></div>

          {/** Top Flap */}
          <div
            className="absolute top-0 w-full h-12 bg-green-950 rounded-t-3xl border-b-4 border-green-900 transition-transform duration-700 z-20"
            style={{
              transform: isUnzipped
                ? "rotateX(120deg) scaleY(0.8)"
                : "rotateX(0deg)",
              transformOrigin: "top center",
            }}
          ></div>

          {/** Straps */}
          <div className="absolute left-0 top-16 w-4 h-56 bg-green-950 rounded-full rotate-[10deg]"></div>
          <div className="absolute right-0 top-16 w-4 h-56 bg-green-950 rounded-full -rotate-[10deg]"></div>

          {/** ————— Projectile “Tools” Origin ————— */}
          <div
            className="absolute top-[120px] left-1/2 w-0 h-0 pointer-events-none overflow-visible"
            style={{ transform: "translateX(-50%)" }}
          >
            <AnimatePresence>
              {spilledTools.map((i) => {
                const skill = skills[i];
                // Determine grid position:
                const col = i % 2; // 0 or 1
                const row = Math.floor(i / 2); // 0, 1, or 2
                const finalX =  col * 100 - 80; // space icons 120px apart horizontally
                const finalY = 350 + row * 120; // drop them ~200px down, then 120px per row

                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{ width: "64px", height: "auto" }} // fix size so no jumpiness
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      x: [0, finalX / 2, finalX],
                      y: [0, -150, finalY],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: 0, // delay is handled by setTimeout
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 mb-1"
                    />
                    <div className="text-md">{skill.name}</div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/** Label under bag */}
      <p className="text-slate-300 mt-6 mb-6">
        These are the tools I pack for my climb.
      </p>
    </section>
  );
};

export default GearBagPanel;
