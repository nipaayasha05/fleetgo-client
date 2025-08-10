import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Bookings from "./Bookings";

import { GoDotFill } from "react-icons/go";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const CarDetails = () => {
  const cars = useLoaderData();
  const { user } = use(AuthContext);
  // console.log(cars);
  const { id } = useParams();
  const carsDetails = cars.find((car) => car._id == id);

  const [bookings, setBookings] = useState(null);
  const {
    availability,

    carModel,
    dailyRentalPrice,
    date,
    description,

    features,
    location,
    photo,
  } = carsDetails;
  const featuresList = features.split(",");
  // console.log(featuresList);

  useEffect(() => {
    document.title = "FleetGo | Car Details";
  }, []);

  return (
    <div className="container    mx-auto py-10">
      <div className=" m-5 flex bg-amber-50 flex-col lg:flex-row justify-center items-center shadow-gray-600  shadow-md p-5 rounded-xl space-y-5 lg:gap-10">
        <div className="flex-1">
          <img className=" shadow-xl rounded-xl" src={photo} alt="" />
        </div>
        <div className="flex-1  text-start lg::w-3xl sm:text-xl  ">
          <p className="sm:text-2xl font-bold text-black">{carModel}</p>
          <p className="text-black">
            <span className="font-semibold">Price Per Day : </span>
            {dailyRentalPrice}$
          </p>
          <p className="text-black">
            <span className="font-semibold">Availability : </span>
            {availability}
          </p>
          <div className="text-black">
            <span className="font-semibold">Features : </span>
            {featuresList.map((feature, index) => (
              <p className="flex items-center" key={index}>
                <GoDotFill />
                {feature}
              </p>
            ))}
          </div>
          <p className="text-black">
            <span className="font-semibold">Description : </span>
            {description}
          </p>
          <p className="text-black">
            <span className="font-semibold">Added On : </span>
            {date}
          </p>
          <p className="text-black">
            <span className="font-semibold">Location : </span>
            {location}
          </p>

          <button
            onClick={() => {
              if (!user) {
                Swal.fire({
                  icon: "warning",
                  title: "Please Login First",
                  text: "You need to be logged in to add items to cart.",
                });
                return;
              }
              setBookings(cars);
              document.getElementById("my_modal_2").showModal();
            }}
            className="btn  text-black  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl   "
          >
            Book Now
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box   overflow-auto">
              {bookings && (
                <Bookings cars={cars} bookings={bookings}></Bookings>
              )}
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setBookings(null)}>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
