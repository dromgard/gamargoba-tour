import React from "react";
import ToursCards from "./ToursCards";

function Tours() {
  return (
    <section className="tours">
      <h2 className="tours__title">Туры по Грузии</h2>
      <div className="tours__cards">
        <ToursCards />
      </div>
      <div className="scroll scroll_tours">
        <button className="scroll__button scroll__button_left-light" />
        <button className="scroll__button scroll__button_right-light" />
      </div>
      <div className="symbols">
        <h2 className="tours__title">Что включено?</h2>
      </div>
      <div className="tours__include">
        <div className="tours__include-item">
          <h3 className="tours__subtitle">Проживание</h3>
          <p className="tours__text">
            Готовы предоставить жилье — как в роскошном отеле холдинга Adjara
            Group, так и с подселением в аутентичную грузинскую семью.
          </p>
        </div>
        <div className="tours__include-item">
          <h3 className="tours__subtitle">Еда</h3>
          <p className="tours__text">
            Знакомство со страной невозможно без традиционной грузинской кухни.
            В каждый тур включена дегустация национальных блюд.
          </p>
        </div>
        <div className="tours__include-item">
          <h3 className="tours__subtitle">Трансфер</h3>
          <p className="tours__text">
            Поможем организовать трансфер от и до аэропорта и подготовим
            комфортное перемещение между городами регионов.
          </p>
        </div>
        <div className="tours__include-item">
          <h3 className="tours__subtitle">Новые знакоиства</h3>
          <p className="tours__text">
            Туры в группе — объединение единомышленников, из которого когда-то
            вырос и наш проект.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tours;
