import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left:
          dir === "left" ? -window.innerWidth * 0.9 : window.innerWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

  const skillGroups = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C++", "Scheme", "Haskell"],
      icon: "🐍",
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "SQL", "Oracle"],
      icon: "💾",
    },
    {
      category: "Frameworks & Libraries",
      items: ["scikit-learn", "React", "OpenCV", "pandas", "NumPy"],
      icon: "📚",
    },
    {
      category: "Web & Cloud",
      items: ["JavaScript", "HTML", "CSS", "REST APIs", "AWS", "Google Cloud"],
      icon: "☁️",
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Linux", "Unix", "Maven", "pytest", "JUnit", "Spark"],
      icon: "🔧",
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-20 px-4 text-chalk-white"
    >
      <h2 className="font-winky text-4xl font-bold text-center text-blue-500 mb-12">
        Skills
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* Horizontal Scroll Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-6 space-x-10"
        style={{ perspective: "1000px" }}
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            className="border group border-climbing-green/50 hover:border-climbing-orange snap-center min-w-[90%] md:min-w-[40%] h-[300px] rounded-3xl shadow-xl p-8 backdrop-blur-md flex flex-col justify-between hover:shadow-2xl transform-gpu transition-transform"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-climbing-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            {/* Corner accent */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-climbing-orange/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div>
              <div className="font-winky flex items-center space-x-3 mb-6">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-2xl font-bold text-yellow-500">
                  {group.category}
                </h3>
              </div>
              <ul className="font-Josefin grid grid-cols-2 gap-3 text-lg text-chalk-white/80">
                {group.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05 }}
                    className="hover:text-orange-400 transition-colors"
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
