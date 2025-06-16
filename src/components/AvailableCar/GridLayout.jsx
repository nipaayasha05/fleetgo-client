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
      <div className="card-body   sm:text-xl bg-amber-50">
        <div className="sm:h-[250px]">
          <div className="flex  items-center gap-10  ">
            <h2 className=" sm:text-2xl sm:font-bold card-title">
              {ava.carModel}
            </h2>

            <p className=" text-end text-amber-400 font-semibold">
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
            className="btn w-full  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
