import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav className="container">
        <div className="nav-wrapper">
          <a href="/">
            <img src="/logo.png" alt="Iontophores®" />
          </a>
          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about-us">About us</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="hamburger-btn" onClick={toggleSidebar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="sidebar open">
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
          <div className="sidebar-nav">
            <a href="#overview" onClick={toggleSidebar}>
              Overview
            </a>
            <a href="#features" onClick={toggleSidebar}>
              Features
            </a>
            <a href="#how-it-works" onClick={toggleSidebar}>
              How It Works
            </a>
            <a href="#about-us" onClick={toggleSidebar}>
              About us
            </a>
            <a href="#faq" onClick={toggleSidebar}>
              FAQ
            </a>
            <a href="#contact" onClick={toggleSidebar}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
