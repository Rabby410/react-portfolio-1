import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsSkype} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shahadath-hossain-48248b173/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Rabby410" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/shahadath.hossain.5811/" target="_blank"><FaFacebook/></a>
        <a href="https://twitter.com/rabby410" target="_blank"><FaTwitter/></a>
        <a href="https://join.skype.com/invite/ysQIaOUDsOjR" target="_blank"><BsSkype/></a>
    </div>
  )
}

export default HeaderSocial