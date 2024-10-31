import './assets/css/main.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import Works from './components/Works'
import Money from './components/Money'
import Clients from './components/Clients'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


function App() {

  return (
    <div ClassName="wrapper">
      <Header/>
      <main>
        <Hero/>
        <Brands/>
        <Features/>
        <Works/>
        <Money/>
        <Clients/>
        <Faq/>
        <Subscribe/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
