import React, { useState } from 'react'

const Questions = ({item}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="questions">
        <div className={`questions-header ${isOpen ? 'active': ''}`} onClick={toggleAccordion}>
            <h3 className="question-text">
              {item.title}
            </h3>
            <div className="question-button btn-circle">
                <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} ></i>
            </div> 
        </div>

        {
          isOpen && (

            <p className={`panel text ${isOpen ? 'active': ''}`}>
              {item.content}
              </p>
          
          )
        }

    </div>
  )
}

export default Questions

