import HeroSection from "./components/HeroSection";
import NavigationSection from "./components/NavigationSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection"
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <NavigationSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
}

export default App;