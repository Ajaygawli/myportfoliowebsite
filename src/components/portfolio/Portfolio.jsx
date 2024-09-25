import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Human Resource Management System',
    github:'https://github.com/Ajaygawli/HRMS',
    demo:"https://sage-fudge-6a3b6d.netlify.app/"
  },
  {
    id:2,
    image:IMG4,
    title:'E-Commerce Application',
    github:'https://github.com/Ajaygawli/E-commerce-website',
    // demo:"https://github.com"
  },
  {
    id:3,
    image:IMG3,
    title:'New Application',
    github:'https://github.com/Ajaygawli/NewsApp',
    demo:""
  },


  {
    id:4,
    image:IMG2,
    title:'Html-CSS-JavaScript Interpreter',
    github:'https://github.com/Ajaygawli/Live-HTML-CSS-javascript-Interpreter',
    demo:"https://ajaygawli.github.io/Live-HTML-CSS-javascript-Interpreter/"
  },
  // {
  //   id:5,
  //   image:IMG5,
  //   title:'first project',
  //   github:'https://github.com',
  //   demo:"https://github.com"
  // },
  // {
  //   id:6,
  //   image:IMG6,
  //   title:'first project',
  //   github:'https://github.com',
  //   demo:"https://github.com"
  // }
]
const Portfolio = () => {
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         
{ data.map(({id,image,title,github,demo})=>{
  return(
       <article key={id} className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={image} alt={title} />
       </div>
     <h3>{title}</h3>
    <div className="portfolio__item-cta">
    <a href={github} className='btn '>Github</a> 
    <a href={demo} className='btn  btn-primary' target='_blank'>Live Demo</a> 
     </div>
     </article>
  )
})}
     
      </div>
    </section>
  )
}

export default Portfolio
