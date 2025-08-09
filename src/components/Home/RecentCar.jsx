import { formatDistance, parse } from "date-fns";
import React from "react";
import { useNavigate } from "react-router";

const RecentCar = ({ car }) => {
  const navigate = useNavigate();
  const {
    availability,
    carModel,
    date,
    dailyRentalPrice,
    photo,
    bookingCount,
  } = car;
  //   const addDate = new Date(car.date);
  return (
    <div className="card hover:bg-amber-50 shadow-xl  m-5     bg-gray-50       ">
      <figure>
        <img
          className="w-full h-[200px] md:h-[250px] lg:h-[300px]   "
          src={photo}
        />
      </figure>
      <div className="card-body    rounded-box sm:text-xl    ">
        <div className="flex  items-center gap-10  ">
          <h2 className=" sm:text-2xl sm:font-bold card-title text-black">
            {carModel}
          </h2>

          <p className=" text-end text-amber-500 font-semibold">
            {availability}
          </p>
        </div>
        <div className="text-start   sm:text-xl text-gray-700">
          <p>
            <span className="font-semibold">Price Per Day</span> :{" "}
            {dailyRentalPrice} $
          </p>
          <p>
            <span className="font-semibold">Booking Count</span> :{" "}
            {bookingCount}{" "}
          </p>
          <p className="font-semibold">
            <span>Date Posted</span> :
            {formatDistance(
              parse(date, "dd-MM-yyyy-HH:mm", new Date()),
              new Date(),
              {
                addSuffix: true,
              }
            )}
          </p>
        </div>
      </div>
      <div className="card-actions justify-end pr-6 pb-2">
        <button
          onClick={() => navigate(`/car-details/${car._id}`)}
          className="btn   bg-gradient-to-r from-amber-300 text-black  to-amber-500 my-2 border-none rounded-3xl   "
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default RecentCar;
