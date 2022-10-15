import React from "react";
import OrderForm from "./OrderForm";
import Popup from "./Popup";

function PopupWithOrder({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <OrderForm />
    </Popup>
  );
}

export default PopupWithOrder;
