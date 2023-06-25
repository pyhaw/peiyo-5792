import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.css";

import Slide from "./slide";

export default function Banner() {
  SwiperCore.use([Autoplay]);

  return (
    <Fragment>
      <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
}
