import React from "react";
import Basecamp from "./components/Basecamp";
import ControlPanel from "./components/ControlPanel";
import GearBagPanel from "./components/GearBagPanel";
import RouteMapPanel from "./components/RouteMapPanel";
import RadioPanel from "./components/RadioPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-gradient-to-b from-slate-900 to blue-900 text-white scroll-smooth">
      <section
        id="basecamp"
        className="min-h-screen flex items-center justify-center"
      >
        <Basecamp />
      </section>
      <section
        id="gear"
        className="min-h-screen flex items-center justify-center"
      >
        <GearBagPanel />
      </section>
      <section
        id="map"
        className="min-h-screen flex items-center justify-center"
      >
        <RouteMapPanel />
      </section>
      <section
        id="radio"
        className="min-h-screen flex items-center justify-center"
      >
        <RadioPanel />
      </section>
      <section
        id="summit"
        className="min-h-screen flex items-center justify-center"
      >
        <Footer />
      </section>
      <ControlPanel /> {/* floating */}
    </main>
  );
}

export default App;

// import { useState } from "react";
// import Hero from "./sections/Hero";
// import Navbar from "./components/Navbar";
// import "./App.css";

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-neutral-800 to-gray-700">
//         <Navbar />

//       <main className="max-w-6xl mx-auto px-4 pt-24">
//         <Hero />
//       </main>
//     </div>
//   );
// }

// export default App;
