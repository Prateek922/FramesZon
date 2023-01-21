import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <div className="text-center mt-14">
        <h2 className="shop text-2xl text-[#0F172A] font-black leading-10 tracking-[.25rem]">
          SHOP BY CATEGORY
        </h2>
      </div>
      {/* shope by catecory */}
      <div className="category lg:flex border-black lg:gap-5 mt-14 sm:block sm:gap-5 p-5">
        <div className="one lg:w-[18.5rem] lg:h-[24rem] h-[10rem] max-w-[45rem] rounded-[12px] opacity-70 hover:opacity-100 flex sm:text-2xl text-xl text-white font-black justify-center items-center drop-shadow-md shadow-md m-auto my-4">
          EYEGLASSES
        </div>
        <div className="two grid grid-cols-2 lg:w-[45rem] sm:max-w-[45rem] lg:h-[24rem] gap-x-5 gap-y-5 sm:m-auto">
          <div className="first drop-shadow-md shadow-md max-w-[21.4rem] h-[11.4rem] flex sm:text-2xl text-xl opacity-70  text-white font-black justify-center items-center rounded-[12px] hover:opacity-100">
            <p className="p-2">READING GLASSES</p>
          </div>
          <div className="second drop-shadow-md shadow-md max-w-[21.4rem] h-[11.4rem] flex sm:text-2xl text-xl opacity-70 text-white font-black justify-center items-center rounded-[12px] hover:opacity-100">
            <p className="p-2">CONTACT LENSES</p>
          </div>
          <div className="third drop-shadow-md shadow-md max-w-[21.4rem] h-[11.4rem] opacity-70 flex sm:text-2xl text-xl text-white font-black justify-center items-center rounded-[12px] hover:opacity-100">
            SUNGLASSES
          </div>
          <div className="forth drop-shadow-md shadow-md max-w-[21.4rem] h-[11.4rem] opacity-70 flex sm:text-2xl text-xl text-white font-black justify-center items-center rounded-[12px] hover:opacity-100">
            <p className="p-2">COMPUTER GLASSES</p>
          </div>
        </div>
        <div className="three drop-shadow-md shadow-md lg:w-[18.5rem] lg:h-[24rem] opacity-70 hover:opacity-100 flex sm:text-2xl text-xl text-white font-black justify-center items-center rounded-[12px] h-[10rem] max-w-[45rem] m-auto my-4">
          ACCESSORIES
        </div>
      </div>
    </div>
  );
};

export default Shop;
