import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Home() {
  return (
    <>
     <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>Some text</p>

        <div className="w-full h-screen bg-green-300"></div>
        <p>
          Some more text
        </p>
      </div>
    </>
  );
}
