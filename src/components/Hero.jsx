import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content container">
        <h1>Revolutionary Iontophoretic Patch for Rheumatoid Arthritis</h1>
        {/* <p>
          Experience the future of RA treatment with our innovative,
          non-invasive drug delivery system.
        </p> */}
        <a href="#stats-table" className="cta-button">
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;
