import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from './components/Admin'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const MainSite = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Products />
    <WhyChooseUs />
    <Gallery />
    <Contact />
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-store-fixed text-black font-sans selection:bg-gold-500 selection:text-white">
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/owner-dashboard" element={<Admin />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </Router>
  )
}

export default App
