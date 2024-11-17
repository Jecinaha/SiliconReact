import React, { useState } from 'react';
import notificationIcon from '../assets/images/notificationIcon.svg'


const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      setSuccessMessage('');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Thank you for subscribing!');
    setError('');
    setEmail('');
  };

  return (

    <div id="subscribe">
        <div className='container subscribe-group'>
        <div className="newsletter">
            <div className="notification">
                <img src={notificationIcon} alt="notification-icon"/>
            </div>
            <h4 className='subscribe-1 heading'>Subscribe to our Newsletter</h4>
            <h4 className='subscribe-2 heading'>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>


      <form onSubmit={handleSubmit}>
        <div className="form-group input-group">
        <i className="fa-light fa-envelope icon"></i>
          <input className='form-imput email' type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Your email"/>
        </div>

        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit" className="btn subscribe-button">
          Subscribe</button>
      </form>
    </div>
    </div>
  );
};

export default SubscribeForm;
