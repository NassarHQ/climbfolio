import React from "react";
import NavigationSection from './NavigationSection';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi,</h1>
          <h1>I am Mohammed,</h1>
          <h1>Computer Science Student at SJSU.</h1>
        </div>
        <div className="hero-image">
          {/* Your image here */}
        </div>
      </div>
      <NavigationSection />
    </div>
  );
};

export default MainPage;