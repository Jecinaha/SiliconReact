import React, { useState } from 'react';

function ConsultationForm() {
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    if (value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required.' }));
    } else {
    
      if (name === 'fullName' && !nameRegex.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Full name can only contain letters and spaces.' }));
      } else if (name === 'email' && !emailRegex.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Please enter a valid email address.' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
    }
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === '') {
        newErrors[field] = 'This field is required.';
      } else if (field === 'fullName' && !nameRegex.test(formData[field])) {
        newErrors[field] = 'Full name can only contain letters and spaces.';
      } else if (field === 'email' && !emailRegex.test(formData[field])) {
        newErrors[field] = 'Please enter a valid email address.';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ fullName: '', email: '', specialist: '' });
    }
  };

  if (submitted) {
    return (
      <div className="informationbox">
        <h1>Tack!</h1>
        <p>Vi kommer återkomma till dig så snart vi kan.</p>
        <button className="btn-green" onClick={handleOk}>OK</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} id="conForm" className="con-form" noValidate>
        <div className="header">
          <h2>Get Online Consultation</h2>
        </div>

        <div className="body">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Full name</label>
            <input
              type="text"
              name="fullName"
              className="form-input"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
            />
            <span className="error">{errors.fullName && errors.fullName}</span>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            <span className="error">{errors.email && errors.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="specialist" className="form-label">Specialist</label>
            <select
              name="specialist"
              className="select-input form-input"
              value={formData.specialist}
              onChange={handleChange}
              required
              placeholder="Specialist"
            >
              <option value="....">....</option>
              <option value="Customer-service">Customer service</option>
              <option value="Developer">Developer</option>
              <option value="Engineer">Engineer</option>
            </select>
            <span className="error">{errors.specialist && errors.specialist}</span>
          </div>
          <button type="submit" className="btn">Make an appointment</button>
        </div>
      </form>
    </div>
  );
}

export default ConsultationForm;
