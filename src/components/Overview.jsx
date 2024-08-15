import React from "react";
import ReactPlayer from "react-player/youtube";

const Overview = () => {
  return (
    <section id="overview" className="section container">
      <h2>Transforming Rheumatoid Arthritis Treatment</h2>
      <div className="mobile-video-container ">
        <ReactPlayer
          url="https://youtu.be/i859NvfGiuk"
          width="500px"
          height="250px"
          controls={true}
          light={true}
          playsinline={true}
          muted={true}
        />
      </div>
      <p>
        <span style={{ fontSize: "25px" }}>Rheumatoid arthritis (RA)</span> is a
        debilitating autoimmune disorder causing chronic pain and inflammation,
        affecting over{" "}
        <span
          style={{ fontSize: "22px", fontWeight: "bold", color: "#ef8d38" }}
        >
          17.6 million
        </span>{" "}
        people globally and{" "}
        <span
          style={{ fontSize: "22px", fontWeight: "bold", color: "#ef8d38" }}
        >
          13 million
        </span>{" "}
        in India alone. Traditional treatments, including Methotrexate (MTX),
        face challenges such as dosage restrictions and reduced absorption
        rates, limiting their effectiveness. <br></br>
      </p>
      <p>
        <br />
        Our groundbreaking iontophoretic patch offers a revolutionary solution,
        enhancing drug delivery and improving patient outcomes. By leveraging
        the power of iontophoresis, we've created a non-invasive, highly
        effective method for administering RA medication, promising a new era in
        arthritis care.
      </p>
      <div className="image-container">
        <img
          src="/3.jpg"
          alt="Iontophores® research team"
          width="500"
          height="400"
        />
        <img
          src="ra2.jpg"
          alt="rheumatoid arthritis"
          width="500"
          height="300"
        />
        <img src="/R.jpg" alt="rheumatoid arthritis" width="500" height="400" />
      </div>
    </section>
  );
};

export default Overview;
