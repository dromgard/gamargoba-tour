import React from "react";
import ReviewsCards from "./ReviewsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Favourites({ favouritePlaces, reviews }) {
  const swiperNavPrev = React.useRef(null);
  const swiperNavNext = React.useRef(null);

  return (
    <>
      <section id="favoutires" className="favourites">
        <h2 className="favourites__title">Наши любимые места:</h2>
        <div className="favourites__map">
          <p className="favourites__city favourites__city_one">Тбилиси</p>
          <p className="favourites__city favourites__city_two">Степанцминда</p>
          <p className="favourites__city favourites__city_three">Сванетия</p>
          <p className="favourites__city favourites__city_four">Мцхета</p>
          <p className="favourites__city favourites__city_five">Боржоми</p>
        </div>
        <div className="favourites__cards">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: swiperNavPrev.current,
              nextEl: swiperNavNext.current,
            }}
            effect
            speed={800}
            spaceBetween={0}
            slidesPerView={2}
            breakpoints={{
              // when window width is >= 375px
              375: {
                slidesPerView: 2,
              },
              // when window width is >= 425px
              425: {
                slidesPerView: 2.25,
              },
              // when window width is >= 500px
              500: {
                slidesPerView: 2.75,
              },
              // when window width is >= 600px
              600: {
                slidesPerView: 3.4,
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
            {favouritePlaces.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="favourites-card">
                  <img
                    className="favourites-card__photo"
                    src={card.photo}
                    alt={card.title}
                  />
                  <p className="favourites-card__title">{card.title}</p>
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
        <section className="reviews">
          <div className="symbols">
            <h2 id="reviews" className="favourites__title">
              Отзывы
            </h2>
          </div>
          <div className="reviews__cards">
            <ReviewsCards reviews={reviews} />
          </div>
        </section>
      </section>
    </>
  );
}

export default Favourites;
