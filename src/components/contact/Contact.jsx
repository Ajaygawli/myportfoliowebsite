import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact</h2>

     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ajaygawli01@gmail.com</h5>
          <a href="mailto:ajaygawli01@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
          <FaLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Ajay Gawli</h5>
          <a href="https://www.linkedin.com/in/ajay-gawli-5503a1208/">Send a message</a>
        </article>

        <article className="contact__option">
          <FaWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+916260371700</h5>
          <a href="https://api.whatsapp.com/send?phone=+916260371700" target='_blank'>Send a message</a>
        </article>

       
      </div>

      {/* end of contact option */}
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" id="" placeholder='Your Message' required></textarea>
     <button className='btn btn-primary'> Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
