import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // To track if menu is open or closed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav>
      <div className='nav-title'>
        <h1>Rabia</h1>
      </div>
      <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
        <li className='nav-item' onClick={() => navigate('/')}>Home</li>
        <li className='nav-item' onClick={() => navigate('/about')}>About</li>
        <li className='nav-item' onClick={() => navigate('/skills')}>Skills</li>
        <li className='nav-item' onClick={() => navigate('/project')}>Projects</li>
        <li className='nav-item' onClick={() => navigate('/contact')}>Contact me</li>
        <li className='nav-item close-menu' onClick={toggleMenu}>Close ✕</li> {/* Close button for mobile */}
      </div>
      <i className="bi bi-list hamburger" onClick={toggleMenu}></i> {/* Hamburger icon */}
    </nav>
  );
}

export default Navbar;
