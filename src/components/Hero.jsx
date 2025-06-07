import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion } from "framer-motion";

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
  const indexRef = useRef(0);

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
      ); // Slightly slower typing for better performance
    }, 200);

    return () => {
      clearTimeout(delayStart);
      if (timer) clearInterval(timer);
    };
  }, [currentPhraseIndex, isDeleting]);

  // Memoized and reduced animated stars component
  const AnimatedStars = useMemo(() => {
    const stars = Array.from({ length: 30 }, (_, i) => {
      const angle = (i / 30) * 2 * Math.PI;
      const radius = 40 + (i % 3) * 15;
      return {
        id: i,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        size: 1 + (i % 3) * 0.5,
        delay: i * 0.2,
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
                "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 70%, transparent 100%)",
              boxShadow: "0 0 8px rgba(255,255,255,0.4)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6, // Slower animation
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }, []); // Empty dependency array - only create once

  // Memoized and simplified floating particles
  const FloatingParticles = useMemo(() => {
    const particles = Array.from({ length: 2 }, (_, i) => ({
      // Reduced from 4 to 2
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "bg-blue-400/10" : "bg-yellow-400/10",
      duration: Math.random() * 20 + 20, // Slower movement
    }));

    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute ${particle.color} rounded-full`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [
                `${particle.x}vw`,
                `${(particle.x + 15) % 100}vw`,
                `${(particle.x + 30) % 100}vw`,
                `${particle.x}vw`,
              ],
              y: [
                `${particle.y}vh`,
                `${(particle.y + 20) % 100}vh`,
                `${(particle.y - 10 + 100) % 100}vh`,
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
  }, []); // Empty dependency array - only create once

  // Memoized code content to prevent re-renders
  const codeContent = useMemo(
    () => (
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
        <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-500/30 hover:border-yellow-500/50 transition-all shadow-2xl overflow-auto max-h-[600px] group">
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-500/20">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-blue-400 text-xs font-mono ml-2 opacity-80">
                profile.js
              </span>
            </div>
            <div className="text-green-400/60 text-xs font-mono">
              ● COMPILED
            </div>
          </div>

          {/* Line numbers and code */}
          <div className="flex">
            {/* Line numbers */}
            <div className="text-yellow-400 text-sm font-mono pr-4 select-none leading-6">
              {Array.from({ length: 19 }, (_, i) => (
                <div key={i + 1} className="text-right">
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}
            </div>

            {/* Code content */}
            <code className="block whitespace-pre-wrap text-sm sm:text-base font-mono text-white leading-6 flex-1">
              {`const mohammed = {
  name: "Mohammed Nassar",
  location: "Santa Clara, CA",
  skills: [
    "Python", "Java", "C++",
    "React", "Framer Motion", "pandas", "NumPy",
    "JavaScript", "HTML", "CSS", "AWS", "Google Cloud, UNIX"
  ],
  experience: [
    "Research Intern @ SJSU (Summer 2024)",
    "SI Leader @ SJCC (Jan 2023 - May 2023)"
  ],
  education: {
    school: "San Jose State University",
    degree: "B.S. in Computer Science",
    GPA: 3.94,
    expectedGrad: "May 2026"
  },
};`}
            </code>
          </div>

          {/* Enhanced glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Corner accent with pulse */}
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 bg-yellow-500/60 rounded-full"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }} // Slower pulse
          />
        </div>
      </div>
    ),
    []
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 pt-16 pb-8 md:py-0 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0">
        {/* Subtle nebula effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Stars */}
        {AnimatedStars}

        {/* Floating Particles */}
        {FloatingParticles}

        {/* Simplified shooting stars - only one */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white/80 rounded-full"
            style={{
              top: "25%",
              left: "-20px",
            }}
            animate={{
              x: ["0vw", "120vw"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8, // Slower
              repeat: Infinity,
              repeatDelay: 15, // Longer delay
              ease: "easeOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent w-20 h-0.5 blur-sm"></div>
          </motion.div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        {/** Left side: Text & Buttons */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 mt-8 md:mt-0">
          {/* Greeting & Name*/}
          <h1 className="font-winky text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            Hello,
            <br />
            This is{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Mo Nassar
            </span>
            ,
            <br />{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Computer Science
            </span>{" "}
            Student
            <span className="text-white/60"> @ </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              S
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              J
            </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              S
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              U
            </span>
          </h1>

          {/** Typing Animation */}
          <div className="font-Josefin h-8 text-md sm:text-lg text-white/80 drop-shadow">
            {typed}
            <span className="inline-block w-[1ch] animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent leading-relaxed">
              |
            </span>
          </div>

          {/** Social Icons */}
          <div className="flex items-center justify-center space-x-5">
            <a
              href="https://github.com/NassarHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white transition-colors drop-shadow-lg"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438
                  9.8 8.205 11.387.6.113.82-.258.82-.577
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                  -.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729
                  1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998
                  .108-.776.417-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93
                  0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                  0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
                  1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
                  3.285-1.23 .645 1.653.24 2.873.12 3.176.765.84
                  1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
                  5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015
                  3.286 0 .315 .195 .69 .825 .57C20.565 22.092 24
                  17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/monassardev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white transition-colors drop-shadow-lg"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.757 0-5 2.243-5
                  5v14c0 2.757 2.243 5 5 5h14c2.757 0
                  5-2.243 5-5v-14c0-2.757-2.243-5-5-5zm-11
                  19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75
                  -.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784
                  1.75 1.75-.784 1.75-1.75 1.75zm13.5
                  11.268h-3v-5.604c0-1.337-.026-3.059-1.865
                  -3.059-1.867 0-2.153 1.459-2.153 2.969v5.694h
                  -3v-10h2.881v1.367h.041c.401-.761 1.379
                  -1.562 2.839-1.562 3.036 0 3.6 2.003 3.6
                  4.604v5.591z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/** Code Snippet */}
        {codeContent}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.a
          href="#about"
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="scroll-smooth"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
