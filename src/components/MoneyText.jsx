import React from 'react'

function MoneyText({item}) {
  return (
    <li> 
    <i className="fa-light fa-circle-check"></i>
    <p className="text">{item.text}</p>
    </li>
    
)}

export default MoneyText
