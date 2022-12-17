import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'
import { Swiper, SwiperSlide } from "swiper/react"

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>

        <img src={Hero} alt="hero" />

        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customer With Us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          slidesPerGroup={1}
          className={css.myCarousel}
        >
          {TestimonialsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={css.testimonial}>
                <img src={item?.image} alt="testi" />
                <span>{item?.comment}</span>
                <hr />
                <span>{item?.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials
