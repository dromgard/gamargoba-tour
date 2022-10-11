import React from "react";
import { Link } from "react-router-dom";

function NavBar({ lightTheme }) {
  return (
    <div className="navbar">
      <ul className="navbar__nav">
        <li>
          <Link
            to="/"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Туры
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Походы
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={`navbar__link ${lightTheme ? "navbar__link_light" : ""}`}
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            to="/"
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
