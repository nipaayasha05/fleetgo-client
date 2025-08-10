import React from "react";
import { useNavigate } from "react-router";

const ListLayout = ({ ava }) => {
  const navigate = useNavigate();

  return (
    <div className="card text-black card-side flex items-center bg-amber-50   shadow-sm m-3 ">
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

          <p className=" text-end text-amber-500  font-semibold">
            {ava.availability}
          </p>
        </div>
        <div className="text-start">
          <p>
            <span className="font-semibold">Brand</span> : {ava.brand}{" "}
          </p>
          <p>
            <span className="font-semibold">Description</span> :{" "}
            {ava.description}
          </p>
          <p>
            <span className="font-semibold">Price Per Day </span>:{" "}
            {ava.dailyRentalPrice} $
          </p>
          <p>
            <span className="font-semibold">Booking Count</span> :{" "}
            {ava.bookingCount} $
          </p>
          <p>
            <span className="font-semibold">Location</span> : {ava.location}{" "}
          </p>
        </div>
        <p>
          <span className="font-semibold">Added On</span> : {ava.date}{" "}
        </p>

        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/car-details/${ava._id}`)}
            className="btn  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl  text-black "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListLayout;
