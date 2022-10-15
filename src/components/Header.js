import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo.svg";

function Header({ onMakeOrder, onBurgerMenu }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Гамарджопа Тур"></img>
      <NavBar />
      <button
        className="button button__submit button__submit_invisible_header"
        type="button"
        onClick={onMakeOrder}
      >
        Позвонить нам
      </button>
      <button
        className="button button__burger"
        type="button"
        onClick={onBurgerMenu}
      />
    </header>
  );
}

export default Header;
