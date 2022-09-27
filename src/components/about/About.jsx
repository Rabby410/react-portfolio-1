import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>


        <div>
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about_icon'/>
            <h5>Experiance</h5>
            <small>5+ Years Working</small>
          </article>
          <article className='about__card'>
            <ImUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>
          <article className='about__card'>
            <FaFolderOpen className='about_icon'/>
            <h5>Prijects</h5>
            <small>50+ Completed</small>
          </article>
         
        </div>
        <div className="about__content"> <p>
          Self-motivated and hardworking seeking for an opportunity to work in a
          challenging environment to prove my skills and utilize my knowledge &amp;
          intelligence in the growth of the organization.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About