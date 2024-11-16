import React, { useState } from 'react'

function ConsultationForm() {
    const [fullName, setFullName] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    function onFullNameChanged(event) {
        setFullName(event.target.value);
    }

    function onEmailChanged(event) {
      // kolla ifall email är giltigt värde
      // sätt felmeddelande ifall ogiltig
    }

    async function submit() {
        const requestData = {
            fullName: fullName
        };
        console.log(requestData);

        try {
          await fetch("", {
            method: "POST", 
            body: JSON.stringify(requestData)})
            // kom den hit gick det bra
        } catch(e) {
          // Sätt felmeddelande
        }
    }

  return (
    <form id='conForm' className='con-form'>
      <div className='header'>
        <h2>Get Online Consultation</h2>
      </div>

      <div className='body'>
        <div className='formgroup'>
            <label htmlFor='fullName' className='form-label'>Full name</label>
            <input type="text" id='fullName' className='form-input' onChange={onFullNameChanged}/>
        </div>

        <div className='formgroup'>
            <label htmlFor='emailAddress' className='form-label'>Email address</label>
            <input type="email" id='emailAdress' className='form-input'/>
        </div>

        <div className='formgroup'>
            <label htmlFor='specialist' className='form-label'>Specialist</label>
            <select type="text" id='specialist' className='form-input'>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
                <option value={"Engineer"}>Engineer</option>
            </select>
        </div>

        <button type='button' className='btn' onClick={submit}>Make an appointment</button>


      </div>

    </form>
  )
}

export default ConsultationForm



// const regForm = document.querySelector('#regForm');

// regForm.addEventListener('submit' , e => {
//     e.preventDefault()

//     const user = {}

//     console.log(user)
// })