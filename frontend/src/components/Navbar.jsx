import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from './../assests/logo_1.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbarx">
      <div className="navbar-logo ">
        <img src={logo} alt="Logo" className='img-fluid w-75' />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`navbar-links mt-3 ${isOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/capability">Capabilities</Link></li>
        <li><Link to="/equipment">Product Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-button">
        <button className="appointment-btn" style={{border:"none",outline:"none"}}>(+91) 8951960110</button>
      </div>
    </nav>
  );
};

export default Navbar;
