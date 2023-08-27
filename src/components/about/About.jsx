import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import me from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
   <section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={me} alt="about image" />
      </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 2 Months</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Internships</h5>
            <small> 1</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 5+</small>
          </article>

         
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque aut exercitationem placeat! Debitis obcaecati repudiandae enim eaque. Ab laborum harum quam cupiditate distinctio, dolore fugiat libero debitis sed veritatis, illo rem.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>

    
   </div>
   </section>
  )
}

export default About
