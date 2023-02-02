import React from "react";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__desctiption">
        <h2 className="about-us__title">О нас</h2>
        <p className="about-us__subtitle">
          Начав в 2015 году как небольшое сообщество единомышленников, мы
          провели уже более 300 туров по всем уголкам Грузии.
        </p>
        <p className="about-us__subtitle">
          Некоторые наши постоянные гости так впечатлились этой страной, что
          переехали сюда на постоянное место жительства и до сих пор участвуют в
          турах, но уже как профессиональные гиды.
        </p>
      </div>
      <div className="about-us__video">
        <button className="button button__play"></button>
      </div>
    </div>
  );
}

export default AboutUs;
