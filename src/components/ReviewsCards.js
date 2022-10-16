import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function ReviewsCards({ reviews }) {
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
        spaceBetween={0}
        slidesPerView={1.5}
        breakpoints={{
          // when window width is >= 375px
          375: {
            slidesPerView: 1.35,
          },
          // when window width is >= 425px
          425: {
            slidesPerView: 1.5,
          },
          // when window width is >= 550px
          550: {
            slidesPerView: 2,
          },
          // when window width is >= 760px
          760: {
            slidesPerView: 2.3,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 2.5,
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
        {reviews.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="reviews-card">
              <div className="reviews-card__bio">
                <img
                  className="reviews-card__photo"
                  src={card.photo}
                  alt={card.name}
                />
                <div className="reviews-card__info">
                  <p className="reviews-card__name">{card.name}</p>
                  <p className="reviews-card__text">{card.date}</p>
                </div>
              </div>
              <p className="reviews-card__text">{card.text}</p>
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
    </>
  );
}

export default ReviewsCards;
