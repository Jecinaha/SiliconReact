import React from 'react'

function BrandLogo({item}) {
  return (
    <div className={item.className}>
    <img src={item.imageUrl} alt={item.imageAlt}/>
    </div>
  )
}

export default BrandLogo