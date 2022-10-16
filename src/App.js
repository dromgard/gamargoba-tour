import React from "react";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Tours from "./components/Tours";
import Rules from "./components/Rules";
import Favourites from "./components/Favourites";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import PopupWithOrder from "./components/PopupWithOrder";
import PopupWithNav from "./components/PopupWithNav";
import {
  stuff,
  toursCards,
  toursIncludes,
  favouritePlaces,
  reviews,
} from "./components/utils/constants.js";

function App() {
  const [isPopupOrderOpen, setIsPopupOrderOpen] = React.useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);

  function closePopupOrder() {
    setIsPopupOrderOpen(false);
  }

  function closeBurgerMenu() {
    setIsPopupNavOpen(false);
  }

  return (
    <div className="page">
      <Main
        onMakeOrder={setIsPopupOrderOpen}
        onBurgerMenu={setIsPopupNavOpen}
      />
      <section className="about">
        <AboutUs />
        <OurTeam stuff={stuff} />
      </section>
      <Tours toursCards={toursCards} toursIncludes={toursIncludes} />
      <Rules />
      <Favourites favouritePlaces={favouritePlaces} reviews={reviews} />
      <section id="order" className="order">
        <OrderForm />
      </section>
      <Footer onMakeOrder={setIsPopupOrderOpen} />
      <PopupWithOrder isOpen={isPopupOrderOpen} onClose={closePopupOrder} />
      <PopupWithNav isOpen={isPopupNavOpen} onClose={closeBurgerMenu} />
    </div>
  );
}

export default App;
