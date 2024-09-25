import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom-built web applications tailored to your business needs.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Scalable and secure architecture for high-performance solutions.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fully responsive designs ensuring seamless functionality across all devices.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API integration with third-party services for enhanced functionality.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li> */}

          </ul>
        </article>
        {/* end of ui ux */}

        <article className='service'>
          <div className="service__head">
            <h3>Frontend/Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Modern, responsive frontend development using React.js and JavaScript.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Secure backend development with Node.js and Java Spring Boot.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-stack development covering both frontend and backend services.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advanced data security and authentication measures for user protection.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li> */}

          </ul>
        </article>

        {/* end of web */}

   


      </div>
    </section>
  )
}

export default Services
