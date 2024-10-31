import React from 'react'

const Header = () => {
  return (
    
    <div className="header">

        <a id='logo' href="index.html"><img src="/images/siliconlogo.svg" alt="Silicon Logotype"/></a>
    
        <nav className="navbar">
            <a className="nav-link" href="#">Features</a>
        </nav>

        <div id='darkModeToggleWwitch' className="btn-toggle-switch">
              <span className="label">Dark mode</span>
              <label for="darkmode-switch" className="toggle-switch">
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
  )
}

export default Header