import React from "react";

const AvailableCard = ({ ava }) => {
  console.log(ava);
  return (
    <div className="card bg-base-100   shadow-sm">
      <figure>
        <img className="w-full h-[280px]" src={ava.photo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ava.carModel}</h2>
        <p>{ava.description}</p>
        <div className="card-actions justify-end">
          <button className="btn w-full  bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 my-2 border-3 rounded-2xl border-amber-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
