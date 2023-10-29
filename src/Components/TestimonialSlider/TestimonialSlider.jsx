// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import "./index.css";

// images
import sliderImg1 from "./../../assets/images/slider/1.jpg";
import sliderImg2 from "./../../assets/images/slider/2.jpg";
import sliderImg3 from "./../../assets/images/slider/3.jpg";
import sliderImg4 from "./../../assets/images/slider/4.jpg";
import Testimonial from "../Testimonial";

const TestimonialSlider = () => {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="testimonial-slider min-h-max"
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
