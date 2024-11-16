import React from 'react'
import appStore from '../assets/images/appstore.svg'
import googlePlay from '../assets/images/googleplay.svg'
import iphoneBack from '../assets/images/iphone-back_desktop.svg'
import iphoneFront from '../assets/images/iphone-front_desktop.svg'
import '../assets/css/main.css'
import { Link } from 'react-router-dom'

function discoverMoreClicked() {
    var featuresSection = document.querySelector("#features");
    window.scrollTo({
        top: featuresSection.offsetTop,
        left: 0,
        behavior: "smooth",
    });
}

const Hero = () => {
  return (

<div id="hero">
    <div className='container'>
        <div className="headline"> 
            <h1 className="heading">Manage All Your Money in One App</h1>
        </div>
        <div className="content text">
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons">
            <Link className="btn-download-app" to="https://www.apple.com/se/app-store/"><img src={appStore} alt="Appstore"/></Link>
            <Link className="btn-download-app" to="https://play.google.com/store/games?device=windows"><img src={googlePlay} alt="Google play"/></Link>
            </div>
            <div className="discover-more" id="discover-more">
                <button className="btn-circle" onClick={discoverMoreClicked}>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                <span className="more text">Discover more</span>
            </div>    
        </div>
        <div className="images">
            <img className="img-back" src={iphoneBack} alt="iPhone back my budget"/>
            <img className="img-front" src={iphoneFront} alt="iPhone front transactions"/>
        </div>
    </div>
</div>

  )
}

export default Hero