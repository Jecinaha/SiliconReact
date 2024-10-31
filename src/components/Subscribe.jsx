import React from 'react'
import notificationIcon from '../assets/images/notificationIcon.svg'


const Subscribe = () => {
  return (
<div className="subscribe container">

    <div className="newsletter">
        <div className="notification">
            <img src={notificationIcon} alt="notification-icon"/>
        </div>
        <h4 className="subscribe-1 heading">Subscribe to our
            newsletter</h4>
        <h4 className="subscribe-2 heading">Subscribe to our newsletter to stay informed about latest updates</h4> 
    </div>

    <div className="subscribe-group">
        <div className="input-group">
            <i className="fa-light fa-envelope icon"></i>
            <input className="form-input email" type="email" placeholder="Your email"/>
            <button className="btn">Subscribe</button>
        </div>
    </div>
</div>
  )
}

export default Subscribe
