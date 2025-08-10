import React, { use, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import MyBookingsTable from "./MyBookingsTable";
import MyBookingsUpdate from "./MyBookingsUpdate";
import { ImBin, ImCalendar } from "react-icons/im";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { NavLink } from "react-router";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [myBookings, setMyBooking] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = "FleetGo | My Bookings";
  }, []);

  useEffect(() => {
    axiosSecure
      .get(`/bookings?email=${user?.email}`)
      // .then((res) => res.json())
      .then((res) => setMyBooking(res.data));
  }, [user?.email, axiosSecure]);
  const [update, setUpdate] = useState(null);
  return (
    <div className="container mx-auto">
      {myBookings.length == 0 ? (
        <div>
          <p className="text-2xl font-bold text-center pt-5">
            You haven't booked any cars yet!
          </p>
          <div className="text-center py-5">
            <NavLink
              to="/available-cars"
              className="btn bg-gradient-to-r from-amber-300  to-amber-400 my-2 border-none rounded-3xl text-black  "
            >
              Book Now
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-3xl text-amber-500 font-bold text-center mt-5 pt-5">
            My Rental Bookings
          </p>
          <div className="overflow-x-auto py-10">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-amber-300   text-gray-800 sm:text-xl sm:h-24 h-16">
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
            <div className="modal-box  h-[60vh]  overflow-auto">
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
      )}
    </div>
  );
};

export default MyBookings;
