import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/Masud_hasan.png'
import AVT2 from '../../assets/jeevan_kumar.jpg'
import AVT3 from '../../assets/abdul_kaium.jpg'
import AVT4 from '../../assets/faruque_dhali.jpg'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import { Pagination } from "swiper";



const data = [ 
  {avatar: AVT1,
   name: 'Md Masud Hasan (Unlocklive IT LTD)',
   review: "I highly recommend Shahadath Hossain as a candidate for employment. He was worked in our company from January 2020 for 2 years 9 months and has gained experience in the Software Support & QA Engineering. Also, in the WordPress development. It was great pleasure working with Shahadath Hossain for his employment duration and he proved himself as one of the most important assets of the organization. We wish him a good life and better opportunity of employment"
  },
  {avatar: AVT2,
   name: 'Jiban Kumar (JT PRO PRODUCTION)',
   review: "I highly recommend Shahadath Hossain as a candidate for employment. He was worked in our company from January 2019 for 1 year and has gained experience in the Administration and It Engineer. It was great pleasure working with Shahadath Hossain for his employment duration and he proved himself as one of the most important assets of the organization. We wish him a good life and better opportunity of employment"
  },
  {avatar: AVT3,
   name: 'Md Kayium Hosen (MKF Enterprise SDN BHD)',
   review: "I highly recommend Shahadath Hossain as a candidate for employment. He was worked in our company from January 2018 for 1 year and has gained experience in the Administration and It Engineer. It was great pleasure working with Shahadath Hossain for his employment duration and he proved himself as one of the most important assets of the organization. We wish him a good life and better opportunity of employment"
  },
  {avatar: AVT4,
   name: 'Lft Faruque Dhali (BDSTA)',
   review: "I highly recommend Shahadath Hossain as a candidate for employment. He was worked with us from January 2012 for 4 years. It was great pleasure working with Shahadath Hossain for his employment duration and he proved himself as one of the most important assets of the organization. We wish him a good life and better opportunity of employment"
  }

]


const Testimonials = () => (
    <section id="testimonials">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>
        <>
            <Swiper
             className="container testimonials__container" 
             pagination={true} 
             modules={[Pagination]} 
             spaceBetween={40}
             slidesPerView={1} 
            > {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className={"client__avatar"}>
                                <img src={avatar} />
                            </div>
                            <div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    </section>
    
)

export default Testimonials