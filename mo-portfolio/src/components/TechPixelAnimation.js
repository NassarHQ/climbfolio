import React from 'react';
import './TechPixelAnimation.css';
import { motion } from 'framer-motion';

const TechPixelAnimation = () => {
  const colors = {
    primary: '#1a1b26',
    accent1: '#87CEEB',
    accent2: '#FFD700',
    glow: '#4682B4'
  };

  const createMatrixPoints = () => {
    return Array.from({ length: 15 }, (_, i) => ({
      x: 10 + (i * 20),
      delay: i * 0.1,
    }));
  };

  return (
    <div className="tech-animation-container">
      <svg
        viewBox="0 0 300 300"
        className="tech-animation-svg"
      >
        <motion.path
          d="M50,150 L100,150 L100,100 L150,100 L150,200 L200,200 L200,150 L250,150"
          stroke={colors.glow}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {createMatrixPoints().map((point, index) => (
          <motion.g key={index}>
            <motion.rect
              x={point.x}
              width="4"
              height="4"
              fill={colors.accent1}
              initial={{ y: -10, opacity: 0 }}
              animate={{
                y: [0, 300],
                opacity: [1, 0]
              }}
              transition={{
                duration: 3,
                delay: point.delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.g>
        ))}

        <motion.g transform="translate(150, 150)">
          {[0, 1, 2, 3].map((i) => (
            <motion.rect
              key={i}
              width="40"
              height="40"
              x="-20"
              y="-20"
              fill="none"
              stroke={colors.accent2}
              strokeWidth="2"
              initial={{ rotate: i * 90, scale: 0.8, opacity: 0.3 }}
              animate={{
                rotate: [i * 90, (i * 90) + 360],
                scale: [0.8, 1, 0.8],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </motion.g>

        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={`hover-${i}`}
            r="4"
            cx={50 + (i * 40)}
            cy={250}
            fill={colors.accent1}
            whileHover={{ scale: 1.5, fill: colors.accent2 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </svg>
    </div>
  );
};

export default TechPixelAnimation;