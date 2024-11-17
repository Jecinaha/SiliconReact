import React, { useState } from 'react'
import siliconLogo from '../assets/images/siliconlogo.svg'
import { Link, NavLink } from 'react-router-dom'
import DarkMode from '../components/DarkModeSwitch.jsx'
import SignIn from './SignIn.jsx'



const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [signIn, setSignIn] = useState(false);


  return (
    <header>
        <div className="container">

            <Link id='logo' to="/">
            <img src={siliconLogo} alt="Silicon Logotype"/>
            </Link>
        
            <nav className="navbar">
                <NavLink className="nav-link" to="/Features">Features</NavLink>
                <NavLink className="nav-link" to='/Contact'>Contact us</NavLink>
            </nav>

            {showMobileMenu && (
              <div>

              </div>
            )}

            <DarkMode />

        


            <Link id="signinup" to="/Sign-In" className="btn btn-primary" onClick={<Sign-In />}>
            <i className="fa-thin fa-user"></i>
            <span className="span-btn">Sign in / up</span></Link>

            <button className="btn-mobile" /*onClick={}*/ >
                <i className="fa-regular fa-bars"></i>
            </button>
        </div>
    </header>
  )
}

export default Header