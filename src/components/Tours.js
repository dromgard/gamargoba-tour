import React, { useRef } from "react";
import ToursCards from "./ToursCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Tours({ toursCards, toursIncludes }) {
  let slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5
        },
      }
    ]
  };

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


        <Slider ref={slider} {...settings}>
          {toursIncludes.map((card) => (
            <div className="slider-card" key={card.id}>
              <div className="tours__include-item">
                <h3 className="tours__subtitle">{card.title}</h3>
                <p className="tours__text">{card.subtitle}</p>
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
    </section>
  );
}

export default Tours;
