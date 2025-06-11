import React from "react";

const ListLayout = ({ ava }) => {
  // console.log(ava);
  return (
    <div className="card card-side flex items-center bg-amber-50   shadow-sm m-3 ">
      <figure className="flex-1 p-2">
        <img
          className=" w-[190px] h-[150px] rounded-box md:h-[250px] md:w-full lg:w-full lg:h-[350px] "
          src={ava.photo}
        />
      </figure>
      <div className="card-body sm:text-xl bg-amber-50 flex-1">
        <div className="flex  items-center gap-10  ">
          <h2 className="text-start sm:text-2xl sm:font-bold card-title">
            {ava.carModel}
          </h2>

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
