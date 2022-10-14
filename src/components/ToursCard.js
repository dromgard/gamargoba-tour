import React from "react";
import { Link } from "react-router-dom";
import card2 from "../images/tour-card-3.png";

function ToursCard() {
  const [isCardActive, setIsCardActive] = React.useState(false);

  function handleCardClick() {
    setIsCardActive(!isCardActive);
  }

  return (
    <div className="tours-card">
      <div
        className={`tours-card__front-side ${
          isCardActive ? "tours-card__front-side_active" : ""
        }`}
        onClick={handleCardClick}
      >
        <img
          src={card2}
          className="tours-card__image"
          alt="Горнолыжный курорт"
        />
        <div className="tours-card__title-container">
          <p className="tours-card__title">Горнолыжный курорт</p>
        </div>
      </div>
      <p
        className={`tours-card__subtitle ${
          isCardActive ? "tours-card__subtitle_active" : ""
        }`}
      >
        Для любителей обычного катания на лыжах...
      </p>
      <Link
        to="/"
        className={`tours-card__link ${
          isCardActive ? "" : "tours-card__link_invisible"
        }`}
      >
        Смотреть ещё &#8594;
      </Link>
    </div>
  );
}

export default ToursCard;
