import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <a href="/">
          <div className="logo">Iontophores®</div>
        </a>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about-us">About us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
