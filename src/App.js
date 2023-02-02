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
import PopupWithInfo from "./components/PopupWithInfo";
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
  const [isPopupWithInfo, setIsPopupWithInfo] = React.useState(false);
  const [orderData, setOrderData] = React.useState({ name: "", phone: "" });

  function closePopupOrder() {
    setIsPopupOrderOpen(false);
  }

  function closeBurgerMenu() {
    setIsPopupNavOpen(false);
  }

  function closePopupWithInfo() {
    setIsPopupWithInfo(false);
    closePopupOrder();
    setTimeout(() => {
      setOrderData({ name: "", phone: "" });
    }, 300)

  }

  function handleSubmitForm({ name, phone }) {
    setOrderData({ name, phone });
    setIsPopupWithInfo(true);
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
        <OrderForm onSubmit={handleSubmitForm} />
      </section>
      <Footer onMakeOrder={setIsPopupOrderOpen} />
      <PopupWithOrder isOpen={isPopupOrderOpen} onClose={closePopupOrder} onSubmit={handleSubmitForm} />
      <PopupWithNav isOpen={isPopupNavOpen} onClose={closeBurgerMenu} />
      <PopupWithInfo isOpen={isPopupWithInfo} onClose={closePopupWithInfo} orderData={orderData} />
    </div>
  );
}

export default App;
