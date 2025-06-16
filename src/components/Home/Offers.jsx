import React from "react";
import Offer from "./Offer";

const Offers = ({ offers }) => {
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   py-3">
      {offers.map((offer) => (
        <Offer offer={offer} key={offer.id}></Offer>
      ))}
    </div>
  );
};

export default Offers;
