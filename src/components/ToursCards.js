import React from "react";
import { Link } from "react-router-dom";
import card1 from "../images/tour-card-1.png";
import card2 from "../images/tour-card-3.png";
import card3 from "../images/tour-card-4.png";

function ToursCards() {
  return (
    <>
      <div className="tours-card">
        <div className="tours-card__front-side">
          <img
            src={card1}
            className="tours-card__image"
            alt="Грузия за 7 дней"
          />
          <div className="tours-card__title-container">
            <p className="tours-card__title">Грузия за 7 дней</p>
          </div>
        </div>
        <p className="tours-card__subtitle">Для любителей старины</p>
        <Link to="/" className="tours-card__link tours-card__link_invisible">
          Смотреть ещё &#8594;
        </Link>
      </div>

      <div className="tours-card">
        <div className="tours-card__front-side">
          <img
            src={card2}
            className="tours-card__image"
            alt="Горнолыжный курорт"
          />
          <div className="tours-card__title-container">
            <p className="tours-card__title">Горнолыжный курорт</p>
          </div>
        </div>
        <p className="tours-card__subtitle">
          Для любителей обычного катания на лыжах...
        </p>
        <Link to="/" className="tours-card__link tours-card__link_invisible">
          Смотреть ещё &#8594;
        </Link>
      </div>

      <div className="tours-card">
        <div className="tours-card__front-side">
          <img
            src={card3}
            className="tours-card__image"
            alt="Новогодняя сказка: горы и вино"
          />
          <div className="tours-card__title-container">
            <p className="tours-card__title">Новогодняя сказка: горы и вино</p>
          </div>
        </div>
        <p className="tours-card__subtitle">Для любителей выпить в горах</p>
        <Link to="/" className="tours-card__link tours-card__link_invisible">
          Смотреть ещё &#8594;
        </Link>
      </div>
    </>
  );
}

export default ToursCards;
