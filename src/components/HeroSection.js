import React from 'react';
function HeroSection({ title, subtitle }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export default HeroSection;
