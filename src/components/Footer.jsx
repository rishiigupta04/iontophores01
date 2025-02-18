import React from "react";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img width={300} src="/newwwicon.png" alt=" company logo" />
          {/* <div className="social-icons">
            <Facebook size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
            <Youtube size={20} />
          </div> */}
        </div>

        <div className="footer-section address-section">
          <p>SINE, Rahul Bajaj BLDG</p>
          <p>IIT Bombay, Powai</p>
          <p>Mumbai 400076</p>
        </div>

        <div className="footer-section links-section">
          <ul className="footer-links">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#features">Features</a>
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
