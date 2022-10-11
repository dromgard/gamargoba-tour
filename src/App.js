import React from "react";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Tours from "./components/Tours";
import Rules from "./components/Rules";
import Favourites from "./components/Favourites";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

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
      <Favourites />
      <section className="order">
        <OrderForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
