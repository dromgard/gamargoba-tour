import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo-dark.svg";

function Footer() {
  const lightTheme = true;

  return (
    <footer className="footer">
      <img className="logo" src={logo} alt="Гамарджопа Тур"></img>
      <NavBar lightTheme={lightTheme} />
      <button className="button button__submit">Позвонить нам</button>
    </footer>
  );
}

export default Footer;
