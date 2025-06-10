import React from "react";

const ListLayout = ({ ava }) => {
  // console.log(ava);
  return (
    <div className="card card-side items-center bg-amber-50   shadow-sm m-3">
      <figure>
        <img
          className=" w-[350px] h-[150px] rounded-box sm:h-[250px] sm:w-[400px] lg:w-[500px] "
          src={ava.photo}
        />
      </figure>
      <div className="card-body bg-amber-50">
        <div className="flex  items-center gap-10  ">
          <h2 className="text-start  card-title">{ava.carModel}</h2>

          <p className=" text-end text-amber-400 font-semibold">
            {ava.availability}
          </p>
        </div>
        <div className="text-start">
          <p>Brand : {ava.brand} </p>
          <p>{ava.description}</p>
          <p>Price Per Day : {ava.dailyRentalPrice} $</p>
          <p>Location : {ava.location} </p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListLayout;
