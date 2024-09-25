import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination ,Navigation} from 'swiper/modules';
import { Swiper,  SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Ayush Gupta',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto. Doloremque, a labore nisi sit rerum accusantium impedit, beatae, eligendi quos aperiam reiciendis. Ab velit blanditiis provident, sunt at architecto!"
},
{
  avatar:AVTR2,
  name:'Ayush Gupta',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto. Doloremque, a labore nisi sit rerum accusantium impedit, beatae, eligendi quos aperiam reiciendis. Ab velit blanditiis provident, sunt at architecto!"
},
{
  avatar:AVTR3,
  name:'Ayush Gupta',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto. Doloremque, a labore nisi sit rerum accusantium impedit, beatae, eligendi quos aperiam reiciendis. Ab velit blanditiis provident, sunt at architecto!"
},
{
  avatar:AVTR4,
  name:'Ayush Gupta',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto. Doloremque, a labore nisi sit rerum accusantium impedit, beatae, eligendi quos aperiam reiciendis. Ab velit blanditiis provident, sunt at architecto!"
},
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
   {data.map(({avatar,name,review}, index)=>{
    return(
      <SwiperSlide key={index} className="testimonial">
      <div className="client__avatar">
        <img src={avatar} alt="Avatar one" />

      </div>
      <h5 className='client__name'>{name}</h5>
      <small className='client__review'>{review}
      </small>
    </SwiperSlide>
    )
   })}




      </Swiper>
    </section>
  )
}

export default Testimonials
