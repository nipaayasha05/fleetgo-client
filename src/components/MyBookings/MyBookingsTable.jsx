import axios from "axios";
import React, { useState } from "react";
import { ImBin, ImCalendar } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import MyBookingsUpdate from "./MyBookingsUpdate";

const MyBookingsTable = ({ myBooking, index, setUpdate, setMyBooking }) => {
  const { photo, carModel, _id, email, startDate, endDate, price, status } =
    myBooking;
  const axiosSecure = useAxiosSecure();
  //  const id = myBooking._id;
  const handleCancel = () => {
    Swal.fire({
      title: "Are you want to cancel this booking?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/bookings/${_id}`, {
            startDate,
            endDate,
            price,
            status: "Cancelled",
          })

          .then((res) => {
            if (res?.data?.modifiedCount) {
              Swal.fire({
                title: "Cancel!",
                text: "Your booking has been cancel.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {});
      }
    });
  };

  const refetch = () => {
    axiosSecure
      .get(`http://localhost:3000/bookings/?email=${email}`)

      .then((res) => setMyBooking(res.data));
  };

  return (
    <tr className="hover:bg-gray-50 hover:shadow-2xl hover:shadow-gray-200 text-black border-b border-b-amber-300  bg-amber-50 sm:text-xl">
      <th>{index + 1}</th>
      <td>
        <img className="w-36 sm:h-24 h-14  rounded-xl" src={photo} alt="" />
      </td>
      <td>{carModel}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{price}$</td>
      <td
        className={`mt-5 sm:mt-10 ${
          status === "Confirmed"
            ? "bg-green-400 text-white btn rounded-full"
            : status === "Cancelled"
            ? "bg-red-400 text-white btn rounded-full"
            : "bg-green-400 text-white btn rounded-full"
        }`}
      >
        {status}
      </td>
      <td>
        <button
          onClick={() => {
            setUpdate(myBooking);
            document.getElementById("my_modal_2").showModal();
          }}
          className="btn bg-blue-600 text-white sm:font-bold sm:py-6 rounded-2xl flex gap-2"
        >
          <ImCalendar size={22} color="white" />
          Modify <br />
          Date
        </button>
      </td>
      <td>
        <button
          onClick={() => handleCancel()}
          className="btn text-white flex gap-2 bg-red-500 sm:py-6 rounded-2xl"
        >
          <ImBin size={22} color="white" />
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyBookingsTable;
