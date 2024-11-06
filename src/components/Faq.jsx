import React from 'react'
import phone from '../assets/images/phone.svg'
import message from '../assets/images/message.svg'



const Faq = () => {
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
                <div className="questions">
                    <div className="questions-header">
                        <span className="question-text">Is any of my personal information stored in the App?</span>
                        <button className="question-button btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="panel">
                    <p className="text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    <p className="text">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                    </div>
                </div>
        
                <div className="questions">
                    <div className="questions-header">
                        <span className="question-text">What formats can I download my transaction history in?</span>
                        <button className="question-button btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="panel">
                        <p className="text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                        <p className="text">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                        </div>
                </div>

                <div className="questions">
                <div className="questions-header">
                    <span className="question-text">Can I schedule future transfers?</span>
                    <button className="question-button btn-circle">
                            <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div className="panel">
                    <p className="text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    <p className="text">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                </div>
                </div>

                <div className="questions">
                <div className="questions-header">
                    <span className="question-text">When can I use Banking App services?</span>
                    <button className="question-button btn-circle">
                            <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div className="panel">
                    <p className="text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    <p className="text">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                </div>
                </div>

                <div className="questions">
                <div className="questions-header">
                    <span className="question-text">Can I create my own password that is easy for me to remember?</span>
                    <button className="question-button btn-circle">
                            <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div className="panel">
                    <p className="text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    <p className="text">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                </div>
               </div>

                <div className="questions">
                <div className="questions-header">
                    <span className="question-text">What happens if I forget or lose my password?</span>
                    <button className="question-button btn-circle">
                            <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div className="panel">
                    <p className="text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    <p className="text">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                </div>
               </div>
            </div>
        <button className="btn btn-contact-us">Contact us now</button>
    </div>
</div>

  )
}

export default Faq