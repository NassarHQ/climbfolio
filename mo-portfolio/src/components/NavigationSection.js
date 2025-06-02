import React from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';
import './NavigationSection.css';

function NavigationSection() {
  const scrollToSection = useSmoothScroll();
  
  const AboutIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      {/* ID Card Frame */}
      <rect x="2" y="3" width="12" height="10" fill="#FFD700" />
      {/* Photo Area */}
      <rect x="3" y="4" width="4" height="4" fill="#1a1a1a" />
      {/* Person Icon */}
      <circle cx="5" cy="5.5" r="1" fill="#FFA500" />
      <rect x="4" y="6.5" width="2" height="1" fill="#FFA500" />
      {/* ID Details - clear horizontal lines */}
      <rect x="8" y="5" width="5" height="1" fill="#FFA500" />
      <rect x="8" y="7" width="5" height="1" fill="#FFA500" />
      <rect x="3" y="9" width="10" height="1" fill="#FFA500" />
      <rect x="3" y="11" width="10" height="1" fill="#FFA500" />
    </svg>
  );
  
  const ProjectIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      {/* Multiple Project Windows */}
      <rect x="2" y="3" width="8" height="6" fill="#FFD700" /> {/* Main Window */}
      <rect x="3" y="4" width="6" height="4" fill="#1a1a1a" /> {/* Screen */}
      <rect x="4" y="5" width="4" height="1" fill="#FFA500" /> {/* Code Line */}
      
      {/* Stacked Project Effect */}
      <rect x="6" y="7" width="8" height="6" fill="#FFD700" /> {/* Second Window */}
      <rect x="7" y="8" width="6" height="4" fill="#1a1a1a" />
      <rect x="8" y="9" width="4" height="1" fill="#FFA500" />
    </svg>
  );
  
  const ExperienceIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      {/* Briefcase Body */}
      <rect x="3" y="5" width="10" height="8" fill="#FFD700" />
      {/* Handle */}
      <rect x="7" y="3" width="2" height="2" fill="#FFD700" />
      {/* Professional Details */}
      <rect x="4" y="7" width="8" height="1" fill="#FFA500" />
      <rect x="4" y="9" width="8" height="1" fill="#FFA500" />
      <rect x="4" y="11" width="8" height="1" fill="#FFA500" />
    </svg>
  );
  
  const SkillsIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      {/* Gear Symbol */}
      <circle cx="8" cy="8" r="4" fill="#FFD700" />
      <circle cx="8" cy="8" r="2" fill="#1a1a1a" />
      {/* Gear Teeth */}
      <rect x="7" y="3" width="2" height="2" fill="#FFD700" />
      <rect x="7" y="11" width="2" height="2" fill="#FFD700" />
      <rect x="3" y="7" width="2" height="2" fill="#FFD700" />
      <rect x="11" y="7" width="2" height="2" fill="#FFD700" />
      {/* Code Symbols */}
      <rect x="7.5" y="6" width="1" height="4" fill="#FFA500" />
      <rect x="6" y="7.5" width="4" height="1" fill="#FFA500" />
    </svg>
  );
  
  const EducationIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      {/* Graduation Cap */}
      <polygon points="3,8 8,4 13,8 8,6" fill="#FFD700" />
      {/* Cap Base */}
      <rect x="3" y="8" width="10" height="1" fill="#FFD700" />
      {/* Tassel */}
      <rect x="11" y="8" width="1" height="3" fill="#FFA500" />
      {/* Diploma */}
      <rect x="6" y="9" width="4" height="4" fill="#FFA500" />
      <rect x="7" y="10" width="2" height="2" fill="#FFD700" />
    </svg>
  );
  
  const ContactIcon = () => (
    <svg viewBox="0 0 16 16" className="w-full h-full pixel-art">
      {/* Envelope Body */}
      <rect x="2" y="4" width="12" height="8" fill="#FFD700" />
      {/* @ Symbol */}
      <circle cx="8" cy="8" r="2" fill="#FFA500" />
      <rect x="8" y="6" width="2" height="4" fill="#FFA500" />
      {/* Envelope Flap */}
      <polygon points="2,4 8,8 14,4" fill="#FFA500" />
    </svg>
  );

  const sections = [
    { id: 'about', title: 'About Me', Icon: AboutIcon },
    { id: 'project', title: 'Projects', Icon: ProjectIcon},
    { id: 'experience', title: 'Experience', Icon: ExperienceIcon },
    { id: 'skills', title: 'Skills', Icon: SkillsIcon },
    { id: 'education', title: 'Education', Icon: EducationIcon },
    { id: 'contact', title: 'Contact', Icon: ContactIcon }
  ];

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navigation-container">
      <div className="navigation-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="nav-item"
            onClick={() => handleClick(section.id)}
          >
            <div className="icon-container">
              <section.Icon />
            </div>
            <span className="nav-text">
              {section.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationSection;
