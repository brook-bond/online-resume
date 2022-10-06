import React from "react";
import "./testimonals.css";
import data from "./data";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonals = () => {
  const testimonials = data.map((item, i) => {
    return (
      <SwiperSlide className="testimonial" key={i}>
        <div className="client__avatar">
          <img src={item.avatar} alt="" />
        </div>
        <h5 className="client__name">{item.name}</h5>
        <small className="client__review">{item.review}</small>
      </SwiperSlide>
    );
  });
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials}
      </Swiper>
    </section>
  );
};

export default Testimonals;
