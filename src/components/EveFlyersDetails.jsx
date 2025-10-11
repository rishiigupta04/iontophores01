import React from "react";
import "./EveFlyersDetails.css";
import productHeroImg from "../assets/eve.png"; // hero image

const EveFlyersDetails = ({ activeProduct }) => {
  return (
    <div
      id="eve-flyers-details"
      className="product-details"
      style={{ display: activeProduct === "eve-flyers" ? "block" : "none" }}
    >
      {/* Hero Section */}
      <section className="product-hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Drepto Eve+</h1>
            <p className="lead">
              Feminine Herbal Pain Relieving Patch — instant relief from
              menstrual cramps with 100% natural herbal ingredients.
            </p>
          </div>

          <div className="hero-image-container">
            <img
              src={productHeroImg}
              alt="Drepto Eve+ Patch"
              className="hero-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="product-overview">
        <div className="overview-inner">
          <div className="overview-text scroll-fade-up">
            <h2>About Drepto EVE+</h2>
            <p className="overview-tagline">
              Herbal pain relief that works fast, lasts long, and keeps you moving confidently.
            </p>

            <div className="overview-highlights">
              <div className="highlight-card scroll-fade-up">
                <div className="highlight-icon">🌿</div>
                <h4>Natural Formula</h4>
                <p>
                  Blend of Frankincense, Eucalyptus & Menthol — anti-inflammatory and herbal.
                </p>
              </div>

              <div className="highlight-card scroll-fade-up">
                <div className="highlight-icon">🕒</div>
                <h4>12-Hour Relief</h4>
                <p>
                  Long-lasting comfort through ultra-thin sustained release technology.
                </p>
              </div>

              <div className="highlight-card scroll-fade-up">
                <div className="highlight-icon">💧</div>
                <h4>Comfort & Confidence</h4>
                <p>
                  Discreet, breathable patch for all-day wear — perfect for daily routines.
                </p>
              </div>
            </div>

            <p className="overview-summary">
              Drepto EVE+ empowers women to stay pain-free and active, even on difficult days.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="product-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card scroll-fade-up">
            <div className="benefit-icon">🌿</div>
            <h3>100% Herbal & Safe</h3>
            <p>
              Made from pure herbal ingredients ensuring safe, soothing pain relief with no side effects.
            </p>
          </div>

          <div className="benefit-card scroll-fade-up">
            <div className="benefit-icon">⚡</div>
            <h3>Fast-Acting Comfort</h3>
            <p>
              Starts relieving cramps within 10 minutes — promoting quick comfort and instant ease.
            </p>
          </div>

          <div className="benefit-card scroll-fade-up">
            <div className="benefit-icon">🕒</div>
            <h3>Long-Lasting Relief</h3>
            <p>
              Provides up to 12 hours of continuous comfort and reduced inflammation during the day.
            </p>
          </div>

          <div className="benefit-card scroll-fade-up">
            <div className="benefit-icon">💧</div>
            <h3>Discreet & Comfortable</h3>
            <p>
              Lightweight, ultra-thin patch design for seamless wear — ideal for work, travel, or workouts.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="product-instructions">
        <h2>How to Use</h2>
        <div className="steps-container">
          <div className="step scroll-fade-up">
            <div className="step-icon">
              <span>1</span>
              <div className="pulse-ring"></div>
            </div>
            <p>Open the pouch carefully and remove the patch.</p>
          </div>

          <div className="step scroll-fade-up">
            <div className="step-icon">
              <span>2</span>
              <div className="pulse-ring"></div>
            </div>
            <p>Peel off the protective liner gently before applying.</p>
          </div>

          <div className="step scroll-fade-up">
            <div className="step-icon">
              <span>3</span>
              <div className="pulse-ring"></div>
            </div>
            <p>Apply directly to the lower abdomen on clean, dry skin.</p>
          </div>

          <div className="step scroll-fade-up">
            <div className="step-icon">
              <span>4</span>
              <div className="pulse-ring"></div>
            </div>
            <p>Dispose after use. Avoid reusing or applying on wounds.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EveFlyersDetails;