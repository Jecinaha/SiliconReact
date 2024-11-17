import React, { useState } from 'react';
import notificationIcon from '../assets/images/notificationIcon.svg';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
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
  
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true); 
  
    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
      });
  
      if (response.ok) {
        setSuccessMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }  


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

        <div className="form-group input-group">
          <form onSubmit={handleSubmit}>
            <i className="fa-light fa-envelope icon"></i>
            <input
              className='form-input email'
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
            />
            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
          </form>
          <button
            type="submit"
            className="btn subscribe-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
