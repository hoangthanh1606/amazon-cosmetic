import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { SliderProducts } from "../../data/products";
import './Slider.css';

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          // 576: {
          //   slidesPerView: 2,
          // },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Pagination]}
        navigation={true}
        loopFillGroupWithBlank={true}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        slidesPerGroup={1}
        className="mySwiper"
      >
        {SliderProducts?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="left-slide">
              <div className="name">
                <span>{slide?.name}</span>
                <span>{slide?.detail}</span>
              </div>

              <span>{slide?.price}$</span>
              <div>Shop now</div>
            </div>

            <img src={slide?.img} alt="Product" className="img-product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
