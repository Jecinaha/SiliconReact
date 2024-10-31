import React from 'react'
import citatIcon from '../assets/images/Citat-icon.svg'
import yellowStar from '../assets/images/star-yellow.svg'
import emptyStar from '../assets/images/star-empty.svg'
import fannie from '../assets/images/Fannie.svg'
import albert from '../assets/images/albert.svg'

const Clients = () => {
  return (
    <div className="clients container">
    <h2 className="heading">
        Clients are Loving Our App
    </h2>
    <div className="cards">
    <div className="card1">
    <div><img className="citatIcon" src={citatIcon} alt="citat-icon"/></div>
    <div className="citat1">     
            <div className="4stars stars">
                <img src={yellowStar} alt=""/>
                <img src={yellowStar} alt=""/>
                <img src={yellowStar} alt=""/>
                <img src={yellowStar} alt=""/>
                <img src={emptyStar} alt=""/>
            </div>
            <p className="text">
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
            </p>
            <div className="Fannie">
                <img className="name" src={fannie} alt="Fannie Summers"/>
                <h6 className="heading">Fannie Summers</h6>
                <p>Designer</p>
            </div>
       </div>
    </div>

    <div className="card2">
        <div><img className="citat-icon" src={citatIcon} alt="citat-icon"/></div>
        <div className="citat2">
        <div className="5stars stars">
            <img src={yellowStar} alt=""/>
            <img src={yellowStar} alt=""/>
            <img src={yellowStar} alt=""/>
            <img src={yellowStar} alt=""/>
            <img src={yellowStar} alt=""/>
        </div>
        <p className="text">
            Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
        </p>
        <div className="Albert">
            <img className="name" src={albert} alt="Albert Flores"/>
            <h6 className="heading">Albert Flores</h6>
            <p>Developer</p>
        </div>
    </div>
</div>
    </div>
</div>


  )
}

export default Clients