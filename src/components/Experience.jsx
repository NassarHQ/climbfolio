import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building2,
  Rocket,
  Sparkles,
  Award,
  TrendingUp,
  Code2,
  Users,
  Brain,
  Target,
} from "lucide-react";

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      title: "Research Intern",
      company: "San Jose State University",
      location: "San Jose, CA",
      duration: "Jun 2024 – Aug 2024",
      description:
        "Helped cut expensive simulation costs in half by building a machine learning model to predict elastic constants for materials. Turned messy data into a clean, smart tool deployed on Google Cloud.",
      impact: "50% Simulation Cost Reduction",
      skills: ["Python", "Scikit-learn", "Google Cloud", "pandas"],
      color: "blue",
      icon: Brain,
      achievements: [
        "Reduced need for DFT simulations",
        "Integrated physical descriptors for accuracy",
        "Built reusable ML module on the cloud",
      ],
      category: "Research",
    },
    {
      title: "Supplemental Instruction Leader",
      company: "San Jose City College",
      location: "San Jose, CA",
      duration: "Jan 2023 – May 2023",
      description:
        "Led workshops for students struggling with math, breaking down tough concepts and boosting understanding by 80%. Focused on building confidence as much as skills.",
      impact: "80% Student Improvement",
      skills: ["Teaching", "Communication", "Math Support", "Mentoring"],
      color: "green",
      icon: Users,
      achievements: [
        "Improved learning outcomes",
        "Built one-on-one connections",
        "Created custom lesson strategies",
      ],
      category: "Education",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-400/30",
        hover: "hover:border-blue-400/50",
      },
      green: {
        text: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-400/30",
        hover: "hover:border-green-400/50",
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-400/30",
        hover: "hover:border-purple-400/50",
      },
      cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-400/30",
        hover: "hover:border-cyan-400/50",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-20 px-4 text-white overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-flex items-center space-x-2 mb-4"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Rocket className="text-blue-400" size={32} />
          <Sparkles className="text-yellow-400" size={24} />
        </motion.div>

        <h2 className="font-winky text-4xl md:text-5xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
          Experience & Impact
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Transforming ideas into impactful solutions through research,
          development, and leadership
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {isInView &&
          experiences.map((exp, index) => {
            const color = getColorClasses(exp.color);
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border ${color.border} ${color.hover} transition-all duration-500 cursor-pointer`}
              >
                <div className="relative z-10 p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 group-hover:from-gray-900/80 group-hover:to-gray-800/80 transition-all duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 ${color.bg} rounded-xl border ${color.border}`}
                      >
                        <Icon size={24} className={color.text} />
                      </div>
                      <div>
                        <h3
                          className={`font-bold text-xl md:text-2xl ${color.text} mb-1`}
                        >
                          {exp.title}
                        </h3>
                        <span className="text-xs uppercase tracking-wide text-white/50 font-medium">
                          {exp.category}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 ${color.bg} rounded-full border ${color.border}`}
                    >
                      <TrendingUp size={16} className={color.text} />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/80">
                      <Building2 size={16} className="text-white/60" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-6 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div
                    className={`mb-6 p-4 ${color.bg} rounded-xl border ${color.border}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className={color.text} />
                      <span className="text-sm font-semibold text-white/70">
                        Key Impact
                      </span>
                    </div>
                    <p className={`font-bold ${color.text} text-lg`}>
                      {exp.impact}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/70 mb-3">
                      Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((a, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/70 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 ${color.bg} backdrop-blur-sm rounded-full text-sm font-medium ${color.text} border ${color.border} hover:bg-white/10 transition-all duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default Experience;
