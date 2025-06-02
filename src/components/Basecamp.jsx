import { useState } from "react";
import { motion } from "framer-motion";

export default function Basecamp() {
  const [poweredOn, setPoweredOn] = useState(false);

  const handlePowerClick = () => {
    setPoweredOn(true);
    setTimeout(() => {
      const gear = document.getElementById("gear");
      gear?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-blue-800 rounded-2xl shadow-lg w-80 h-96 flex flex-col items-center justify-center p-6 border-4 border-blue-900"
    >
      {/* Rope Top */}
      <div className="absolute -top-14 h-16 w-2 bg-yellow-400 rounded-full z-10"></div>

      {!poweredOn ? (
        <>
          <div className="text-center px-3">
            <h2 className="text-xl font-bold text-white">I'm Mo</h2>
            <p className="text-sm text-white/70 mt-1">
              A climber & dev on a mission. Ready to climb?
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handlePowerClick}
            className="absolute bottom-8 w-14 h-14 rounded-full bg-yellow-400 shadow-inner flex items-center justify-center border-4 border-yellow-600 hover:scale-105 transition"
          >
            <span className="text-2xl text-black">⏻</span>
          </motion.button>
        </>
      ) : (
        <>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-bold text-lg"
          >
            Let’s climb!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white/60 mt-2"
          >
            Use the rope nav or scroll to explore your journey.
          </motion.p>
        </>
      )}
    </motion.div>
  );
}
