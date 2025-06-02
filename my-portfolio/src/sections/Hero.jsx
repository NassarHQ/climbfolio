import React from "react";

const Hero = () => {
  return (
    <section
      id="basecamp"
      className="min-h-[70vh] min-w-max flex flex-col justify-center items-center bg-gradient-to-bl from-blue-900 to-orange-600
                px-4 text-center relative overflow-hidden rounded-3xl"
    >
      <div className="relative z-10">
        <div className="flex justify-center">
          <img
            src="/src/assets/mo.jpeg"
            alt="Mo's Avatar"
            className="w-44 h-44 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-[4px] shadow-md object-cover"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Hi, I'm Mo <span className="text-black"></span>
        </h1>
        <p className="text-xl text-white/80 leading-relaxed text-center max-w-md mb-6">
          I'm a climber, nature-lover, and front-end developer. I build smooth,
          responsive websites that feel like an adventure.
        </p>
        <a
          href="#about"
          className="bg-black text-white px-6 py-3 rounded hover:scale-105 transition transform"
        >
          Start the Climb!
        </a>
      </div>

      {/* You can add the SVG background mountains later again */}
    </section>
  );
};

export default Hero;
