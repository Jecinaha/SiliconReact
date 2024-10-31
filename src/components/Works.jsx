
import React from 'react'
import transferBlack from '../assets/images/Transfer-black.svg'
import transferShell from '..assets/images/transfer-shell.svg'
import transferContainer from '..assets/images/transfer-container.svg'
import tablet1 from '..assets/images/tablet-1.svg'
import tablet2Black from '..assets/images/tablet-2black.svg'
import tablet2Shell from '..assets/images/tablet-2shell.svg'
import tablet2 from '..assets/images/tablet-2.svg'
import tablet3 from '..assets/images/tablet-3.svg'
import budget from '..assets/images/budget.svg'
import yourCards from '..assets/images/yourcards.svg'
import transfer from '..assets/images/tranfer-1.svg'


const Works = () => {
  return (
    <div className="works container">
       <div className="headline">
          <h1 className="heading">How Does It Work?</h1>
       </div>
        
       <div className="mobileMobiles">
           <img className="transferBlack" src={transferBlack}alt="Transfer black"/>
           <img className="transferShell" src={transferShell} alt="Transfer shell"/>
           <img className="transferContainer" src={transferContainer} alt="Transfer container"/>
       </div>

       <div className="mobileTablet">
          <img className="tablet1" src={tablet1} alt="mobile-tablet 1"/>
          <img className="tablet2Black" src={tablet2Black} alt="mobile-tablet 2"/>
          <img className="tablet2Shell" src={tablet2Shell} alt="mobile-tablet 2"/>
          <img className="tablet2" src={tablet2} alt="mobile-tablet 2"/>
          <img className="tablet3" src={tablet3} alt="mobile-tablet 3"/>
       </div>

       <div className="mobileDesktop">
          <img className="budget" src={budget} alt="My budget"/>
          <img className="cards" src={yourCards} alt="Your cards"/>
          <img className="transfer" src={transfer} alt="Transfer 1"/>
       </div>

       <div className="contentMobile">
          <h2 className="heading">Transfers to people from your contact list</h2>
          <p className="text">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="contentTablet">
          <h2 className="heading">Step 3. Transfers to people from your contact list</h2>
          <p className="text">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="contentDesktop">
          <h2 className="heading">Latest transaction history</h2>
          <p className="text">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>
    </div>
  )
}

export default Works

