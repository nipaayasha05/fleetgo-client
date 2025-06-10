import React from "react";

const GridLayout = ({ ava }) => {
  console.log(ava);
  return (
    <div className="card bg-base-100   shadow-sm">
      <figure>
        <img className="w-full h-[280px]" src={ava.photo} />
      </figure>
      <div className="card-body bg-amber-50">
        <div className="flex  items-center gap-10  ">
          <h2 className="  card-title">{ava.carModel}</h2>

          <p className=" text-end text-amber-400 font-semibold">
            {ava.availability}
          </p>
        </div>
        <div className="text-start">
          <p>{ava.description}</p>
          <p>Price Per Day : {ava.dailyRentalPrice} $</p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn w-full  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
