import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

SwiperCore.use([Navigation]);

function OurTeamCards({ stuff }) {
  const swiperNavPrev = React.useRef(null);
  const swiperNavNext = React.useRef(null);

  // Получаем рэйтинг числом и создаем массив для отрисовки
  // количества звездочек согласно рэйтингу.
  function makeArrayFromRating(rating) {
    return [...Array(rating).keys()];
  }

  return (
    <>
      <Swiper
        //modules={[Navigation]}
        navigation={{
          prevEl: swiperNavPrev.current ? swiperNavPrev.current : undefined,
          nextEl: swiperNavNext.current ? swiperNavNext.current : undefined,
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
          // when window width is >= 550px
          550: {
            slidesPerView: 1.25,
          },
          // when window width is >= 910px
          910: {
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
        {stuff.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="team-card">
              <div className="team-card__bio">
                <img
                  className="team-card__photo"
                  src={card.photo}
                  alt={card.name}
                />
                <p className="team-card__text">{card.name}</p>
                <p className="team-card__text">{card.placeFrom}</p>
              </div>
              <div className="team-card__description">
                <div className="team-card__rating-info">
                  {makeArrayFromRating(card.rating).map((item, i) => (
                    <img
                      key={i}
                      className="team-card__star"
                      src={card.star}
                      alt="Рейтинг"
                    />
                  ))}
                  <p className="team-card__text">{`${card.rating}.0`}</p>
                </div>
                <p className="team-card__text">{card.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="scroll scroll_cards">
        <button
          ref={swiperNavPrev}
          className="scroll__button scroll__button_left-dark"
        />
        <button
          ref={swiperNavNext}
          className="scroll__button scroll__button_right-dark"
        />
      </div>
    </>
  );
}

export default OurTeamCards;
