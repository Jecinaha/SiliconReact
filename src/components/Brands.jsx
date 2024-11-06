import React from 'react'
import Brand1 from '../assets/images/brand1.svg'
import Brand2 from '../assets/images/brand2.svg'
import Brand3 from '../assets/images/brand3.svg'
import Brand4 from '../assets/images/brand4.svg'
import Brand5 from '../assets/images/brand5.svg'
import Brand6 from '../assets/images/brand6.svg'

const Brands = () => {
  return (
    <div id="brands">
        <div className='container'>
            <div id="brand-1" className="brand-box">
                <img src={Brand1} alt="Logotype brand1"/>
            </div>
            <div id="brand-2" className="brand-box">
                <img src={Brand2} alt="Logotype brand2"/>
            </div>
            <div id="brand-3" className="brand-box">
                <img src={Brand3} alt="Logotype brand3"/>
            </div>
            <div id="brand-4" className="brand-box">
                <img src={Brand4} alt="Logotype brand4"/>
            </div>
            <div id="brand-5" className="brand-box">
                <img src={Brand5} alt="Logotype brand5"/>
            </div>
            <div id="brand-6" className="brand-box">
                <img src={Brand6} alt="Logotype brand6"/>
            </div>    
        </div>
</div>

  )
}

export default Brands