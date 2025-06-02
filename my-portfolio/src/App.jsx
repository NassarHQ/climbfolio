import { useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-neutral-800 to-gray-700">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-28 px-6">
        <Hero />
      </main>
    </div>
  );
}

export default App;
