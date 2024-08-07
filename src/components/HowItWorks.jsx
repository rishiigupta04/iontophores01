import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <h2>How Our Iontophoretic Patch Works</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Step 1: Patch Application</h3>
              <p>
                The iontophoretic patch is applied directly to the skin near the
                affected joint.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Step 2: Activation</h3>
              <p>
                A small electric current is generated, creating an electrical
                field.
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Step 3: Drug Mobilization</h3>
              <p>
                The electric field mobilizes the charged drug molecules in the
                patch reservoir.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Step 4: Transdermal Delivery</h3>
              <p>
                Drug molecules are propelled through the skin into the
                underlying tissue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
