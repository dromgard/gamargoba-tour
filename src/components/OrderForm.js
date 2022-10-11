import React from "react";

function OrderForm() {
  return (
    <div className="order-form">
      <h2 className="order-form__title">Записаться на тур</h2>
      <form className="order-form__form">
        <input
          id="text"
          type="text"
          placeholder="Ваше имя"
          name="text"
          className="order-form__input"
          value=""
          onChange=""
          required
        />
        <input
          id="tour"
          type="text"
          placeholder="Выбрать тур"
          name="tour"
          className="order-form__input"
          value=""
          onChange=""
          required
        />
        <input
          id="tel"
          type="tel"
          placeholder="+7(___)___ __ __"
          name="tel"
          className="order-form__input"
          value=""
          onChange=""
          required
        />
        <input
          id="date"
          type="date"
          placeholder="Выбрать дату"
          name="date"
          className="order-form__input"
          value=""
          onChange=""
          required
        />
        <button
          className="button button__submit button__submit_order"
          name="submit"
          type="submit"
          aria-label="Записаться"
        >
          Записаться
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
