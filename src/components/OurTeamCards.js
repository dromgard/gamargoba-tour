import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurTeamCards({ stuff }) {

  // Получаем рэйтинг числом и создаем массив для отрисовки
  // количества звездочек согласно рэйтингу.
  function makeArrayFromRating(rating) {
    return [...Array(rating).keys()];
  }

  let slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  return (
    <>
      <Slider ref={slider} {...settings}>
        {stuff.map((card) => (
          <div className="slider-card" key={card.id}>
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
          </div>

        ))}
      </Slider>

      <div className="scroll scroll_cards">
        <button
          className="scroll__button scroll__button_left-dark"
          onClick={() => slider.current.slickPrev()}
        />
        <button
          className="scroll__button scroll__button_right-dark"
          onClick={() => slider.current.slickNext()}
        />
      </div>
    </>
  );
}

export default OurTeamCards;
