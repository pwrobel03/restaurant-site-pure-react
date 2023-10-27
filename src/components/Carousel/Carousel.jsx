import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'

import './Carousel.css'

import { images } from '../../constants'
const slider = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Carousel = () => {
    return (
        <div className='carousel'>
            <Swiper
                className='myswiper'
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                loop={true}
                pagination={{ clickable: false }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    }
                }}
            >
                {
                    slider.map((data, index) => (
                        <SwiperSlide key={index} style={{ backgroundImage: `url(${data})`, objectFit: "cover", borderRadius: "2rem" }} className="myswiper-slider">
                            <div>
                                <button className="slider-btn">Explore</button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel