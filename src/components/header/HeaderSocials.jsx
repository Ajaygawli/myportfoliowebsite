import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/ajay-gawli-5503a1208/" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/Ajaygawli" target='_blank'><FaGithub/></a>
    <a href="https://facebook.com" target='_blank'> <BsFacebook/></a>
      
    </div>
  )
}

export default HeaderSocials
