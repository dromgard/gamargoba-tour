import React from "react";
import OrderForm from "./OrderForm";
import Popup from "./Popup";

function PopupWithOrder({ isOpen, onClose, onSubmit }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <OrderForm onSubmit={onSubmit} />
    </Popup>
  );
}

export default PopupWithOrder;
