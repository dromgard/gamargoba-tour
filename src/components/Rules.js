import React from "react";

function Rules() {
  return (
    <section className="rules">
      <div className="rules__desription">
        <h2 className="rules__title">Правила въезда в&nbsp;страну</h2>
        <p className="rules__subtitle">
          С 1 марта 2021 года граждане Российской Федерации могут свободно
          посещать Грузию без карантина при наличии отрицательного ПЦР-теста.
        </p>
        <p className="rules__subtitle">
          Советуем пройти полный курс вакцинации (COVID-19) для комфортного
          перемещения по стране.
        </p>
        <button className="button button__submit button__submit_rules">
          Подробнее
        </button>
      </div>
      <div className="rules__cancel">
        <h2 className="rules__title rules__title_light">
          Бесплатная отмена&nbsp;тура!
        </h2>
        <p className="rules__subtitle rules__subtitle_light">
          Возвращаем 100% при отмене не позднее чем за 7 дней
        </p>
      </div>
    </section>
  );
}

export default Rules;
