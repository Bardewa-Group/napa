import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img className="w-[50rem] mx-auto" src="https://association-webpage.sajannepali.repl.co/images/home1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[50rem] mx-auto" src="https://association-webpage.sajannepali.repl.co/images/news1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[50rem] mx-auto" src="https://association-webpage.sajannepali.repl.co/images/home1.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Home;
