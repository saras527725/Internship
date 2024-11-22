import React from 'react';
import HeroSection from '../components/HeroSection';
function Home() {
  return (
    <div className="home">
      <HeroSection
        title="Welcome to SaRox"
        subtitle="Your one-stop solution for web development, internships, and more!"
      />
    </div>
  );
}

export default Home;
