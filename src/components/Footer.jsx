import React from "react";

const Footer = () => {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const el = document.getElementById("product-portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: update the hash so navigation still works
      window.location.hash = "#product-portfolio";
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img width={300} src="/newwwicon.png" alt=" company logo" />
        </div>

        <div className="footer-section address-section">
          <p>SINE, Rahul Bajaj BLDG</p>
          <p>IIT Bombay, Powai</p>
          <p>Mumbai 400076</p>
        </div>

        <div className="footer-section links-section">
          <ul className="footer-links">
            <li>
              <a href="#product-portfolio" onClick={scrollToProducts}>
                Our Products
              </a>
            </li>
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Drepto Bio Devices. 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;