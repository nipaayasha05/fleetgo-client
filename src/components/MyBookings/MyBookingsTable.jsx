import React from "react";
import { ImBin, ImCalendar } from "react-icons/im";

const MyBookingsTable = ({ myBooking, index }) => {
  console.log(myBooking);
  const { photo, carModel, startDate, endDate, price, status } = myBooking;
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
        <button className="btn bg-blue-600 text-white sm:font-bold sm:py-6 rounded-2xl flex gap-2">
          <ImCalendar size={22} color="white" />
          Modify <br />
          Date
        </button>
      </td>
      <td>
        <button className="btn text-white flex gap-2 bg-red-500 sm:py-6 rounded-2xl">
          <ImBin size={22} color="white" />
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyBookingsTable;
