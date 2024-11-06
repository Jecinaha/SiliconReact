import React from 'react'

function Appfeatures({item}) {
  return (
    <li className={item.className}>
    <img src={item.imageUrl} alt={item.imageAlt} />
    <h5 className="heading">{item.title}</h5>
    <p className="text">{item.text}</p> 
   </li>
  )
}

export default Appfeatures







