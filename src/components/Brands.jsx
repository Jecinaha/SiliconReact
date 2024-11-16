import React, { useState } from 'react'
import BrandLogo from './BrandLogo'


const Brands = () => {
    const [brandLogo, setBrandLogo] = useState ([
        {className: "brand-1 brand-box", imageUrl: "./images/brands/brand1.svg", imageAlt: "Logotype brand1"},
        {className: "brand-2 brand-box", imageUrl: "./images/brands/brand2.svg", imageAlt: "Logotype brand2"},
        {className: "brand-3 brand-box", imageUrl: "./images/brands/brand3.svg", imageAlt: "Logotype brand3"},
        {className: "brand-4 brand-box", imageUrl: "./images/brands/brand4.svg", imageAlt: "Logotype brand4"},
        {className: "brand-5 brand-box", imageUrl: "./images/brands/brand5.svg", imageAlt: "Logotype brand5"},
        {className: "brand-6 brand-box", imageUrl: "./images/brands/brand6.svg", imageAlt: "Logotype brand6"}
    ])

  return (
    <div id="brands">
        <div className='container'>

            {
                brandLogo.map((item, index) => (<BrandLogo key={index} item={item} />))
            }
      
        </div>
   </div>

  )
}

export default Brands