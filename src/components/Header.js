import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Гамарджопа Тур"></img>
      <NavBar />
      <button className="button button__submit button__submit_invisible_header">
        Позвонить нам
      </button>
      <button className="button button__burger" />
    </header>
  );
}

export default Header;
