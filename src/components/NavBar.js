import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NavBar({ lightTheme }) {
  return (
    <div className="navbar">
      <ul className="navbar__nav">
        <li>
          <Link
            to="#tours"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Туры
          </Link>
        </li>
        <li>
          <Link
            to="#favoutires"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Походы
          </Link>
        </li>
        <li>
          <Link
            to="#reviews"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            to="#order"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
