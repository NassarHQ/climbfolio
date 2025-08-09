import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, GraduationCap, Code, Mountain, Users, Target, Sparkles, Briefcase } from "lucide-react";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const paragraphs = [
    {
      text: "Hey, I'm Mohammed Nassar — a senior at San Jose State University, majoring in Computer Science (GPA 3.94, graduating May 2026).",
      icon: GraduationCap,
      highlight: "SJSU Computer Science",
      category: "education"
    },
    {
      text: "I'm into full stack development and love building fun, smooth, and responsive sites using React, Tailwind, JavaScript, and Framer Motion.",
      icon: Code,
      highlight: "full stack development",
      category: "development"
    },
    {
      text: "Outside of classes, I spend a lot of time working on personal projects, trying out new tech, and leveling up my skills.",
      icon: Sparkles,
      highlight: "personal projects",
      category: "growth"
    },
    {
      text: "Last summer, I interned at SJSU on a research project that used predictive modeling to cut simulation time by 50%.",
      icon: Target,
      highlight: "50% efficiency improvement",
      category: "experience"
    },
    {
      text: "I also spent a year tutoring math at SJCC, which really helped me grow as a communicator and mentor.",
      icon: Users,
      highlight: "tutoring & mentoring",
      category: "teaching"
    },
    {
      text: "Outside of tech, I'm all about staying active — climbing, volleyball, and hiking are my go-to's.",
      icon: Mountain,
      highlight: "climbing & outdoor activities",
      category: "lifestyle"
    },
    {
      text: "I like working on myself, both physically and mentally, and I bring that same mindset into every project I take on.",
      icon: User,
      highlight: "growth mindset",
      category: "philosophy"
    },
    {
      text: "Right now, I'm open to internship opportunities and excited to work with teams that value creativity, growth, and a bit of personality in their work.",
      icon: Briefcase,
      highlight: "internship opportunities",
      category: "career"
    },
  ];

  const getCategoryColors = (category) => {
    const colorMap = {
      education: { bg: "from-blue-500/20 to-purple-500/20", border: "border-blue-400/30", text: "text-blue-400", icon: "text-blue-400" },
      development: { bg: "from-green-500/20 to-teal-500/20", border: "border-green-400/30", text: "text-green-400", icon: "text-green-400" },
      growth: { bg: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-400/30", text: "text-yellow-400", icon: "text-yellow-400" },
      experience: { bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-400/30", text: "text-purple-400", icon: "text-purple-400" },
      teaching: { bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-400/30", text: "text-cyan-400", icon: "text-cyan-400" },
      lifestyle: { bg: "from-climbing-green/20 to-climbing-orange/20", border: "border-climbing-green/30", text: "text-climbing-orange", icon: "text-climbing-green" },
      philosophy: { bg: "from-pink-500/20 to-rose-500/20", border: "border-pink-400/30", text: "text-pink-400", icon: "text-pink-400" },
      career: { bg: "from-orange-500/20 to-red-500/20", border: "border-orange-400/30", text: "text-orange-400", icon: "text-orange-400" },
    };
    return colorMap[category] || colorMap.development;
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative px-4 py-12 md:py-20 text-chalk-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-40 h-40 bg-climbing-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-climbing-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-winky text-4xl sm:text-5xl md:text-6xl text-blue-500 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-climbing-green to-climbing-orange mx-auto rounded-full"></div>
        </motion.div>

        {/* Story Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {paragraphs.map((item, index) => {
            const IconComponent = item.icon;
            const colors = getCategoryColors(item.category);
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-r ${colors.bg} border ${colors.border} hover:border-climbing-orange/60 transition-all duration-500 hover:scale-[1.02] transform-gpu`}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-climbing-green/5 to-climbing-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-white/10 group-hover:bg-climbing-orange/20 transition-all duration-300`}>
                    <IconComponent className={`${colors.icon} group-hover:text-climbing-orange transition-colors duration-300`} size={24} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <p className="font-Josefin text-chalk-white/90 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.text.split(item.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className={`${colors.text} font-semibold group-hover:text-climbing-orange transition-colors duration-300`}>
                              {item.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                    
                    {/* Category Badge */}
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className={`inline-block mt-3 px-3 py-1 text-xs font-medium ${colors.text} bg-white/5 rounded-full border border-white/10 group-hover:border-climbing-orange/30 transition-all duration-300`}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </motion.span>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-climbing-orange/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;