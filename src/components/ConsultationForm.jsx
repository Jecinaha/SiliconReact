import React, { useState } from 'react'

function ConsultationForm() {
    const [formData, setFormData] = useState({name: '', email: '', specialist:''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({...formData, [name]: value})

      if (value.trim() === '') {
        setErrors(prevErrors => ({...prevErrors, [name]: 'This field is requiered.'}))
      } else {
        setErrors(prevErrors => ({...prevErrors, [name]: ''}))
      }

    }

    const handleOk = () => {
      setSubmitted(false)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()


      const newErrors = {}
      object.keys(formData).forEach(field => {
        if (formData[field].trim() === '') {
          newErrors[field] = 'This field is requiered.'
        }
      })

      if (object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }

      const res = await fetch['https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }]

      if (res.ok) {
        setSubmitted(true)
        setFormData({name: '', email: '', specialist: ''})
      
      }

    }

    if (submitted) {
      return (
        <div className='informationbox'>
          <h1>Tack!</h1>
          <p>Vi kommer återkomma till dig så snart vi kan.</p>
          <button className='btn-green' onClick={handleOk}>OK</button>
        </div>
      )
    }



  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit} id='conForm' className='con-form' noValidate>
      <div className='header'>
        <h2>Get Online Consultation</h2>
      </div>

      <div className='body'>
        <div className='form-group'>
            <label htmlFor='fullName' className='form-label'>Full name</label>
            <input type="text" name="name" className='form-input' value={formData.name} onChange={handleChange} required placeholder='Name'/>
            <span className='error'>{errors.name && errors.name}</span>
        </div>

        <div className='form-group'>
            <label htmlFor='emailAddress' className='form-label'>Email address</label>
            <input type="email" name="email" className='form-input' value={formData.email} onChange={handleChange}  required placeholder='Email'/>
            <span className='error'>{errors.email && errors.email}</span>
        </div>

        <div className='form-group'>
            <label htmlFor='specialist' className='form-label'>Specialist</label>
            <select type="text" name="specialist" className='select-input form-input' value={formData.specialist} onChange={handleChange} required placeholder='Specialist'>
                <option value={"...."}>....</option>
                <option value={"Engineer"}>Engineer</option> 
                <option value={"Doctor"}>Doctor</option>
                <option value={"Developer"}>Develper</option>
            </select>
            <span className='error'>{errors.specialist && errors.specialist}</span>
        </div>
        <button type='submit' className='btn'>Make an appointment</button>
      </div>
    </form>
    </div>
  )
}

export default ConsultationForm
