import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { format } from "date-fns";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const MyCarList = ({ carsPromise }) => {
  const { user } = use(AuthContext);
  const cars = use(carsPromise);
  console.log(cars);
  return (
    <div className="container mx-auto">
      {cars.length == 0 ? (
        <div>
          <p className="text-2xl font-bold text-center">Add A Car</p>
          <button className="bg-gradient-to-r from-amber-300  to-amber-400 my-2 border-3 rounded-2xl border-amber-300 ">
            Add Car
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto py-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="lg:text-xl md:text-sm">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

                <th>car Model</th>
                <th>Daily Rental Price</th>
                <th>bookingCount</th>
                <th>Availability</th>
                <th>Date Added</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cars.map((car, index) => (
                <tr
                  className="lg:text-xl md:text-sm"
                  car={car}
                  index={index}
                  key={car._id}
                >
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-24 w-24">
                          <img src={car?.photo} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{car.carModel}</div>
                      </div>
                    </div>
                  </td>
                  <td>{car.dailyRentalPrice} $</td>
                  <td>{car.bookingCount}</td>
                  <td>{car.availability}</td>
                  <td>{format(new Date(), "MM-dd-yyyy-HH:mm")}</td>
                  <th>
                    <button className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 ">
                      <FaInfoCircle size={18} />
                    </button>
                  </th>
                  <th>
                    <button className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300  ">
                      <FaEdit size={18} />
                    </button>
                  </th>
                  <th>
                    <button className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300  ">
                      <RiDeleteBin2Fill size={18} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCarList;
