import React from "react";

const Stats = () => {
  return (
    <section className="section stats">
      <div className="container">
        <h2 style={{ color: "white" }}>RA and Iontophoresis: By the Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>17.6M</h3>
            <p>People affected by RA globally</p>
          </div>
          <div className="stat-item">
            <h3>13M</h3>
            <p>RA patients in India</p>
          </div>
          <div className="stat-item">
            <h3>90%</h3>
            <p>Improvement in drug efficacy with iontophoresis</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Non-invasive treatment method</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
