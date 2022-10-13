import React from "react";
import star from "../images/star.svg";
import dmitrii from "../images/dmitrii.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function OurTeamCards() {
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
        <SwiperSlide>
          <div className="team-card">
            <div className="team-card__bio">
              <img
                className="team-card__photo"
                src={dmitrii}
                alt="Дмитрий Грузия, Батуми"
              />
              <p className="team-card__text">Дмитрий Грузия, Батуми</p>
            </div>
            <div className="team-card__description">
              <div className="team-card__rating-info">
                <img className="team-card__star" src={star} alt="Рейтинг" />
                <p className="team-card__text">5.0</p>
              </div>
              <p className="team-card__text">
                Каждый из нас понимает очевидную вещь: высокотехнологичная
                концепция социального заказа обеспечивает актуальность вывода
                оборотных средств.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-card">
            <div className="team-card__bio">
              <img
                className="team-card__photo"
                src={dmitrii}
                alt="Дмитрий Грузия, Батуми"
              />
              <p className="team-card__text">Дмитрий Грузия, Батуми</p>
            </div>
            <div className="team-card__description">
              <div className="team-card__rating-info">
                <img className="team-card__star" src={star} alt="Рейтинг" />
                <img className="team-card__star" src={star} alt="Рейтинг" />
                <p className="team-card__text">5.0</p>
              </div>
              <p className="team-card__text">
                Каждый из нас понимает очевидную вещь: высокотехнологичная
                концепция социального заказа обеспечивает актуальность вывода
                оборотных средств.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-card">
            <div className="team-card__bio">
              <img
                className="team-card__photo"
                src={dmitrii}
                alt="Дмитрий Грузия, Батуми"
              />
              <p className="team-card__text">Дмитрий Грузия, Батуми</p>
            </div>
            <div className="team-card__description">
              <div className="team-card__rating-info">
                <img className="team-card__star" src={star} alt="Рейтинг" />
                <img className="team-card__star" src={star} alt="Рейтинг" />
                <img className="team-card__star" src={star} alt="Рейтинг" />
                <p className="team-card__text">5.0</p>
              </div>
              <p className="team-card__text">
                Каждый из нас понимает очевидную вещь: высокотехнологичная
                концепция социального заказа обеспечивает актуальность вывода
                оборотных средств.
              </p>
            </div>
          </div>
        </SwiperSlide>
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
