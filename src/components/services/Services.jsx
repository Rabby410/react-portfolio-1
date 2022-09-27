import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck  className='service__list-icon'/><p>Figma: collaborative web application for interface design</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Adobe XD: vector design tool for web and mobile applications, developed and published by Adobe Inc.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Adobe Photoshop: raster graphics editor developed and published by Adobe Inc.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Balsamiq Mockup: Industry Standard Low-Fidelity Wireframing Software</p></li>
          </ul>
        </article>
        {/* End Ui/UX Section */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck  className='service__list-icon'/><p>HTML: HTML is the standard markup language for Web pages</p></li>
            <li><BiCheck  className='service__list-icon'/><p>CSS: CSS is the language we use to style an HTML document.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>JavaScript: The world's most popular programming language.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>React: It makes it painless to create interactive UIs</p></li>
            <li><BiCheck  className='service__list-icon'/><p>WordPress: It is a free and open-source content management system written in PHP</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Laravel: It is a PHP web application framework with expressive, elegant syntax.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Flutter: It is an open-source UI software development kit created by Google.</p></li>
          </ul>
        </article>
        {/* End Web Development Section */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation & Server Management</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck  className='service__list-icon'/><p>Microsoft Word is the document editor that you can take with you on the go.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Microsoft Excel is the industry leading spreadsheet software program, a powerful data visualization and analysis tool.</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Microsoft PowerPoint empowers you to create clean slideshow presentations and intricate pitch decks and gives you a powerful presentation maker</p></li>
            <h3>Server hosting Experiance</h3>
            <li><BiCheck  className='service__list-icon'/><p>SiteGround is a web hosting company, founded in 2004 in Sofia, Bulgaria. As of January 2020</p></li>
            <li><BiCheck  className='service__list-icon'/><p>Liquid Web is a leader in Managed Hosting solutions for mission critical sites &amp; apps. When uptime and reliability are non-negotiable, trust Liquid Web!</p></li>
            <li><BiCheck  className='service__list-icon'/><p>GoDaddy Inc. is an American publicly traded Internet domain registrar and web hosting company</p></li>
            <li><BiCheck  className='service__list-icon'/><p>HostGator is a leading provider of secure and affordable web hosting. </p></li>
          </ul>
        </article>
        {/* Content Creation */}
      </div>
    </section>
  )
}

export default Services