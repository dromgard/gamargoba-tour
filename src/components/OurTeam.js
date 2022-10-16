import React from "react";
import OurTeamCards from "./OurTeamCards";

function OurTeam({ stuff }) {
  return (
    <>
      <div className="our-team">
        <h2 className="about-us__title">Наша команда</h2>
        <p className="about-us__subtitle">
          В нашей команде работают люди, которые прожили здесь от трёх лет,
          чтобы успеть прочувствовать весь менталитет и особенности национальной
          культуры. Именно такие люди смогут заразить вас своей любовью к Грузии
          и подарить новую малую родину.
        </p>
      </div>
      <div className="our-team__cards">
        <OurTeamCards stuff={stuff} />
      </div>
    </>
  );
}

export default OurTeam;
