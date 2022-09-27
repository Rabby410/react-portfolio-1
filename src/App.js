import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <About />
    <Experiance />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
    
  );
}

export default App;
