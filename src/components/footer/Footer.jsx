import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Shahadath Hossain</a>
      <ul className='permalink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiance'>Experiance</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebook /></a>
        <a href='https://instagram.com'><FaInstagramSquare /></a>
        <a href='https://twitter.com'> <AiFillTwitterCircle /></a>
      </div>
      <div className="footer__copyright">
      <small>&copy; Shahadath Hossain. All rights reserved.</small>
    </div>
    </footer>
    
  )
}

export default Footer