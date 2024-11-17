import React, { useState } from 'react'
import sendMoney from '../assets/images/sendmoney.svg'
import Contacts from '../assets/images/contacts.svg'
import Payments from './Payments'
import MoneyText from './MoneyText'
import { Link } from 'react-router-dom'


const Money = () => {
    const [payments, setPayments] = useState ([
        {className: "creditcard", imageUrl: "./images/money/creditcard.svg", imageAlt: "Credit card", text: "Manage your payments online. Mollis congue egestas egestas fermentum fames."},
        {className: "wallet", imageUrl: "./images/money/wallet.svg", imageAlt: "Wallet", text: "A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris."}
    ])
    const [moneyText, setMoneytext] = useState ([
        {text: "Banking transactions are free for you"},
        {text: "No monthly cash commission"},
        {text: "Manages payments and transactions online"}
    ])

    
  return (
    <div id="money">
        <div className="container">
            
            <div className="yourmoney">
                <h2 className="makemoney heading">Make your money transfer simple and clear</h2>

                <ul className="moneytext">
                    {
                     moneyText.map((item, index) => (<MoneyText key={index} item={item} />))
                    } 
                </ul>
              
              <button className="btn btn-primary"> <Link className='btn btn-primary' to="/Learn-More"> Learn More 
                <i className="fa-solid fa-arrow-right"></i> </Link>
                </button>
            </div>
            
            <div className="sendmoney">
                <img src={sendMoney} alt="Send money"/>
            </div>

            <div className="contacts">
                <img src={Contacts} alt="contacts"/>
            </div>
                
                <div className="payment">
                    <h2 className="receivepayment heading">Receive payment from international bank details </h2>
                    <ul className="icons">
                        {
                            payments.map((item, index) => (<Payments key={index} item={item} />))   
                        }
                    </ul>
                    <button className='btn btn-primary'>
                    <Link className='btn btn-primary' to="/Learn-More" >Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                    </button>
                    
                </div>
        </div>
    </div>
  )
}

export default Money