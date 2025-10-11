import React, { useState, useRef, useEffect } from "react";
import './Header.css';

const Header = ({ showProduct }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsDropdownOpen(true);
  };

  const closeDropdownWithDelay = (delay = 150) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
      closeTimer.current = null;
    }, delay);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProductClick = (productId) => {
    showProduct(productId);
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <nav className="container">
        <div className="nav-wrapper">
          <a href="/" aria-label="Home">
            <img src="/newwwicon.png" alt="Drepto Biomedical Devices®" />
          </a>
          <div className="nav-links">
            <div
              className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
              onMouseEnter={openDropdown}
              onMouseLeave={() => closeDropdownWithDelay(120)}
            >
              <a href="#" onClick={(e) => e.preventDefault()} aria-haspopup="true" aria-expanded={isDropdownOpen}>
                Products ▼
              </a>
              <div
                className="dropdown-menu"
                role="menu"
                onMouseEnter={openDropdown}
                onMouseLeave={() => closeDropdownWithDelay(120)}
              >
                <a href="#" role="menuitem" onClick={(e) => { e.preventDefault(); handleProductClick('ra-patch'); }}>
                  RA Iontophoretic Patch
                </a>
                <a href="#" role="menuitem" onClick={(e) => { e.preventDefault(); handleProductClick('eve-flyers'); }}>
                  Drepto EVE+
                </a>
              </div>
            </div>
            <a href="#about-us">About us</a>
            <a href="#faq">FAQ</a>
          </div>
          <a
            id="contact-btn"
            style={{
              paddingBlock: "8px",
              paddingInline: "20px",
              borderRadius: "5px",
              backgroundColor: "var(--primary-color)",
              color: "white",
            }}
            href="#contact"
          >
            Contact Us
          </a>
          <button className={`hamburger-btn ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar} aria-label="Toggle menu" aria-expanded={isSidebarOpen}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="sidebar open">
          <button className="close-btn" onClick={toggleSidebar} aria-label="Close menu">
            &times;
          </button>
          <div className="sidebar-nav">
            <div className="dropdown-mobile">
              <a href="#" onClick={toggleDropdown}>Products ▼</a>
              {isDropdownOpen && (
                <div className="dropdown-menu-mobile">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleProductClick('ra-patch'); toggleSidebar(); }}>RA Iontophoretic Patch</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleProductClick('eve-flyers'); toggleSidebar(); }}>Drepto EVE+</a>
                </div>
              )}
            </div>
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