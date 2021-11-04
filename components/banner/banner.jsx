import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Banner() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className="bg-green-200 h-40 w-50">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-green-200 h-40 w-50">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-green-200 h-40 w-50">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-green-200 h-40 w-50">Slide 4</SwiperSlide>
            ...
        </Swiper>
    )
}
