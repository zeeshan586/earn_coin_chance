import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as Navlogo, } from './assest/Navlogo.svg'; 
import { ReactComponent  as Join} from './assest/Join.svg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
<div className="navbar-logo">
        <Navlogo/> {/* Ensure Logo is imported and used correctly */}
        CoinChance
      </div>
      {/* Normal navbar links */}
      <ul className={`navbar-links-container ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-links">Home</li>
        <li className="navbar-links">Presale Aggregator</li>
        <li className="navbar-links">NFT Aggregator</li>
        <li className="navbar-links">Yield Aggregator</li>
        <li className="navbar-links">Play Game</li>
        <li className="navbar-links">Docs</li>
      </ul>

      <button className="join-button">
        <Join style={{ marginRight: '8px', width: '20px', height: '20px' }} /> {/* SVG inside the button */}
        Join Now
      </button>
      {/* Menu toggle button for mobile view only */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
