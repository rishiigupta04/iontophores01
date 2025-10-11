import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content container">
        <h1>Innovative Biomedical Solutions for Better Healthcare</h1>
        <p>
          Pioneering non-invasive drug delivery systems for rheumatoid arthritis
          and women's health
        </p>
        <a href="#product-portfolio" className="cta-button">
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default Hero;