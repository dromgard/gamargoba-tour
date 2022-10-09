import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Гамарджопа Тур"></img>
      <NavBar />
      <button className="button-submit">Позвонить нам</button>
    </header>
  );
}

export default Header;
