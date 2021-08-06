import React from 'react'
import { Star } from 'react-feather'
import { SliderData } from './SliderData'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, A11y])

const ImageSlider: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {SliderData.map((slides, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonialBox">
                <div className="testimonialHeader">
                  <img src={slides.image} alt={slides.name} />
                  <div className="testimonialPerson">
                    <strong>{slides.name}</strong>
                    <span>{slides.subtile}</span>
                    <div className="stars">
                      <Star fill="#FFAA45" color="#FFAA45" />
                      <Star fill="#FFAA45" color="#FFAA45" />
                      <Star fill="#FFAA45" color="#FFAA45" />
                      <Star fill="#FFAA45" color="#FFAA45" />
                      <Star fill="#FFAA45" color="#FFAA45" />
                      <span>{slides.star}</span>
                    </div>
                  </div>
                </div>
                <div className="testimonialBody">
                  <p>{slides.body}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ImageSlider
