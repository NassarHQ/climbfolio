// src/components/StarryBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const StarryBackground = () => {
  const stars = Array.from({ length: 15 }, (_, i) => {
    const angle = (i / 60) * 2 * Math.PI;
    const radius = 40 + (i % 3) * 15;
    return {
      id: i,
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
      size: 1 + (i % 3) * 0.5,
      delay: i * 0.15,
    };
  });

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black -z-10 overflow-hidden">
      {/* Nebula blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-md"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-md"></div>

      {/* Stars */}
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
            duration: 4,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
