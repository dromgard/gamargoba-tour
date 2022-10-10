import React from "react";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Tours from "./components/Tours";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="page">
      <Main />
      <section className="about">
        <AboutUs />
        <OurTeam />
      </section>
      <Tours />
      <Rules />
    </div>
  );
}

export default App;
