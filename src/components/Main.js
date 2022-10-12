import React from "react";
import Header from "./Header";
import back1 from "../images/main-background-1.png";
import back2 from "../images/main-background-2.png";
import back3 from "../images/main-background-3.png";

function Main() {
  const [backgroundImage, setbackgroundImage] = React.useState(back1);

  function changeBackgroundAhead() {
    switch (backgroundImage) {
      case back1:
        setbackgroundImage(back2);
        break;
      case back2:
        setbackgroundImage(back3);
        break;
      case back3:
        setbackgroundImage(back1);
        break;
      default:
        setbackgroundImage(back1);
    }
  }

  function changeBackgroundBack() {
    switch (backgroundImage) {
      case back1:
        setbackgroundImage(back3);
        break;
      case back2:
        setbackgroundImage(back1);
        break;
      case back3:
        setbackgroundImage(back2);
        break;
      default:
        setbackgroundImage(back1);
    }
  }

  return (
    <section
      className="main"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="main__block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Header />
        <div className="main__content">
          <p className="main__text">
            Кутаиси &mdash; Батуми &mdash; Тбилиси &mdash; &nbsp;
          </p>
          <h1 className="main__title">Грузия</h1>
          <p className="main__text main__text_visible">Открывать новое</p>
          <button className="button button__submit button__submit_visible_header">
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
