import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero(){
  const images = [
    "/src/photo/img1.png",
    "/src/photo/img2.png",
    "/src/photo/img3.webp",
    // "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    // "https://images.unsplash.com/photo-1493238792000-8113da705763",
  ];

  return (
    <div className=" max-w-[1100px]  mx-auto my-3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded cursor-pointer shadow-lg"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
