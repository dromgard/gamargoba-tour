import React from "react";
import ToursCards from "./ToursCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Tours({ toursCards, toursIncludes }) {
  const swiperNavPrev = React.useRef(null);
  const swiperNavNext = React.useRef(null);

  return (
    <section id="tours" className="tours">
      <h2 className="tours__title">Туры по Грузии</h2>
      <div className="tours__cards">
        <ToursCards toursCards={toursCards} />
      </div>

      <div className="symbols">
        <h2 className="tours__title">Что включено?</h2>
      </div>
      <div className="tours__include">
        {toursIncludes.map((card) => (
          <div key={card.id} className="tours__include-item">
            <h3 className="tours__subtitle">{card.title}</h3>
            <p className="tours__text">{card.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="tours__include_swiper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: swiperNavPrev.current,
            nextEl: swiperNavNext.current,
          }}
          effect
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 375px
            375: {
              slidesPerView: 1,
            },
            // when window width is >= 425px
            425: {
              slidesPerView: 1.25,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 1.5,
            },
          }}
          loop
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrev.current;
            swiper.params.navigation.nextEl = swiperNavNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {toursIncludes.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="tours__include-item">
                <h3 className="tours__subtitle">{card.title}</h3>
                <p className="tours__text">{card.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
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
      </div>
    </section>
  );
}

export default Tours;
