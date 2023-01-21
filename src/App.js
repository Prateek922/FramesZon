import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Banner";
import Magazine from "./Components/Magazine";
import Footer from "./Components/Footer";
import InternationalBrands from "./Components/InternationalBrands";
import Categories from "./Components/Categories";
import Shop from "./Components/Shop";
import FlashDeals from "./Components/FlashDeals";
import Services from "./Components/Services";

const App = () => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      {/* <Categories /> */}
      <Banner />
      <InternationalBrands />
      <Magazine />
      <Services />
      <FlashDeals />
      <Shop />
      <Footer />
    </div>
  );
};

export default App;
