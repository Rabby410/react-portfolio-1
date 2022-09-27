import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experiance">
      <h5>What skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
            <div className="experiance__content">
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Experianced</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>Css</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>Bootstarp</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>Flutter</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
            </div>
        </div>
      {/* Backend Section */}
        <div className="experiance__backend">
        <h3>Backend Development</h3>
        <div className="experiance__content">
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div><h4>PHP</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>WordPress</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
              <article className='experiance__details'>
              <BsPatchCheckFill className='.experiance__details-icons' />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Experience