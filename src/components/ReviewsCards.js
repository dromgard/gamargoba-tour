import React, { useRef } from "react";
import { Navigation } from "swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewsCards({ reviews }) {
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
        breakpoint: 1070,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1
        },
      },
    ]
  };

  return (
    <>
      <Slider ref={slider} {...settings}>
        {reviews.map((card) => (
          <div className="slider-card" key={card.id}>
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
    </>
  );
}

export default ReviewsCards;
