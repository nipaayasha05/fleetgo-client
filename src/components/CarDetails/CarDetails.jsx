import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Bookings from "./Bookings";
import Swal from "sweetalert2";

const CarDetails = () => {
  const cars = useLoaderData();
  const { id } = useParams();
  const carsDetails = cars.find((car) => car._id == id);
  // console.log(cars);
  // console.log(carsDetails);

  const [bookings, setBookings] = useState(null);
  const {
    availability,
    bookingCount,
    brand,
    carModel,
    dailyRentalPrice,
    date,
    description,

    features,
    location,
    photo,
    registrationNumber,
  } = carsDetails;
  // const [count, setCount] = useState(0);
  // const handleCount = () => {
  //   const update = count + 1;
  //   setCount(update);
  //   fetch(`https://assignment-11-server-chi-gray.vercel.app/cars/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ bookingCount: update }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.modifiedCount) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Blog updated successfully.",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //       // navigate("/my-car");
  //     });
  // };
  return (
    <div className="container mx-auto py-10">
      <div className=" m-5 flex bg-amber-50 flex-col lg:flex-row justify-center items-center shadow-gray-600  shadow-md p-5 rounded-xl space-y-5 lg:gap-10">
        <div className="flex-1">
          <img
            className="shadow-gray-600 shadow-lg rounded-xl"
            src={photo}
            alt=""
          />
        </div>
        <div className="flex-1 text-start lg::w-3xl sm:text-xl">
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Availability :</span>
            {availability}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <p>
            <span>Car Model :</span>
            {carModel}
          </p>
          <button
            onClick={() => {
              setBookings(cars);
              document.getElementById("my_modal_2").showModal();
            }}
            className="btn    bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 "
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
