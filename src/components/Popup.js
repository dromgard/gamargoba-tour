import React from "react";

function Popup({ isOpen, onClose, burgerMenu, children }) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} ${
        burgerMenu ? "popup_burger-menu" : ""
      }`}
    >
      <div
        className={`popup__container ${
          burgerMenu ? "popup__container_burger-menu" : ""
        }`}
      >
        {children}
        <button
          className="button popup__close"
          type="button"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;
