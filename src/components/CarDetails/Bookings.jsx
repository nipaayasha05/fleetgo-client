import React, { use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { differenceInDays, format } from "date-fns";
import { FaCarAlt } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Bookings = ({ cars, bookings }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { user } = use(AuthContext);
  const { id } = useParams();
  const carBookings = cars.find((car) => car._id == id);
  // console.log(carBookings);
  // console.log(cars);
  // console.log(bookings);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const booking = Object.fromEntries(formData);
    console.log(booking);
    document.getElementById("my_modal_2").close();

    axios
      .post("http://localhost:3000/bookings", booking)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancel = () => {
    document.getElementById("my_modal_2").close();
  };

  return (
    <div className="space-y-2 m-5   sm:my-5 my-44 ">
      <p className="flex items-center gap-2 font-bold text-2xl">
        <FaCarAlt />
        Car Booking Form
      </p>
      <p>
        <span className="font-semibold">You're Booking : </span>
        {carBookings?.carModel}
      </p>
      <p>
        <span className="font-semibold">Daily Rental Price : </span>
        {carBookings.dailyRentalPrice}$
      </p>

      <form onSubmit={handleBooking}>
        <div className="">
          <fieldset className="fieldset hidden">
            <label className="fieldset-legend ">email</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input w-full border "
              placeholder="Location"
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset hidden ">
            <label className="fieldset-legend ">Current Date</label>

            <input
              type="text"
              name="date"
              className="input w-full border "
              placeholder="Location"
              value={format(new Date(), "dd-MM-yyyy-HH:mm")}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset hidden ">
            <label className="fieldset-legend">Car Model</label>
            <input
              type="text"
              name="carModel"
              className="input w-full border "
              placeholder="Car Model"
              value={carBookings?.carModel}
              readOnly
              required
            />
          </fieldset>
          <fieldset className="fieldset hidden">
            <label className="fieldset-legend">Daily Rental Price</label>
            <input
              type="text"
              name="dailyRentalPrice"
              className="input w-full border "
              placeholder="Daily Rental Price"
              value={carBookings.dailyRentalPrice}
              readOnly
              required
            />
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend   text-sm   font-semibold">
              Status
            </legend>

            <input
              type="text "
              name="status"
              className="input input-border w-full"
              value="Confirmed"
              defaultChecked
              readOnly
            />
          </fieldset>
          <div className="  gap-5 py-2">
            <div>
              <p className="text-sm font-semibold ">Booking Date</p>
              <fieldset className=" fieldset input input-border w-full">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  timeFormat="HH:mm"
                  dateFormatCalendar="dd-MM-yyyy"
                  placeholderText="Select date and time"
                />
                <input
                  type="hidden"
                  name="startDate"
                  value={startDate ? format(startDate, "dd-MM-yyyy-HH:mm") : ""}
                />
              </fieldset>
            </div>
            <fieldset className="fieldset hidden">
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full border "
                placeholder="Photo URL"
                value={carBookings.photo}
                readOnly
              />
            </fieldset>
            <div>
              <p className="text-sm   font-semibold ">Return Date</p>
              <fieldset className=" fieldset input input-border w-full">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  timeFormat="HH:mm"
                  dateFormatCalendar="dd-MM-yyyy"
                  placeholderText="Select date and time"
                />
                <input
                  type="hidden"
                  name="endDate"
                  value={endDate ? format(endDate, "dd-MM-yyyy-HH:mm") : ""}
                />
              </fieldset>
            </div>
          </div>
          <p id="price">
            <span className="font-semibold"> Total Cost : </span>
            {(differenceInDays(endDate, startDate) + 1) *
              carBookings.dailyRentalPrice}
            $
          </p>
          <input
            type="hidden"
            name="price"
            value={
              (differenceInDays(endDate, startDate) + 1) *
              carBookings.dailyRentalPrice
            }
          />
        </div>
        <div className="flex justify-evenly ml-15">
          {" "}
          <button
            type="button"
            onClick={handleCancel}
            className="btn bg-gradient-to-r from-red-300  to-red-500 my-2 border-3 rounded-2xl border-red-200 "
          >
            Cancel
          </button>
          <input
            className="btn  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-200 "
            type="submit"
            value="Confirmed Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default Bookings;
