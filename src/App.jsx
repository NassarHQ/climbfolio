// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import StarryBackground from "./components/StarryBackground";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-chalk-white">
      <StarryBackground />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects />
      <Experience />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
