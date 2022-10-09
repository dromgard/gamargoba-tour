import React from "react";
import star from "../images/star.svg";
import dmitrii from "../images/dmitrii.png";

function OurTeamCards() {
  return (
    <>
      <div className="team-card">
        <div className="team-card__bio">
          <img
            className="team-card__photo"
            src={dmitrii}
            alt="Дмитрий Грузия, Батуми"
          />
          <p className="team-card__info">Дмитрий Грузия, Батуми</p>
        </div>
        <div className="team-card__description">
          <div className="team-card__rating-info">
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <p className="team-card__rating">5.0</p>
          </div>
          <p className="team-card__about">
            Каждый из нас понимает очевидную вещь: высокотехнологичная концепция
            социального заказа обеспечивает актуальность вывода оборотных
            средств.
          </p>
        </div>
      </div>
      <div className="team-card">
        <div className="team-card__bio">
          <img
            className="team-card__photo"
            src={dmitrii}
            alt="Дмитрий Грузия, Батуми"
          />
          <p className="team-card__info">Дмитрий Грузия, Батуми</p>
        </div>
        <div className="team-card__description">
          <div className="team-card__rating-info">
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <img className="team-card__star" src={star} alt="Рейтинг" />
            <p className="team-card__rating">5.0</p>
          </div>
          <p className="team-card__about">
            Каждый из нас понимает очевидную вещь: высокотехнологичная концепция
            социального заказа обеспечивает актуальность вывода оборотных
            средств.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurTeamCards;
