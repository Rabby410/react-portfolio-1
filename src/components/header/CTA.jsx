import React from 'react'
import PDF from '../../assets/CV.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={PDF} download>Download CV</a>
        <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA