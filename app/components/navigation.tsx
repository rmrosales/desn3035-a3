import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';


const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This effect will run when the menu is toggled
  useEffect(() => {
    if (isMenuOpen) {
      // Disable body scroll when menu is open
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      // Enable body scroll when menu is closed
      document.body.style.position = "static";
      document.body.style.overflow = "visible";
      document.body.style.left = "0";
      document.body.style.right = "0";
    }

    // Cleanup effect when the component unmounts or state changes
    return () => {
      document.body.style.position = "static";
      document.body.style.overflow = "visible";
      document.body.style.left = "0";
      document.body.style.right = "0";
    };
  }, [isMenuOpen]); // This effect will run every time isMenuOpen changes

  // Toggle the menu when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link className="nav-link" href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link className="nav-link" href="#section2" onClick={closeMenu}>Case Studies</Link></li>
          <li><Link className="nav-link" href="#section3" onClick={closeMenu}>About</Link></li>
          <li><Link className="nav-link" href="https://docs.google.com/document/d/1KqaQEuG12TvkFZHHofGy-mMIVG_9bF7fMXY-jlOoIog/edit?usp=sharing" target="_blank"  onClick={closeMenu}>Resume</Link></li>
          <li><Link className="hero-nav-link" href="https://www.linkedin.com/in/takierosales"
            target="_blank">Hire Me</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;