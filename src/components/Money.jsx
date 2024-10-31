import React from 'react'
import sendMoney from '../assets/images/sendmoney.svg'
import Contacts from '../assets/images/contacts.svg'
import creditCard from '../assets/images/creditcard.svg'
import wallet from '../assets/images/wallet.svg'


const Money = () => {
  return (
    <div className="money container">

    <div className="yourmoney">
        <h2 className="makemoney heading">Make your money transfer simple and clear</h2>
        <ul className="moneytext">
            <li>
                <i className="fa-light fa-circle-check"></i>
                <p className="text"> Banking transactions are free for you</p>
            </li>
            <li>
                <i className="fa-light fa-circle-check"></i>
                <p className="text">No monthly cash commission</p> </li>
            <li>
                <i className="fa-light fa-circle-check"></i>
                <p className="text">Manages payments and transactions online</p> 
            </li>
        </ul>
        <button className="btn btn-primary"> Learn More 
            <i className="fa-solid fa-arrow-right"></i>
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
            <li className="creditcard">
                <img src={creditCard} alt="creditcard"/>
                <p className="manage text"> Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </li>
            
            <li className="wallet">
                <img src={wallet} alt="wallet"/>
                <p className="elementur text">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </li>
        </ul>
        <button className="btn btn-primary"> Learn More 
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>
  )
}

export default Money