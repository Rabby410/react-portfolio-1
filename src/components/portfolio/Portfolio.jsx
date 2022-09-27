import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/aportfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import BIMG6 from '../../assets/portfolio full image/portfolio6.png'
import BIMG5 from '../../assets/portfolio full image/portfolio5.png'
import BIMG4 from '../../assets/portfolio full image/portfolio4.png'
import BIMG3 from '../../assets/portfolio full image/portfolio3.png'
import BIMG2 from '../../assets/portfolio full image/portfolio2.png'
import BIMG1 from '../../assets/portfolio full image/portfolio1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    big_image: BIMG1,
    title: 'Join Bangladesh Navy',
    github: 'https://github.com',
    demo: 'https://joinnavy.navy.mil.bd/joinnavydemo/index.html'    
  },
  {
    id: 2,
    image: IMG2,
    big_image: BIMG2,
    title: 'Website Design : SM Virtual Fashion',
    github: '',
    demo: 'http://smvirtual-fashion.com/'    
  },
  {
    id: 3,
    image: IMG3,
    big_image: BIMG3,
    title: 'Woocommerce website: Deshi Attire (WordPress Based)',
    github: 'https://github.com',
    demo: 'https://deshiattire.com/'    
  },
  {
    id: 4,
    image: IMG4,
    big_image: BIMG4,
    title: 'Woocommerce website: Camerino (WordPress Based)',
    github: 'https://github.com',
    demo: 'http://camerino.xyz/'    
  },
  {
    id: 5,
    image: IMG5,
    big_image: BIMG5,
    title: 'Mordern Company Website (wordpress Based)',
    github: 'https://github.com',
    demo: 'https://www.ampsbd.com/'    
  },
  {
    id: 6,
    image: IMG6,
    big_image: BIMG6,
    title: 'Sports Website: Bangladsh Sepaktakraw association',
    github: 'https://github.com',
    demo: 'http://bdsta.shahadath.tk/'    
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, big_image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <a href={big_image} target='_blank'><img src={image} alt={title} /></a>
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Link/Demo Link</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio