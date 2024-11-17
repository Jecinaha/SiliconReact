import React from 'react'
import { Link } from 'react-router-dom'

function ContactText() {
  return (
    <div className="contact-text">

        <h1>Contact Us</h1>

        <div className="contact-us">
        <i className="contact-icon fa-light fa-envelope"></i>
            <div className="text">
                <h2>Email us</h2>
                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <Link className='link' to="/Contact">Leave a message <i className="fa-light fa-arrow-right"></i></Link>
            </div>
        </div>

        <div className="contact-us">
        <i className="contact-icon fa-light fa-users-medical"></i>
            <div className="text">
                <h2>Careers</h2>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <Link className='link' to="/Contact">Send an application <i className="fa-light fa-arrow-right"></i></Link>
            </div>
        </div>

    </div>

  )
}

export default ContactText