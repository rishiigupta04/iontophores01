import React from "react";

const RAContent = () => {
  return (
    <section className="section ra-content container">
      <div className="ra-text">
        <h2>Understanding Rheumatoid Arthritis</h2>
        <p>
          <span style={{ fontSize: "22px" }}>Rheumatoid arthritis (RA)</span> is
          a chronic autoimmune disorder that primarily affects the joints,
          causing inflammation, pain, and potential long-term damage. This
          condition occurs when the body's immune system mistakenly attacks its
          own tissues, particularly the synovium - the lining of the membranes
          surrounding the joints.
        </p>
        <p>RA is characterized by:</p>
        <ul>
          <li>
            Symmetric joint involvement (affecting the same joints on both sides
            of the body)
          </li>
          <li>Morning stiffness lasting more than an hour</li>
          <li>Fatigue and general feeling of being unwell</li>
          <li>
            Potential involvement of other organs such as the heart, lungs, and
            eyes
          </li>
        </ul>
      </div>
      <div className="ra-stats">
        <div className="stat">
          <div className="stat-number">17.6M</div>
          <div className="stat-label">People affected by RA globally</div>
        </div>
        <div className="stat">
          <div className="stat-number">13M</div>
          <div className="stat-label">RA patients in India</div>
        </div>
        <div className="stat">
          <div className="stat-number">90%</div>
          <div className="stat-label">
            Improvement in drug efficacy with Drepto Biomedical Devicesis
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAContent;
