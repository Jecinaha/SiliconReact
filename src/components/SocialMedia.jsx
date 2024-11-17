import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../assets/images/SocialMedia/facebook.svg'
import Twitter from '../assets/images/SocialMedia/twitter.svg'
import Instagram from '../assets/images/SocialMedia/instagram.svg'
import Youtube from '../assets/images/SocialMedia/youtube.svg'

function SocialMedia() {
  return (
    <div className="social-media">

        <Link to="https://www.facebook.com/Login/">
        <img className="media" src={Facebook} alt="Facebook"/>
        </Link>
        <Link to="https://x.com/?mx=2">
        <img className="media" src={Twitter} alt="Twitter"/>
        </Link>
        <Link to="https://www.instagram.com/">
        <img className="media" src={Instagram} alt="Instagram"/>
        </Link>
        <Link to="https://www.youtube.com/">
        <img className="media" src={Youtube} alt="Youtube"/>
        </Link> 
   </div>
  )
}

export default SocialMedia