import { formatDistance, parse } from "date-fns";
import React from "react";

const RecentCar = ({ car }) => {
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
    <div className="card shadow-sm  m-5 hover:shadow-2xl border border-gray-100  shadow-gray-900 hover:border-5 hover:border-amber-200 ">
      <figure>
        <img
          className="w-full h-[200px] md:h-[250px] lg:h-[300px]   "
          src={photo}
        />
      </figure>
      <div className="card-body hover:bg-amber-100 hover:bg-opacity-100 rounded-box sm:text-xl bg-amber-50   ">
        <div className="flex  items-center gap-10  ">
          <h2 className=" sm:text-2xl sm:font-bold card-title">{carModel}</h2>

          <p className=" text-end text-amber-400 font-semibold">
            {availability}
          </p>
        </div>
        <div className="text-start">
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
    </div>
  );
};

export default RecentCar;
