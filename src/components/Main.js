import React from "react";
import Header from "./Header";
import back1 from "../images/main-background-1.png";
import back2 from "../images/main-background-2.png";
import back3 from "../images/main-background-3.png";

function Main({ onMakeOrder, onBurgerMenu }) {
  const [backgroundImage, setbackgroundImage] = React.useState(back1);
  const [isLightTheme, setIsLightTheme] = React.useState(false);

  function changeBackgroundAhead() {
    switch (backgroundImage) {
      case back1:
        setbackgroundImage(back2);
        setIsLightTheme(false);
        break;
      case back2:
        setbackgroundImage(back3);
        setIsLightTheme(true);
        break;
      case back3:
        setbackgroundImage(back1);
        setIsLightTheme(false);
        break;
      default:
        setbackgroundImage(back1);
        setIsLightTheme(false);
    }
  }

  function changeBackgroundBack() {
    switch (backgroundImage) {
      case back1:
        setbackgroundImage(back3);
        setIsLightTheme(true);
        break;
      case back2:
        setbackgroundImage(back1);
        setIsLightTheme(false);
        break;
      case back3:
        setbackgroundImage(back2);
        setIsLightTheme(false);
        break;
      default:
        setbackgroundImage(back1);
        setIsLightTheme(false);
    }
  }

  return (
    <section
      id="main"
      className="main"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div
        className="main__block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Header onMakeOrder={onMakeOrder} onBurgerMenu={onBurgerMenu} />
        <div className="main__content">
          <p className="main__text">
            Кутаиси &mdash; Батуми &mdash; Тбилиси &mdash; &nbsp;
          </p>
          <h1 className={`main__title ${isLightTheme && "main__title_light-theme"}`}>Грузия</h1>
          <p className={`main__text main__text_visible ${isLightTheme && "main__text_visible-light-theme"}`}>Открывать новое</p>
          <button
            className="button button__submit button__submit_visible_header"
            type="button"
            aria-label="Позвонить нам"
            onClick={onMakeOrder}
          >
            Позвонить нам
          </button>
        </div>
        <div className="scroll scroll_main">
          <button
            onClick={changeBackgroundBack}
            className="scroll__button scroll__button_left-light"
          />
          <button
            onClick={changeBackgroundAhead}
            className="scroll__button scroll__button_right-light"
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
