import React from 'react'
import Hero from '../components/Hero.jsx'
import Brands from '../components/Brands.jsx'
import Features from '../components/Features.jsx'
import Works from '../components/Works.jsx'
import Money from '../components/Money.jsx'
import Clients from '../components/Clients.jsx'
import Faq from '../components/Faq.jsx'
import Subscribe from '../components/Subscribe.jsx'


function Home() {
  return (
    <>
        <div className="bg-secondary">
            <Hero />
        </div>
            <Brands />
            <Features />
            <Works />
            <Money />
            <Clients />
            <Faq  />
            <Subscribe />
           
    </>
    
  )
}

export default Home