import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ExperienceSection.css';

const experiences = [
    {
        id: 1,
        title: "Researtch Intern",
        period: "June 2024 - August 2024",
        description: "Worked on developing a machine learning framework to predict elastic constants of Multi-Principal Element Alloys (MPEAs), reducing reliance on computationally intensive simulations.",
        achievements: [
            "Improved prediction accuracy by integrating descriptors like cohesive energy and bond length.",
            "Validated machine learning predictions against DFT results.",
            "Presented findings at the university's research symposium."

        ],
        technologies: ["Python", "Vasp", "Quantum Espresso", "Gradient Boosted Regression", "DFT (Density Functional Theory)"]
    }
];

const ExperienceCard = ({ experience, onClick }) => {
    return (
        <motion.div
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95}}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >

        <div className="pixel-corner corner-tl" />
        <div className="pixel-corner corner-tr" />
        <div className="pixel-corner corner-bl" />
        <div className="pixel-corner corner-br" />

        <h3 className="experience-title">{experience.title}</h3>
        <p className="experience-period">{experience.period}</p>
        <p className="experience-description">{experience.description}</p>

        <div className="tech-stack">
            {experience.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
        ))}
        </div>
    </motion.div>
    );
};

const ExperienceModal = ({ experience, onClose }) => {
    return (
        <AnimatePresence>
            <motion.div
                className="experience-modal"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
            >
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 50 }}
                >
                <div className="hieroglyph-border border-top" />
                <div className="hieroglyph-border border-bottom" />
          
                <div className="modal-header">
                    <h2 className="modal-title">{experience.title}</h2>
                    <p className="modal-period">{experience.period}</p>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <div className="achievements-list">
                    <h3 className="achievements-title">Key Achievements</h3>
                        <ul>
                            {experience.achievements.map((achievement, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  {achievement}
                                </motion.li>
                              ))}
                        </ul>
                </div>

                <div className="tech-stack">
                    {experience.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div id="experience" className="experience-container">
      <motion.div
        className="experience-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}
      </motion.div>

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
};


export default ExperienceSection;