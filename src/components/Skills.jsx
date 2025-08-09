import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Database, Layers, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? window.innerWidth * 0.45 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Initial check
      return () => scrollElement.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const skillGroups = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Scheme", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scheme/scheme-original.svg" },
        { name: "Haskell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      ],
      icon: Code2,
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "blue-400",
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      ],
      icon: Database,
      gradient: "from-green-500/20 to-teal-500/20",
      accentColor: "green-400",
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      ],
      icon: Layers,
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "orange-400",
    },
    {
      category: "Web & Cloud",
      items: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      ],
      icon: Cloud,
      gradient: "from-cyan-500/20 to-blue-500/20",
      accentColor: "cyan-400",
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
        { name: "pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
        { name: "JUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
        { name: "Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
      ],
      icon: Wrench,
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-20 px-4 text-chalk-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-climbing-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-climbing-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-winky text-4xl md:text-5xl font-bold text-center text-blue-500 mb-4"
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-Josefin text-center text-chalk-white/70 text-lg mb-16 max-w-2xl mx-auto"
      >
        A comprehensive toolkit spanning multiple domains of software development
      </motion.p>

      {/* Navigation Arrows */}
      <motion.button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: 0.5 }}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canScrollLeft 
            ? 'bg-yellow-500 text-black hover:scale-110 hover:bg-yellow-400' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
        }`}
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ delay: 0.5 }}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canScrollRight 
            ? 'bg-yellow-500 text-black hover:scale-110 hover:bg-yellow-400' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
        }`}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Skill Cards Carousel */}
      <motion.div
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-6 space-x-6 md:space-x-8"
        style={{ perspective: "1000px" }}
      >
        {skillGroups.map((group, idx) => {
          const IconComponent = group.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group snap-center min-w-[85%] sm:min-w-[70%] md:min-w-[400px] lg:min-w-[420px] h-[350px] rounded-3xl shadow-2xl p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:shadow-climbing-orange/20 hover:shadow-2xl border border-climbing-green/30 hover:border-climbing-orange/60 bg-gradient-to-br ${group.gradient} hover:scale-[1.02] transform-gpu`}
              style={{ 
                background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%), ${group.gradient}`,
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-climbing-green/5 to-climbing-orange/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none blur-xl"></div>
              
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-climbing-orange/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-climbing-green/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-${group.accentColor}/20 group-hover:bg-${group.accentColor}/30 transition-all duration-300`}>
                    <IconComponent className={`text-${group.accentColor} group-hover:scale-110 transition-transform duration-300`} size={32} />
                  </div>
                  <h3 className="font-winky text-2xl md:text-3xl font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {group.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-default group/item"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg group-hover/item:bg-climbing-orange/20 transition-all duration-300">
                        <img 
                          src={item.icon} 
                          alt={item.name}
                          className="w-8 h-8 object-contain filter group-hover/item:brightness-110 transition-all duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div className="hidden w-8 h-8 bg-climbing-green/60 rounded flex items-center justify-center text-white text-xs font-bold">
                          {item.name.charAt(0)}
                        </div>
                      </div>
                      <span className="font-Josefin text-sm text-center text-chalk-white/80 group-hover/item:text-climbing-orange transition-colors duration-300 leading-tight">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skill count badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-Josefin text-chalk-white/70"
              >
                {group.items.length} skills
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Scroll Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {skillGroups.map((_, idx) => (
          <div
            key={idx}
            className="w-2 h-2 rounded-full bg-climbing-green/30 hover:bg-climbing-orange/60 transition-colors duration-300 cursor-pointer"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Skills;