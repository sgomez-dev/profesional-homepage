import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css'

export const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <div className="logo">
        <span>S</span>
        <h3>Santiago Gómez de la Torre Romero</h3>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to='/home' className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/services' className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Services</NavLink>
          </li>
          <li>
            <NavLink to='/curriculum' className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Curriculum</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
