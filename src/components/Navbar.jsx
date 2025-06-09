import { label } from "framer-motion/client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const chalkLines = ["top", "mid", "bottom"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="w-ful mx-auto flex items-center justify-between px-20 py-4">
        <a
          href="#hero"
          className="font-rubikpuddles text-4xl font-semibold transform hover:scale-125 duration-1000"
        >
          <span className="bg-yellow-500 bg-clip-text text-transparent">M</span>
          <span className="bg-blue-500 bg-clip-text text-transparent">N.</span>
        </a>

        {/** Desktop Links */}
        <ul className="font-winky hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (label) => (
              <li
                key={label}
                className="text-white hover:bg-blue-500 bg-clip-text text-transparent hover:bg-clip-text hover:text-transparent leading-normal hover:scale-125 duration-300"
              >
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-2xl font-semibold transform "
                >
                  {label}
                </a>
              </li>
            )
          )}
        </ul>

        {/** Hamburger */}
        <button
          className="focus:outline-none md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Navigation Meny"
        >
          {/** Simple three-line hamburger */}
          <div className="space-y-0.5 hover:scale-125 duration-700">
            {chalkLines.map((pos) => (
              <div
                key={pos}
                className="rounded-full w-4 h-0.5 bg-chalk-white"
              ></div>
            ))}
          </div>
        </button>
      </div>

      {/** Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="font-winky md:hidden bbg-black/50 overflow-hidden"
          >
            <ul className="space-y-4 flex flex-col items-center px-4 py-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (label) => (
                  <li
                    key={label}
                    /*hover:bg-blue-500 bg-clip-text text-transparent hover:bg-clip-text hover:text-transparent*/
                    className="text-2xlfont-winky text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 hover:from-blue-500 hover:to-blue-500 transition-all duration-300 hover:scale-125 cursor-pointer"
                  >
                    {label}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
