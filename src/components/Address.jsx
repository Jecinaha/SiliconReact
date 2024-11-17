import React from 'react'

function Address() {
  return (
    <div className="addresses">



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
       </div>

        <div className="addresses">
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
    </div>

        </div>



  )
}

export default Address