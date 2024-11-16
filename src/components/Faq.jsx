import React, { useState, useEffect } from 'react'
import phone from '../assets/images/phone.svg'
import message from '../assets/images/message.svg'
import Questions from './Questions'
import { Link } from 'react-router-dom'



/* Script för att öppna accordion som behöver fixas till så att det fungerar i React
var questionButtons = document.querySelectorAll(".question-button");
var i;

for (i = 0; i < questionButtons.length; i++) {
  questionButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.parentElement.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.style.maxHeight = null;
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} */

  const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle active panel
    };
  
    return (
      <div className="accordion">
        {questionButtons.map((button, index) => (
          <div key={index}>
            <button
              className={`question-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {button.label}
            </button>
            <div
              className="panel"
              style={{
                display: activeIndex === index ? 'block' : 'none',
                maxHeight: activeIndex === index ? `${document.getElementById(`panel-${index}`).scrollHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-out'
              }}
              id={`panel-${index}`}
            >
              {button.content}
            </div>
          </div>
        ))}
      </div>
    );
  };

const Faq = () => {
    const [accordions, setAccordions] = useState ([])

    const fetchAccordions = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
      const data = await res.json()
      setAccordions(data)
      
    }

    useEffect(() => {
        fetchAccordions()

    }, [])


  return (
    <div id="faq">
        <div className="container">
            
            <div className="group-text">
                <h2>Any questions? Check out the FAQs</h2>
                <p className="unanswered text">Still have unanswered questions and need
                    to get in touch?</p>
            </div>

            <div className="boxes">
                <div className="phone-question">
                    <img src={phone} alt="phone"/>
                    <p>Still have questions?</p>
                    <a className="contact-phone" href="#">Contact us <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="message-question">
                    <img src={message} alt="message"/>
                    <p>Don't like phone calls?</p>
                    <a className="contact-message" href="#">Contact us <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div> 
            </div>

            <div className="group-questions">
                {
                      accordions.map(item => (
                        <Questions key={item.id} item={item} />
                    ))
                }
            </div>
        <button className="btn btn-contact-us"><Link className="contact-link" to="/Contact">Contact us now</Link></button>
    </div>
</div>

  )
}

export default Faq