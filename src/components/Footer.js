import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo-dark.svg";
import logoPartner1 from "../images/logo-partner-1.svg";
import logoPartner2 from "../images/logo-partner-2.svg";
import logoPartner3 from "../images/logo-partner-3.svg";
import logoPartner4 from "../images/logo-partner-4.svg";

function Footer() {
  const lightTheme = true;

  return (
    <footer className="footer">
      <img
        className="logo logo_invisible"
        src={logo}
        alt="Гамарджопа Тур"
      ></img>
      <NavBar lightTheme={lightTheme} />
      <button className="button button__submit button__submit_invisible_footer">
        Позвонить нам
      </button>
      <img className="logo-partner" src={logoPartner1} alt="партнер 1"></img>
      <img className="logo-partner" src={logoPartner2} alt="партнер 2"></img>
      <img className="logo-partner" src={logoPartner3} alt="партнер 3"></img>
      <img className="logo-partner" src={logoPartner4} alt="партнер 4"></img>
    </footer>
  );
}

export default Footer;
