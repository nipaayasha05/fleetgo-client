import axios from "axios";
import { differenceInDays, format } from "date-fns";
import React, { use, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyBookingsUpdate = ({ myBooking, setMyBooking }) => {
  const { user } = use(AuthContext);
  console.log(myBooking);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [price, setPrice] = useState(myBooking?.dailyRentalPrice);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(myBooking);
  }, []);
  useEffect(() => {
    if (startDate && endDate) {
      const days = differenceInDays(endDate, startDate) + 1;
      const price = days * allData.dailyRentalPrice;
      setPrice(price);
    }
  }, [startDate, endDate, allData.dailyRentalPrice]);
  //   const id = myBooking._id;
  const handleModifyDate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const id = myBooking._id;
    const modifyDate = Object.fromEntries(formData);

    console.log(modifyDate);
    document.getElementById("my_modal_2").close();

    axios
      .patch(
        `https://assignment-11-server-chi-gray.vercel.app/bookings/${id}`,
        {
          startDate: format(startDate, "dd-MM-yyyy HH:mm"),
          endDate: format(endDate, "dd-MM-yyyy HH:mm"),
          price,
          status: "confirmed",
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Blog updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refetch = () => {
    fetch(
      `https://assignment-11-server-chi-gray.vercel.app/bookings/?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  };

  return (
    <div>
      <form onSubmit={handleModifyDate}>
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
              onChange={(e) => setStartDate(e.target.value)}
              name="startDate"
              value={startDate ? format(startDate, "dd-MM-yyyy-HH:mm") : ""}
            />
          </fieldset>
        </div>
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
              onChange={(e) => setEndDate(e.target.value)}
              name="endDate"
              value={endDate ? format(endDate, "dd-MM-yyyy-HH:mm") : ""}
            />
          </fieldset>
        </div>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          value={price}
          readOnly
        />
        <input
          className="btn mt-5   bg-green-800 text-white"
          type="submit"
          value="Confirm"
        />
      </form>
    </div>
  );
};

export default MyBookingsUpdate;
