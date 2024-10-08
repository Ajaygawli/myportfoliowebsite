import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experince</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon"  />

              <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>

      

            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
           
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
          </div>

        </div>


        {/* end of frontend... */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Intermidate</small>
              </div>
     
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Express.js</h4>
              <small className='text-light'>Intermidate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Java Spring Boot</h4>
              <small className='text-light'>Beginner</small>
              </div>
              
            </article>

          </div>

        </div>

        </div>      
    </section>
  )
}

export default Experience
