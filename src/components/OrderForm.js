import React, { useState } from "react";

function OrderForm({ onSubmit }) {
  // Переменные полей ввода.
  const [name, setName] = useState("");
  const [tour, setTour] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [inputNameError, setInputNameError] = useState("*Обязательное поле");
  const [inputPhoneError, setInputPhoneError] = useState("*Обязательное поле");

  const phoneRegex = /[^0-9'".]/;

  // Обработчики полей ввода.
  function handleChangeName(e) {
    const inputValue = e.target.value;

    setName(inputValue);

    if (inputValue.length === 0) {
      setInputNameError("Нужно заполнить");
      return;
    }

    setInputNameError("");
  }

  function handleChangeTour(e) {
    setTour(e.target.value);
  }

  function handleChangePhone(e) {
    const inputValue = e.target.value;

    if (phoneRegex.test(inputValue)) {
      setInputPhoneError("Только цифры");
      return;
    }

    setPhone(inputValue);

    if (inputValue.length === 0) {
      setInputPhoneError("Нужно заполнить");
      return;
    }

    setInputPhoneError("");

  }

  function handleChangeDate(e) {
    setDate(e.target.value);
  }

  function resetForm() {
    setName("");
    setTour("");
    setPhone("");
    setDate("");
    setInputNameError("*Обязательное поле");
    setInputPhoneError("*Обязательное поле");
  }

  // Обработчики кнопки Submit.
  function handleSubmit(e) {
    e.preventDefault();

    if (name.length === 0) {
      setInputNameError("Нужно заполнить");
      return;
    }

    if (phone.length === 0) {
      setInputPhoneError("Нужно заполнить");
      return;
    }

    onSubmit(name, phone);
    resetForm();
  }

  return (
    <div className="order-form">
      <h2 className="order-form__title">Записаться на тур</h2>
      <form className="order-form__form" onSubmit={handleSubmit}>
        <div className="order-form__input-area">
          <input
            id="name"
            type="text"
            placeholder="Ваше имя"
            name="name"
            className="order-form__input"
            value={name}
            onChange={handleChangeName}
          />
          <span className="order-form__input-error">{inputNameError}</span>
        </div>
        <div className="order-form__input-area">
          <input
            id="tour"
            type="text"
            placeholder="Выбрать тур"
            name="tour"
            className="order-form__input"
            value={tour}
            onChange={handleChangeTour}
          />
          <span className="order-form__input-error"></span>
        </div>
        <div className="order-form__input-area">
          <input
            id="phone"
            type="tel"
            placeholder="Ваш телефон"
            name="phone"
            className="order-form__input"
            value={phone}
            onChange={handleChangePhone}
          />
          <span className="order-form__input-error">{inputPhoneError}</span>
        </div>
        <div className="order-form__input-area">
          <input
            id="date"
            type="date"
            placeholder="Выбрать дату"
            name="date"
            className="order-form__input"
            value={date}
            onChange={handleChangeDate}
          />
          <span className="order-form__input-error"></span>
        </div>
        <button
          className="button button__submit button__submit_order"
          name="submit"
          type="submit"
          aria-label="Записаться"
        >
          Записаться
        </button>
        <button
          className="button button__submit button__submit_order button__submit_visible_order"
          name="submit"
          type="submit"
          aria-label="Записаться на тур"
        >
          Записаться на тур
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
