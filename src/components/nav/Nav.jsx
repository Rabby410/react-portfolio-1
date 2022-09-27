import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  
  const [activeNav, setActiveNav] =useState('#')
  return (
  <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout/></a>
    <a href="#experiance" onClick={()=> setActiveNav('#experiance')} className={activeNav === '#experiance' ? 'active' : ''}><BiBook/></a>
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
    )
}

export default Nav