import React from "react";
import Header from "./Header";

function Main() {
  return (
    <section className="main">
      <div className="main__block">
        <Header />
        <div className="main__content">
          <p className="main__text">
            Кутаиси &mdash; Батуми &mdash; Тбилиси &mdash; &nbsp;
          </p>
          <h1 className="main__title">Грузия</h1>
          <p className="main__text main__text_visible">Открывать новое</p>
          <button className="button button__submit button__submit_visible_header">
            Позвонить нам
          </button>
        </div>
        <div className="scroll scroll_main">
          <button className="scroll__button scroll__button_left-light" />
          <button className="scroll__button scroll__button_right-light" />
        </div>
      </div>
    </section>
  );
}

export default Main;
