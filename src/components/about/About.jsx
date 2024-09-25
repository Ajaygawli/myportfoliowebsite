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
            <small> 1+ Years</small>
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
<p>🚀 Full Stack Developer | Java | MERN Stack | React.js | Node.js | Spring Boot

Hello! I'm Ajay Gawli, a versatile Full Stack Developer with hands-on experience in building scalable, secure, and efficient web applications. With a strong foundation in Java, React.js, Node.js, and the MERN stack, I specialize in developing everything from eCommerce platforms to Customer Relationship Management (CRM) systems.          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>

    
   </div>
   </section>
  )
}

export default About
