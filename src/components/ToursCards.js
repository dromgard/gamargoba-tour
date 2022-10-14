import React from "react";
import ToursCard from "./ToursCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function ToursCards() {
  const swiperNavPrev = React.useRef(null);
  const swiperNavNext = React.useRef(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: swiperNavPrev.current,
          nextEl: swiperNavNext.current,
        }}
        effect
        speed={800}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          // when window width is >= 375px
          375: {
            slidesPerView: 1.5,
          },
          // when window width is >= 560px
          560: {
            slidesPerView: 2.25,
          },
          // when window width is >= 700px
          700: {
            slidesPerView: 2.75,
          },
          // when window width is >= 1000px
          1000: {
            slidesPerView: 3.5,
          },
          // when window width is >= 1311px
          1311: {
            slidesPerView: 4.5,
          },
        }}
        //loop
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrev.current;
          swiper.params.navigation.nextEl = swiperNavNext.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
        <SwiperSlide>
          <ToursCard />
        </SwiperSlide>
      </Swiper>

      <div className="scroll scroll_cards">
        <button
          ref={swiperNavPrev}
          className="scroll__button scroll__button_left-light"
        />
        <button
          ref={swiperNavNext}
          className="scroll__button scroll__button_right-light"
        />
      </div>
    </>
  );
}

export default ToursCards;
