import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { format } from "date-fns";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

import Update from "./Update";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCarList = ({ cars }) => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [update, setUpdate] = useState(null);
  const [deleteCar, setDeleteCar] = useState([]);
  const navigate = useNavigate();

  // const cars = use(carsPromise);
  const [allData, setAllData] = useState(cars);
  // const navigate = useNavigate();

  useEffect(() => {
    setAllData(cars);
  }, [cars]);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        axiosSecure.delete(`/cars/${_id}`).then((res) => {
          const data = res.data;
          refetch();
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your car has been deleted.",
              icon: "success",
            });

            const remainingCars = deleteCar.filter((car) => car._id !== _id);
            setDeleteCar(remainingCars);
          }
        });
        // .then((data) => {

        // });
      }
    });
  };

  const refetch = () => {
    axiosSecure.get(`/cars?email=${user.email}`).then((res) => {
      setAllData(res.data);
    });
    // .then((data) => setAllData(data));
  };

  return (
    <div className="container hover:text-black mx-auto">
      {cars.length == 0 ? (
        <div>
          <p className="text-2xl text-amber-500 font-bold text-center">
            You haven't added any cars yet!
          </p>
          <div className="text-center py-5">
            <NavLink
              to="/add-car"
              className="btn bg-gradient-to-r from-amber-300  to-amber-400 my-2 border-none rounded-3xl  text-black "
            >
              Add Car
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto py-5">
          <table className="table text-black bg-amber-50">
            {/* head */}
            <thead className="sm:h-24 h-16">
              <tr className="lg:text-xl md:text-sm text-black border-b border-b-amber-300">
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
              {allData.map((car, index) => (
                <tr
                  className="lg:text-xl md:text-sm hover:bg-gray-50 border-b border-b-amber-300"
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
                  <td>{car.bookingCount ? car.bookingCount : 0}</td>
                  <td>{car.availability}</td>
                  <td>{car.date}</td>
                  <th>
                    <button
                      onClick={() => navigate(`/car-details/${car._id}`)}
                      className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl text-black  "
                    >
                      <FaInfoCircle size={18} />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        setUpdate(car);
                        document.getElementById("my_modal_2").showModal();
                      }}
                      className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl  text-black "
                    >
                      <FaEdit size={18} />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl text-black "
                    >
                      <RiDeleteBin2Fill size={18} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box  h-[80vh]  overflow-auto">
          {update && (
            <Update
              setAllData={setAllData}
              refetch={refetch}
              car={update}
            ></Update>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setUpdate(null)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyCarList;
