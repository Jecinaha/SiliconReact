import React from 'react'
import appStore from '../assets/images/appstore.svg'
import googlePlay from '../assets/images/googleplay.svg'
import iphoneBack from '../assets/images/iphone-back_desktop.svg'
import iphoneFront from '../assets/images/iphone-front_desktop.svg'

const Hero = () => {
  return (

<div className="hero">
    <div className="headline"> 
        <h1 className="heading">Manage All Your Money in One App</h1>
    </div>
    <div className="content text">
        <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
        <div className="buttons">
        <a className="btn-download-app" href="#"><img src={appStore} alt="Appstore"/></a>
        <a className="btn-download-app" href="#"><img src={googlePlay} alt="Google play"/></a>
        </div>
        <a href="#" className="discover-more" id="discover-more">
            <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span className="more text">Discover more</span>
        </a>    
   </div>
    <div className="images">
        <img className="img-back" src={iphoneBack} alt="iPhone back my budget"/>
        <img className="img-front" src={iphoneFront} alt="iPhone front transactions"/>
    </div>
</div>

  )
}

export default Hero