import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectSection.css';

const projects = [
  {
    id: 1,
    title: "Motion AI",
    period: "August 2024 – December 2024",
    description: "Real-time dance movement analysis system with professional-grade feedback",
    technologies: ["Python", "Machine Learning", "Computer Vision"],
    achievements: [
      "Achieved 95% accuracy in providing real-time feedback on dance movements, enabling professional-grade motion analysis for users",
      "Improved processing speed by 30%, ensuring smooth real-time comparisons of motion sequences",
      "Showcased potential applications in fitness and training at the SVIC competition, highlighting its market viability"
    ]
  },
  {
    id: 2,
    title: "Game Management Platform",
    period: "September 2024 – December 2024",
    description: "Interactive gaming platform featuring Snake and Blackjack with player tracking",
    technologies: ["Java", "JavaFX", "Object-Oriented Design"],
    achievements: [
      "Delivered an interactive gaming platform featuring Snake and Blackjack, enhancing player retention with personalized leaderboards and session history tracking",
      "Improved platform scalability and modularity through object-oriented design, enabling seamless integration of additional games and features",
      "Enhanced system reliability by adopting Agile development practices, reducing errors and improving user satisfaction"
    ]
  },
  {
    id: 3,
    title: "Amusement Park Management System",
    period: "September 2024 – December 2024",
    description: "Comprehensive park operations simulator with visitor management",
    technologies: ["Java", "OOP", "System Design"],
    achievements: [
      "Simulated real-world amusement park operations, enhancing user engagement through interactive visitor and ride management features",
      "Improved system scalability and maintainability by implementing modular object-oriented design principles, facilitating seamless future expansions"
    ]
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pixel-corner corner-tl" />
      <div className="pixel-corner corner-tr" />
      <div className="pixel-corner corner-bl" />
      <div className="pixel-corner corner-br" />
      
      <h3 className="project-title">{project.title}</h3>
      <p className="project-period">{project.period}</p>
      <p className="project-description">{project.description}</p>
      
      <div className="tech-stack">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="project-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-period">{project.period}</p>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          
          <div className="achievements-list">
            <h3 className="achievements-title">Key Achievements</h3>
            <ul>
              {project.achievements.map((achievement, index) => (
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
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="project" className="projects-container">
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectSection;