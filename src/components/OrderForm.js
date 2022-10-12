import React from "react";

function OrderForm() {
  // Переменные полей ввода.
  const [name, setName] = React.useState("");
  const [tour, setTour] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");

  // Обработчики полей ввода.
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeTour(e) {
    setTour(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeDate(e) {
    setDate(e.target.value);
  }

  return (
    <div className="order-form">
      <h2 className="order-form__title">Записаться на тур</h2>
      <form className="order-form__form">
        <input
          id="name"
          type="text"
          placeholder="Ваше имя"
          name="name"
          className="order-form__input"
          value={name}
          onChange={handleChangeName}
          required
        />
        <input
          id="tour"
          type="text"
          placeholder="Выбрать тур"
          name="tour"
          className="order-form__input"
          value={tour}
          onChange={handleChangeTour}
          required
        />
        <input
          id="phone"
          type="tel"
          placeholder="+7(___)___ __ __"
          name="phone"
          className="order-form__input"
          value={phone}
          onChange={handleChangePhone}
          required
        />
        <input
          id="date"
          type="date"
          placeholder="Выбрать дату"
          name="date"
          className="order-form__input"
          value={date}
          onChange={handleChangeDate}
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
