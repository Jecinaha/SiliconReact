import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ConsultationForm from '../components/ConsultationForm'
import GoogleMaps from '../components/GoogleMaps'

import Address from '../components/Address'
import SocialMedia from '../components/SocialMedia'
import ContactText from '../components/ContactText'



const ContactUs = () => {
  return (
    <div id="contact">

        <BreadCrumb />

        <div  className="container">
                <ContactText />
                <ConsultationForm className="contact-form"/>
        </div>

        <div className="bg-secondary">
            <div className="maps container">

            <GoogleMaps />
            <div className='info-text'>
                <Address />
                <SocialMedia />
            </div>
            </div>
    </div>
    </div>
    

  )
}

export default ContactUs