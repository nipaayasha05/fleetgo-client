import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import MyBookingsTable from "./MyBookingsTable";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [myBookings, setMyBooking] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [user]);
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-amber-200 text-gray-800 sm:text-xl sm:h-24 h-16">
              <th></th>
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Booking Date</th>
              <th>Return Date</th>
              <th>Total Price</th>
              <th>Booking Status</th>
              <th>Booking Date</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((myBooking, index) => (
              <MyBookingsTable
                index={index}
                myBooking={myBooking}
                key={myBooking._id}
              ></MyBookingsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
