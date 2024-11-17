import React, { useState } from 'react';
import siliconLogo from '../assets/images/siliconlogo.svg';
import { Link, NavLink } from 'react-router-dom';
import DarkMode from '../components/DarkModeSwitch.jsx';
import SignIn from './SignIn.jsx';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [signIn, setSignIn] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(prevState => !prevState);
  };

  return (
    <header>
      <div className="container">
        <Link id='logo' to="/">
          <img src={siliconLogo} alt="Silicon Logotype" />
        </Link>

        <nav className={`navbar ${showMobileMenu ? 'active' : ''}`}>
          <NavLink className="nav-link" to="/Features">Features</NavLink>
          <NavLink className="nav-link" to='/Contact'>Contact us</NavLink>
        </nav>

        {}
        {showMobileMenu && (
          <div className="mobile-menu">
            <NavLink className="nav-link" to="/Features">Features</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact us</NavLink>
            <Link to="/Sign-In" className="btn btn-primary" onClick={() => setSignIn(true)}>
              <i className="fa-thin fa-user"></i>
              <span className="span-btn">Sign in / up</span>
            </Link>
          </div>
        )}

        <DarkMode />

        <button className="btn-mobile" onClick={toggleMobileMenu}>
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
