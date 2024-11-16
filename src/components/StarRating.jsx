import React from 'react'

const StarRating = ({starRating}) => {
    const maxStars = 5
    const filledStars = Math.min(starRating, maxStars)
    const emptyStars = maxStars - filledStars

  return (
    <div className="stars">

        {
            [...Array(filledStars)].map((_, index) => (
                <i key={index} className="fa-shape fa-solid fa-star"></i>
            ))
        }

        {
            [...Array(emptyStars)].map((_, index) => (
                <i key={index} className="fa-shape fa-regular fa-star"></i>
            ))
        }
    </div>
  )
}

export default StarRating