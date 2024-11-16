import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

const Clients = () => {
    const [testimonials, setTestimonials] = useState ([])

    const getTestimonials = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(() => {
        getTestimonials()

    }, [])

  return (
    <div id="clients">
        <div className="container">
            <h2 className="heading">
                Clients are Loving Our App
            </h2>
            <div className="cards">

                {
                    testimonials.map((testimonial) => (
                        <Testimonial key={testimonial.id} item={testimonial} />

                    ))
                }

                
       
            </div>
            
        
       </div>
    </div>


  )
}

export default Clients