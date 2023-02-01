import React, { useRef } from "react";
import ReviewsCards from "./ReviewsCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Favourites({ favouritePlaces, reviews }) {
  let slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2
        },
      }
    ]
  };

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

          <Slider ref={slider} {...settings}>
            {favouritePlaces.map((card) => (
              <div className="slider-card" key={card.id}>

                <div className="favourites-card">
                  <img
                    className="favourites-card__photo"
                    src={card.photo}
                    alt={card.title}
                  />
                  <p className="favourites-card__title">{card.title}</p>
                </div>

              </div>
            ))}
          </Slider>


          <div className="scroll scroll_cards">
            <button
              onClick={() => slider.current.slickPrev()}
              className="scroll__button scroll__button_left-light"
            />
            <button
              onClick={() => slider.current.slickNext()}
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
