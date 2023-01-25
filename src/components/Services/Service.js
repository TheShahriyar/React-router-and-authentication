import React from "react";
import { NavLink } from "react-router-dom";

const Service = (props) => {
  const { image, name, price, desc } = props.service;

  return (
    <div className="service text-center flex flex-col items-center shadow px-10 py-10">
      <img src={image} alt={name} className="w-20" />
      <h3 className="mt-8 text-xl">{name}</h3>
      <p className="py-3">{desc}</p>
      <div className="mb-4 font-semibold">
        Fee: <span className="text-red-400">${price}</span>
      </div>
      <NavLink
        to={"checkout/" + name}
        className="bg-sky-400 hover:bg-sky-500 transition-colors px-8 py-3 text-white rounded"
      >
        Book Your Seat
      </NavLink>
    </div>
  );
};

export default Service;
