import React from "react";
import { useNavigate } from "react-router";

const GridLayout = ({ ava }) => {
  const navigate = useNavigate();
  // console.log(ava);
  return (
    <div className="card bg-base-100   shadow-sm">
      <figure>
        <img className="w-full h-[280px]" src={ava.photo} />
      </figure>
      <div className="card-body text-black  sm:text-xl bg-amber-50">
        <div className="sm:h-10/12">
          <div className="flex  items-center gap-10  ">
            <h2 className=" sm:text-2xl sm:font-bold card-title">
              {ava.carModel}
            </h2>

            <p className=" text-end text-amber-500 font-semibold">
              {ava.availability}
            </p>
          </div>
          <div className="text-start">
            <p>
              <span className="font-semibold">Brand</span> : {ava.brand}{" "}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Description</span> :{" "}
              {ava.description}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Price Per Day</span> :{" "}
              {ava.dailyRentalPrice} $
            </p>
            <p>
              {" "}
              <span className="font-semibold">Booking Count</span> :{" "}
              {ava.bookingCount}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Location</span> : {ava.location}{" "}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Added On</span> : {ava.date}{" "}
            </p>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/car-details/${ava._id}`)}
            className="btn w-full  bg-gradient-to-r from-amber-300 text-black  to-amber-500 my-2 border-none rounded-3xl   "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
