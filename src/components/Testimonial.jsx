import React from 'react'
import StarRating from '../components/StarRating.jsx'
import citatIcon from '../assets/images/citat-icon.svg'

const Testimonial = ({item}) => {
  return (
    <div className="card">
            <div>
              <img className="citat-icon" src={citatIcon} alt="citat-icon"/>
            </div>
            <div className="citat">
                 <StarRating className="stars" starRating={item.starRating} />
                  <p className="text">{item.comment}</p>
                    <div className="author">
                        <img className="name" src={item.avatarUrl} alt={item.author}/>
                        <h6 className="heading">{item.author}</h6>
                        <p className='role'>{item.jobRole}</p>
                    </div>
            </div>
    </div>
  )
}

export default Testimonial