import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import MyBookingsTable from "./MyBookingsTable";
import MyBookingsUpdate from "./MyBookingsUpdate";
import { ImBin, ImCalendar } from "react-icons/im";
// import { bookingsPromise } from "../../api/bookingsApi";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [myBookings, setMyBooking] = useState([]);
  //  const [update, setUpdate] = useState(null);
  // const myBookings = use(bookingsPromise);
  useEffect(() => {
    fetch(`http://localhost:3000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [user]);
  const [update, setUpdate] = useState(null);
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
                myBooking={myBooking}
                index={index}
                key={myBooking._id}
                setUpdate={setUpdate}
                setMyBooking={setMyBooking}
              ></MyBookingsTable>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box  h-[80vh]  overflow-auto">
          {update && (
            <MyBookingsUpdate
              setMyBooking={setMyBooking}
              myBooking={update}
            ></MyBookingsUpdate>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setUpdate(null)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyBookings;
