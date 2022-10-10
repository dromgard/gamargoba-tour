import React from "react";
import luisa from "../images/luisa.png";
import mikhail from "../images/mikhail.png";

function ReviewsCards() {
  return (
    <>
      <div className="reviews-card">
        <div className="reviews-card__bio">
          <img className="reviews-card__photo" src={luisa} alt="Луиза" />
          <div className="reviews-card__info">
            <p className="reviews-card__name">Луиза</p>
            <p className="reviews-card__data">23.03.2022</p>
          </div>
        </div>
        <p className="reviews-card__text">
          Не ошибусь, если скажу, что это был один из самых интересных и самых
          сложных туров, представленных на сайте. Ежедневно разные локации в
          нечасто посещаемых местах, глубокие рассказы о культуре, истории,
          харак тере разных регионов ...
        </p>
      </div>
      <div className="reviews-card">
        <div className="reviews-card__bio">
          <img
            className="reviews-card__photo"
            src={mikhail}
            alt="Дмитрий Грузия, Батуми"
          />
          <div className="reviews-card__info">
            <p className="reviews-card__name">Михаил</p>
            <p className="reviews-card__data">23.03.2022</p>
          </div>
        </div>
        <p className="reviews-card__text">
          Тур превзошел все ожидания! Нам очень понравились древние монастыри,
          потрясающие виды, вкусная и доступная еда и очень комфортная,
          доброжелательная атмосфера.
        </p>
      </div>
    </>
  );
}

export default ReviewsCards;
