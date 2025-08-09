import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const phrases = [
    "Welcome to my digital space ✨",
    "Building the future with code 🚀",
    "Let's create something amazing together 💫",
    "Glad to see you here, I hope you enjoy 👋",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const indexRef = useRef(0);

  // Load animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentPhraseIndex];

    const delayStart = setTimeout(() => {
      timer = setInterval(
        () => {
          if (!isDeleting) {
            if (indexRef.current < currentPhrase.length) {
              setTyped(currentPhrase.slice(0, indexRef.current + 1));
              indexRef.current += 1;
            } else {
              setTimeout(() => setIsDeleting(true), 2000);
            }
          } else {
            if (indexRef.current > 0) {
              setTyped(currentPhrase.slice(0, indexRef.current - 1));
              indexRef.current -= 1;
            } else {
              setIsDeleting(false);
              setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
              indexRef.current = 0;
            }
          }
        },
        isDeleting ? 50 : 100
      );
    }, 200);

    return () => {
      clearTimeout(delayStart);
      if (timer) clearInterval(timer);
    };
  }, [currentPhraseIndex, isDeleting]);

  // Enhanced animated stars with better performance
  const AnimatedStars = useMemo(() => {
    const stars = Array.from({ length: 25 }, (_, i) => {
      const angle = (i / 25) * 2 * Math.PI;
      const radius = 35 + (i % 4) * 12;
      return {
        id: i,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        size: 0.8 + (i % 3) * 0.4,
        delay: i * 0.15,
        duration: 4 + (i % 3) * 2,
      };
    });

    return (
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(147,197,253,0.6) 50%, transparent 100%)",
              filter: "blur(0.5px)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }, []);

  // Enhanced floating particles
  const FloatingParticles = useMemo(() => {
    const particles = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 1,
      color:
        i % 2 === 0 ? "rgba(59, 130, 246, 0.15)" : "rgba(234, 179, 8, 0.15)",
      duration: Math.random() * 25 + 20,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              border: `0.5px solid ${particle.color.replace("0.15", "0.3")}`,
            }}
            animate={{
              x: [
                `${particle.x}vw`,
                `${(particle.x + 20) % 100}vw`,
                `${(particle.x + 40) % 100}vw`,
                `${particle.x}vw`,
              ],
              y: [
                `${particle.y}vh`,
                `${(particle.y + 25) % 100}vh`,
                `${(particle.y - 15 + 100) % 100}vh`,
                `${particle.y}vh`,
              ],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }, []);

  // Enhanced code content with better styling
  const codeContent = useMemo(
    () => (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center"
      >
        <div className="relative bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-blue-500/20 hover:border-yellow-500/40 transition-all duration-300 shadow-2xl group">
          {/* Enhanced terminal header */}
          <div className="flex items-center justify-between -m-3 mb-3 pb-4 border-b border-blue-400/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </div>
              <span className="text-blue-400 text-sm font-mono ml-2 opacity-90">
                profile.js
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400/80 text-xs font-mono">LIVE</span>
            </div>
          </div>

          {/* Enhanced code with syntax highlighting */}
          <div className="flex">
            {/* Line numbers with better styling */}
            <div className="text-yellow-400/70 text-sm font-mono pr-4 select-none leading-7 min-w-[2rem]">
              {Array.from({ length: 19 }, (_, i) => (
                <div
                  key={i + 1}
                  className="text-right hover:text-yellow-400 transition-colors leading-7"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}
            </div>

            {/* Enhanced code content */}
            <code className="block whitespace-pre-wrap text-sm font-mono text-white leading-7 flex-1">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-yellow-300">mohammed</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-white">{"{"}</span>
              {"\n  "}
              <span className="text-green-400">name</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">"Mohammed Nassar"</span>
              <span className="text-white">,</span>
              {"\n  "}
              <span className="text-green-400">location</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">"Santa Clara, CA"</span>
              <span className="text-white">,</span>
              {"\n  "}
              <span className="text-green-400">skills</span>
              <span className="text-white">:</span>{" "}
              <span className="text-white">[</span>
              {"\n    "}
              <span className="text-orange-300">"Python"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"Java"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"C++"</span>
              <span className="text-white">,</span>
              {"\n    "}
              <span className="text-orange-300">"React"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"Framer Motion"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"pandas"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"NumPy"</span>
              <span className="text-white">,</span>
              {"\n    "}
              <span className="text-orange-300">"JavaScript"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"HTML"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"CSS"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"AWS"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"Google Cloud"</span>
              <span className="text-white">,</span>{" "}
              <span className="text-orange-300">"UNIX"</span>
              {"\n  "}
              <span className="text-white">],</span>
              {"\n  "}
              <span className="text-green-400">experience</span>
              <span className="text-white">:</span>{" "}
              <span className="text-white">[</span>
              {"\n    "}
              <span className="text-orange-300">
                "Research Intern @ SJSU (Summer 2024)"
              </span>
              <span className="text-white">,</span>
              {"\n    "}
              <span className="text-orange-300">
                "SI Leader @ SJCC (Jan 2023 - May 2023)"
              </span>
              {"\n  "}
              <span className="text-white">],</span>
              {"\n  "}
              <span className="text-green-400">education</span>
              <span className="text-white">:</span>{" "}
              <span className="text-white">{"{"}</span>
              {"\n    "}
              <span className="text-green-400">school</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">
                "San Jose State University"
              </span>
              <span className="text-white">,</span>
              {"\n    "}
              <span className="text-green-400">degree</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">
                "B.S. in Computer Science"
              </span>
              <span className="text-white">,</span>
              {"\n    "}
              <span className="text-green-400">GPA</span>
              <span className="text-white">:</span>{" "}
              <span className="text-purple-400">3.91</span>
              <span className="text-white">,</span>
              {"\n    "}
              <span className="text-green-400">expectedGrad</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">"May 2026"</span>
              {"\n  "}
              <span className="text-white">{"}"}</span>
              {"\n"}
              <span className="text-white">{"};"}</span>
            </code>
          </div>

          {/* Enhanced glow effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Animated corner accent */}
          <motion.div
            className="absolute top-3 right-3 w-2 h-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(234,179,8,0.8) 0%, rgba(234,179,8,0.3) 100%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    ),
    [isLoaded]
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 pt-16 pb-8 md:py-0 overflow-hidden"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0">
        {/* Dynamic nebula effect */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated Stars */}
        {AnimatedStars}

        {/* Floating Particles */}
        {FloatingParticles}

        {/* Enhanced shooting stars */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: "20%",
              left: "-30px",
            }}
            animate={{
              x: ["0vw", "120vw"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 12,
              ease: "easeOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-24 h-0.5 blur-sm"></div>
          </motion.div>

          {/* Second shooting star */}
          <motion.div
            className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full"
            style={{
              top: "70%",
              right: "-30px",
            }}
            animate={{
              x: ["0vw", "-120vw"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 18,
              ease: "easeOut",
              delay: 8,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-200/70 to-transparent w-20 h-0.5 blur-sm"></div>
          </motion.div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Left side: Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-8 mt-8 md:mt-0"
        >
          {/* Enhanced greeting */}
          <motion.h1
            className="font-winky text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello,
            <br />
            This is{" "}
            <span className="bg-blue-500 bg-clip-text text-transparent">
              Mo Nassar
            </span>
            ,
            <br />
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              Computer Science
            </span>{" "}
            Student
            <span className="text-white/60"> @ </span>
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              S
            </span>
            <span className="bg-blue-500 bg-clip-text text-transparent">J</span>
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              S
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              U
            </span>
          </motion.h1>

          {/* Enhanced typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-Josefin h-8 text-lg sm:text-xl text-white/90 drop-shadow-lg"
          >
            {typed}
            <motion.span
              className="inline-block w-[1ch] bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent leading-relaxed"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Enhanced social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/NassarHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 fill-current text-white group-hover:text-blue-400 transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/monassardev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 fill-current text-white group-hover:text-blue-400 transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.757 0-5 2.243-5 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-14c0-2.757-2.243-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.969v5.694h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.036 0 3.6 2.003 3.6 4.604v5.591z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Code Snippet */}
        {codeContent}
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="scroll-smooth group"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm border border-yellow-400/30">
            <motion.svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
