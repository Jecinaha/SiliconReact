import React from 'react'
import iphoneVisa from '../assets/images/iphonevisa.svg'
import easyPayments from '../assets/images/easypayments.svg'
import dataSecurity from '../assets/images/datasecurity.svg'
import cost from '../assets/images/coststatistics.svg'
import support from '../assets/images/support.svg'
import regularCashback from '../assets/images/regularcashback.svg'
import topStandards from '../assets/images/topstandards.svg'


const Features = () => {
  return (
    <div className="Features container">
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
            <li className="easy">
                <img src={easyPayments} alt="Easy payments"/>
                <h5 className="heading">Easy Payments</h5>
                <p className="text">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p> 
            </li>
            <li className="data">
                <img src={dataSecurity} alt="Data security"/>
                <h5 className="heading">Data Security</h5>
                <p className="text">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>     
            </li>
            <li className="cost">
                <img src={cost} alt="Cost statistics"/>
                <h5 className="heading">Cost Statistics</h5>
                <p className="text">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </li>
            <li className="support">
                <img src={support} alt="Support 24/7"/>
                <h5 className="heading">Support 24/7</h5>
                <p className="text">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>     
            </li>
            <li className="regular">
                <img src={regularCashback} alt="Regular cashback"/>
                <h5 className="heading">Regular Cashback</h5>
                <p className="text">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>     
            </li>
            <li className="top">
                <img src={topStandards} alt="Top Standards"/>
                <h5 className="heading">Top Standards</h5>
                <p className="text">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>     
            </li>
        </ul>
</div>
  )
}

export default Features