import React from 'react'
import Facebook from '../assets/images/SocialMedia/facebook.svg'
import Twitter from '../assets/images/SocialMedia/twitter.svg'
import Instagram from '../assets/images/SocialMedia/instagram.svg'
import Youtube from '../assets/images/SocialMedia/youtube.svg'
import BreadCrumb from '../components/BreadCrumb'
import ConsultationForm from '../components/ConsultationForm'


const ContactUs = () => {
  return (
    <div>

      <BreadCrumb />

      <div className="bg-secondary">
      <div id="contact" className="container">

        <div className="contact-text">

            <div className="contact-us">
            <i className="contact-icon fa-light fa-envelope"></i>
                <div className="text">
                    <h2>Email us</h2>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                    <a href="#">Leave a message <i className="fa-light fa-arrow-right"></i></a>
                </div>
            </div>
        
            <div className="contact-us">
            <i className="contact-icon fa-light fa-users-medical"></i>
                <div className="text">
                    <h2>Careers</h2>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <a href="#">Send an application <i className="fa-light fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
        
      
        <ConsultationForm className="contact-form"/>
        
      </div>
      </div>

      <div className="maps container">
                
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/d/embed?mid=103buF2IAo3tcdeGZtmnhbo5eBdWUGhU&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>                
                </div>

                <div className="addresses">

                    <h2> Medical Center 1</h2>
                    <div className="informations">
                        <i className="icon fa-light fa-location-dot"></i>
                        <p className="info">2464 Royal Ln. Mesa,New Jersey 45463</p> 
                    </div>
                    <div className="informations">
                        <i className="icon fa-sharp fa-light fa-phone-volume"></i>
                        <p className="info">(406) 544-0123</p> 
                    </div>
                    <div className="informations">
                        <i className="icon fa-light fa-clock-five"></i>
                        <div className="info">
                            <p>Mon – Fri: 9:00 am – 22:00 am</p>
                            <p>Sat – Sun: 9:00 am – 20:00 am</p>
                        </div>
                    </div>

                    <h2> Medical Center 2</h2>
                    <div className="informations">
                        <i className="icon fa-light fa-location-dot"></i>
                        <p className="info">4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                    <div className="informations">
                        <i className="icon fa-sharp fa-light fa-phone-volume"></i>
                        <p className="info">(406) 555-0120</p>
                    </div>
                    <div className="informations">
                        <i className="icon fa-light fa-clock-five"></i>
                        <div className="info">
                            <p>Mon – Fri: 9:00 am – 22:00 am</p>
                            <p>Sat – Sun: 9:00 am – 20:00 am</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <img className="media" src={Facebook} alt="Facebook"/>
                        <img className="media" src={Twitter} alt="Twitter"/>
                        <img className="media" src={Instagram} alt="Instagram"/>
                        <img className="media" src={Youtube} alt="Youtube"/>
                    </div>
                </div>
            </div>

    </div>
    

  )
}

export default ContactUs