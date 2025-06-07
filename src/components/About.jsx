import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const paragraphs = [
  "Hey, I’m Mohammed Nassar — a senior at San Jose State University, majoring in Computer Science (GPA 3.94, graduating May 2026).",
  "I’m into full stack development and love building fun, smooth, and responsive sites using React, Tailwind, JavaScript, and Framer Motion.",
  "Outside of classes, I spend a lot of time working on personal projects, trying out new tech, and leveling up my skills.",
  "Last summer, I interned at SJSU on a research project that used predictive modeling to cut simulation time by 50%.",
  "I also spent a year tutoring math at SJCC, which really helped me grow as a communicator and mentor.",
  "Outside of tech, I’m all about staying active — climbing, volleyball, and hiking are my go-to’s.",
  "I like working on myself, both physically and mentally, and I bring that same mindset into every project I take on.",
  "Right now, I’m open to internship opportunities and excited to work with teams that value creativity, growth, and a bit of personality in their work.",
];

const AboutMe = () => {
  return (
    <section id="about" className="px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-winky text-4xl sm:text-5xl text-blue-500 mb-10 flex justify-center">
          About Me
        </h2>

        <div className="space-y-6">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              className="font-Josefin text-amber-300 text-base sm:text-lg leading-relaxed pl-4 border-l-4 border-white/10 hover:border-climbing-orange transition-all duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.02)",
                scale: 1.01,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
