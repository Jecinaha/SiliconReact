import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/main.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Features from './pages/Features'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <div className="">
      <Header />
          </div>
      <main>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Contact" element={<ContactUs />} />
         <Route path="/features" element={<Features />} />
         <Route path="Sign-In" element={<SignIn />} />
       </Routes>
      </main> 
      <Footer />
    </div>
    </BrowserRouter>
 
  )
}



export default App
