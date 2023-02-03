import React, { useRef } from "react";
import ToursCard from "./ToursCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ToursCards({ toursCards }) {
  let slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    initialSlide: -0.6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1.5,
        },
      }
    ]
  };

  return (
    <>

      <Slider ref={slider} {...settings}>
        {toursCards.map((cardItem) => (
          <div className="slider-card" key={cardItem.id}>
            <ToursCard card={cardItem} />
          </div>
        ))}
      </Slider>

      <div className="scroll scroll_cards">
        <button
          className="scroll__button scroll__button_left-light"
          onClick={() => slider.current.slickPrev()}
        />
        <button
          className="scroll__button scroll__button_right-light"
          onClick={() => slider.current.slickNext()}
        />
      </div>
    </>
  );
}

export default ToursCards;
