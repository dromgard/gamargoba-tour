import React from "react";
import NavBar from "./NavBar";
import Popup from "./Popup";

function PopupWithNav({ isOpen, onClose }) {
  const lightTheme = true;

  return (
    <Popup isOpen={isOpen} onClose={onClose} burgerMenu={isOpen}>
      <NavBar lightTheme={lightTheme} onClose={onClose} burgerMenu={isOpen} />
    </Popup>
  );
}

export default PopupWithNav;
