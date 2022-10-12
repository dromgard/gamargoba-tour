import React from "react";
import ReviewsCards from "./ReviewsCards";

function Favourites() {
  return (
    <>
      <section className="favourites">
        <h2 className="favourites__title">Наши любимые места</h2>
        <div className="favourites__map">
          <p className="favourites__city favourites__city_one">Тбилиси</p>
          <p className="favourites__city favourites__city_two">Степанцминда</p>
          <p className="favourites__city favourites__city_three">Сванетия</p>
          <p className="favourites__city favourites__city_four">Мцхета</p>
          <p className="favourites__city favourites__city_five">Боржоми</p>
        </div>
        <section className="reviews">
          <div className="symbols">
            <h2 className="favourites__title">Отзывы</h2>
          </div>
          <div className="reviews__cards">
            <ReviewsCards />
          </div>
        </section>
        <div className="scroll">
          <button className="scroll__button scroll__button_left-light" />
          <button className="scroll__button scroll__button_right-light" />
        </div>
      </section>
    </>
  );
}

export default Favourites;
