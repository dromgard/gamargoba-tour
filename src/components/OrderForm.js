import React, { useEffect, useState } from "react";
import DatePicker from 'react-date-picker';

function OrderForm({ onSubmit }) {
  // States.
  const [inputValues, setInputValues] = useState({
    name: "",
    tour: "",
    phone: "",
    date: "",
  });
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputNameError, setInputNameError] = useState("*Обязательное поле");
  const [inputPhoneError, setInputPhoneError] = useState("*Обязательное поле");
  const phoneRegex = /[^0-9'".]/;

  // Обработчик поля Имя.
  function handleChangeName(e) {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    })

    if (value.length === 0) {
      setInputNameError("*Обязательное поле");
      setIsNameValid(false);
      return;
    }

    setInputNameError("");
    setIsNameValid(true);
  }

  // Обработчик поля Тур.
  function handleChangeTour(e) {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  // Обработчик поля Телефон.
  function handleChangePhone(e) {
    const { name, value } = e.target;

    if (phoneRegex.test(value)) {
      setInputPhoneError("Только цифры");
      return;
    }

    setInputValues({
      ...inputValues,
      [name]: value
    })

    if (value.length === 0) {
      setInputPhoneError("*Обязательное поле");
      setIsPhoneValid(false);
      return;
    }

    setInputPhoneError("");
    setIsPhoneValid(true);
  }

  // Обработчик поля Дата.
  function handleChangeDate(e) {
    setInputValues({
      ...inputValues,
      "date": e
    })
  }

  // Сброс формы.
  function resetForm() {
    setInputValues({
      name: "",
      tour: "",
      phone: "",
      date: "",
    })
    setInputNameError("*Обязательное поле");
    setInputPhoneError("*Обязательное поле");
    setIsNameValid(false);
    setIsPhoneValid(false);
    setIsFormValid(false);
  }

  // Обработчики кнопки Submit.
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputValues);
    resetForm()
  }

  // Отслеживаем валидацию обязательных инпутов и разблокируем кнопку Submit.
  useEffect(() => {
    isNameValid && isPhoneValid ? setIsFormValid(true) : setIsFormValid(false)
  }, [isNameValid, isPhoneValid])

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
            value={inputValues.name}
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
            value={inputValues.tour}
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
            value={inputValues.phone}
            onChange={handleChangePhone}
          />
          <span className="order-form__input-error">{inputPhoneError}</span>
        </div>
        <div className="order-form__input-area">
          <DatePicker className="order-form__input" onChange={handleChangeDate} value={inputValues.date} />
          <span className="order-form__input-error"></span>
        </div>
        <button
          className="button button__submit button__submit_order"
          name="submit"
          type="submit"
          aria-label="Записаться"
          disabled={!isFormValid}
        >
          Записаться
        </button>
        <button
          className="button button__submit button__submit_disable button__submit_order button__submit_visible_order"
          name="submit"
          type="submit"
          aria-label="Записаться на тур"
          disabled={!isFormValid}
        >
          Записаться на тур
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
