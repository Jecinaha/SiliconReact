import React from 'react'
import siliconLogo from '../assets/images/siliconlogo.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">

            <Link id='logo' to="/">
            <img src={siliconLogo} alt="Silicon Logotype"/>
            </Link>
        
            <nav className="navbar">
                <NavLink className="nav-link" to="/Features">Features</NavLink>
                <NavLink className="nav-link" href='/Contact us'>Contact us</NavLink>
            </nav>

            <div id='darkModeToggleWwitch' className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label htmlFor="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <a id="signinup" href="#" className="btn btn-primary">
            <i className="fa-thin fa-user"></i>
            <span className="span-btn">Sign in / up</span></a>

            <button className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>
        </div>
    </header>
  )
}

export default Header