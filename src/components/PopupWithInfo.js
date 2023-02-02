import React from "react";

import Popup from "./Popup";

function PopupWithInfo({ isOpen, onClose, orderData }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup-info">
        <p className="popup-info__text">{orderData.name}, спасибо за заказ!</p>
        <p className="popup-info__text">Мы свяжемся с Вами по телефону {orderData.phone}</p>
      </div>

    </Popup>
  );
}

export default PopupWithInfo;
