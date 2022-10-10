import React from "react";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Tours from "./components/Tours";

function App() {
  return (
    <div className="page">
      <Main />
      <section className="about">
        <AboutUs />
        <OurTeam />
      </section>
      <Tours />
    </div>
  );
}

export default App;
