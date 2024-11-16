import React from 'react'

function Payments({item}) {
  return (
    <li className={item.className}>
    <img src={item.imageUrl} alt={item.imageAlt}/>
    <p className="manage text"> {item.text}</p>
</li>
    
  )
}

export default Payments