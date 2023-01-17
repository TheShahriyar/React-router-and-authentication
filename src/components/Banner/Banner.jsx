import React from "react";
import BannerImage from "../../../src/images/banner1.jpeg";

const Banner = () => {
  return (
    <div
      className="banner-section bg-cover bg-no-repeat bg-center py-72 relative"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="overlay bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="container z-10 relative">
        <h1 className="font-bold text-white text-6xl">eCare Medical Center</h1>
        <p className="text-xl w-1/2 text-white my-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          quidem consectetur? Quaerat blanditiis itaque neque totam voluptatum
        </p>
        <button className="bg-sky-400 hover:bg-sky-600 text-white font-semibold text-lg px-12 py-4 rounded-md transition-colors duration-300">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Banner;
