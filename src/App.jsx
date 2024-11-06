import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/main.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Features from './pages/Features'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <div className="bg-secondary">
      <Header />
          </div>
      <main>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/features" element={<Features />} />
       </Routes>
      </main> 
      <Footer />
    </div>
    </BrowserRouter>
 
  )
}



export default App
