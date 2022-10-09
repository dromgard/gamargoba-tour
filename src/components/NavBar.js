import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__nav">
        <li>
          <Link to="/" className="navbar__link">
            Туры
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar__link">
            Походы
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar__link">
            Отзывы
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar__link">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
