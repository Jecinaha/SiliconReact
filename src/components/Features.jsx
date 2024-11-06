import React, { useState } from 'react'
import Appfeatures from '../components/Appfeatures.jsx'
import iphoneVisa from '../assets/images/iphonevisa.svg'


const Features = () => {
    const [AppFeatures, setAppFeatures] = useState([
        {className: "easy", imageUrl: "./images/features/easypayments.svg", imageAlt: "Easy payment", title: "Easy Payments", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."},
        {className: "data", imageUrl: "./images/features/datasecurity.svg", imageAlt: "Data security", title: "Data Security", text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."},
        {className: "cost", imageUrl: "./images/features/coststatistics.svg", imageAlt: "Cost statistics", title: "Cost statistics", text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."},
        {className: "support", imageUrl: "./images/features/support.svg", imageAlt: "Support 24/7", title: "Support 24/7", text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."},
        {className: "regular", imageUrl: "./images/features/regularcashback.svg", imageAlt: "Regular cashback", title: "Regular Cashback", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."},
        {className: "top", imageUrl: "./images/features/topstandards.svg", imageAlt: "Top standards", title: "Top Standards", text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."},
    ])

  return (
    <div id="features">
        <div className='container'>

        <div className="image">
            <img src={iphoneVisa} alt="Iphone and Visacard"/> 
        </div>
        <div className="headline"> 
            <h3 className="heading">App Features</h3>
        </div>
        <div className="text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</span>
        </div>

        <ul className="appfeatures" >
            { AppFeatures.map((item, index) => (<Appfeatures key={index} item={item} />)) 
            }
              
         </ul>
    </div>
</div>
  )
}

export default Features