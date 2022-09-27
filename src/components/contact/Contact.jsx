import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_560xr0b', 'template_15lmvyg', form.current, 'GXi-JhoKe7IM5tmqe')
      e.target.reset()
    };


  return (
    <section id="contact">
       <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>rabby.ae410@gmail.com</h5>
              <a href='mailto:rabby.ae410@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>shahadath.hossain.5811</h5>
              <a href='https://m.me/shahadath.hossain.5811/' target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <FaWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+971 0547 520 147</h5>
              <a href='https://wa.me/+971547520147' target='_blank'>Send a message</a>
            </article>
            {/* End of Contact Options */}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required></input>
            <input type="email" name="name" placeholder="Your Email Address" required></input>
            <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

    </section>
  )
  }

export default Contact