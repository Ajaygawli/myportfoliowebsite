import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>Ajay Gawli</a>
    <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    {/* <li><a href="#testimonials">Testimonials</a></li> */}
    <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials">
      <a href="https://www.facebook.com/ajay.gawli.37"><FaFacebook/></a>
      <a href="https://www.instagram.com/ajaygawli_98/"><FiInstagram/></a>
      <a href="https://www.linkedin.com/in/ajay-gawli-5503a1208/"><FaLinkedin/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Ajay Gawli. All Rights reserved </small>
    </div>
  </footer>
  )
}

export default Footer
