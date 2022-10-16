import React from "react";
import { Link } from "react-router-dom";

function ToursCard({ card }) {
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
        <img src={card.photo} className="tours-card__image" alt={card.title} />
        <div className="tours-card__title-container">
          <p className="tours-card__title">{card.title}</p>
        </div>
      </div>
      <p
        className={`tours-card__subtitle ${
          isCardActive ? "tours-card__subtitle_active" : ""
        }`}
      >
        {card.subtitle}
      </p>
      <Link
        to={card.link}
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
