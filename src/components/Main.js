import React from "react";
import Header from "./Header";

function Main() {
  return (
    <section className="main">
      <div className="main__block">
        <Header />
        <div className="main__content">
          <h2 className="main__text">
            Кутаиси &mdash; Батуми &mdash; Тбилиси &mdash; &nbsp;
          </h2>
          <h1 className="main__title">Грузия</h1>
        </div>
        <div className="scroll">
          <button className="scroll__button scroll__button_left-light" />
          <button className="scroll__button scroll__button_right-light" />
        </div>
      </div>
    </section>
  );
}

export default Main;
