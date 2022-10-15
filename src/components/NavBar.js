import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NavBar({ lightTheme, burgerMenu, onClose }) {
  return (
    <div className={`navbar ${burgerMenu ? "navbar navbar_visible" : ""}`}>
      <ul
        className={`navbar__nav ${burgerMenu ? "navbar__nav_burger-menu" : ""}`}
      >
        <li>
          <Link
            to="#tours"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
            onClick={onClose}
          >
            Туры
          </Link>
        </li>
        <li>
          <Link
            to="#favoutires"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
            onClick={onClose}
          >
            Походы
          </Link>
        </li>
        <li>
          <Link
            to="#reviews"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
            onClick={onClose}
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            to="#order"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
            onClick={onClose}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
