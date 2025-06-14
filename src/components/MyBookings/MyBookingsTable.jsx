import axios from "axios";
import React, { useState } from "react";
import { ImBin, ImCalendar } from "react-icons/im";
// import MyBookingsUpdate from "./MyBookingsUpdate";

const MyBookingsTable = ({ myBooking, index, setUpdate, setMyBooking }) => {
  console.log(myBooking);
  const [cancel, setCancel] = useState([]);
  // const [update, setUpdate] = useState(null);
  const { photo, carModel, _id, email, startDate, endDate, price, status } =
    myBooking;
  //  const id = myBooking._id;
  const handleCancel = () => {
    console.log("cancel");
    axios
      .patch(`http://localhost:3000/bookings/${_id}`, {
        startDate,
        endDate,
        price,
        status: "Cancelled",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refetch = () => {
    fetch(`http://localhost:3000/bookings/?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  };

  return (
    <tr className="hover:bg-orange-100 hover:shadow-2xl hover:shadow-gray-200   bg-amber-50 sm:text-xl">
      <th>{index + 1}</th>
      <td>
        <img className="w-36 sm:h-24 h-14  rounded-xl" src={photo} alt="" />
      </td>
      <td>{carModel}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{price}$</td>
      <td>{status}</td>
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
          onClick={handleCancel}
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
