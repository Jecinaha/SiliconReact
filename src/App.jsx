import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/main.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Features from './pages/Features'
import Header from './components/Header'
import Footer from './components/Footer'
import LearnMore from './pages/LearnMore'
import SignIn from './components/SignIn'


function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <div>
      <Header />
          </div>
      <main>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Contact" element={<ContactUs />} />
         <Route path="/features" element={<Features />} />
         <Route path="/Learn-More" element={<LearnMore />} />
         <Route path="/Sign-In" element={<SignIn />} />

       </Routes>
      </main> 
      <Footer />
    </div>
    </BrowserRouter>
 
  )
}



export default App
