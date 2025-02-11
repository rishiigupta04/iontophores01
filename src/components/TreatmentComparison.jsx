import React from "react";

const TreatmentComparison = () => {
  return (
    <section
      id="stats-table"
      className="section treatment-comparison container"
    >
      <h2>Current Treatment vs. Our Solution</h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Traditional Treatment (e.g., Methotrexate)</th>
            <th>Drepto's Iontophoretic Patch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administration</td>
            <td>Oral or injectable</td>
            <td>Transdermal (through skin)</td>
          </tr>
          <tr>
            <td>Absorption Rate</td>
            <td>Variable, affected by dosage restrictions</td>
            <td>High, consistent absorption</td>
          </tr>
          <tr>
            <td>Side Effects</td>
            <td>Potential for systemic side effects</td>
            <td>Reduced systemic toxicity</td>
          </tr>
          <tr>
            <td>Targeting</td>
            <td>Systemic distribution</td>
            <td>Targeted delivery to specific sites</td>
          </tr>
          <tr>
            <td>Efficacy</td>
            <td>Standard</td>
            <td>90% improvement over traditional methods</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TreatmentComparison;
