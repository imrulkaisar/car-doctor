// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

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

const HomeSlider = () => {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="homeSwiper min-h-[500px] bg-secondary text-white rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg1})`,
            }}
            className="bg-cover bg-center"
          >
            <div className="min-h-[500px] bg-overlay h-full p-20 flex">
              <div className="content max-w-md space-y-5">
                <h4 className="text-6xl text-white leading-tight">
                  Affordable Price For Car Servicing
                </h4>
                <p className="text-white">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="btn btn-primary">Discover More</Link>
                  <Link className="btn btn-bordered border-white text-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg2})`,
            }}
            className="bg-cover bg-center"
          >
            <div className="min-h-[500px] bg-overlay h-full p-20 flex">
              <div className="content max-w-md space-y-5">
                <h4 className="text-6xl text-white leading-tight">
                  Affordable Price For Car Servicing
                </h4>
                <p className="text-white">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="btn btn-primary">Discover More</Link>
                  <Link className="btn btn-bordered border-white text-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg3})`,
            }}
            className="bg-cover bg-center"
          >
            <div className="min-h-[500px] bg-overlay h-full p-20 flex">
              <div className="content max-w-md space-y-5">
                <h4 className="text-6xl text-white leading-tight">
                  Affordable Price For Car Servicing
                </h4>
                <p className="text-white">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="btn btn-primary">Discover More</Link>
                  <Link className="btn btn-bordered border-white text-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg4})`,
            }}
            className="bg-cover bg-center"
          >
            <div className="min-h-[500px] bg-overlay h-full p-20 flex">
              <div className="content max-w-md space-y-5">
                <h4 className="text-6xl text-white leading-tight">
                  Affordable Price For Car Servicing
                </h4>
                <p className="text-white">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="btn btn-primary">Discover More</Link>
                  <Link className="btn btn-bordered border-white text-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
