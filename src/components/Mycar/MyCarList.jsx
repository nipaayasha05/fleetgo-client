import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { format } from "date-fns";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
// import UpdateCar from "./UpdateCar";
import Update from "./Update";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyCarList = ({ carsPromise }) => {
  // const { user } = use(AuthContext);
  const [update, setUpdate] = useState(null);
  const [deleteCar, setDeleteCar] = useState([]);
  const cars = use(carsPromise);
  // const navigate = useNavigate();
  // console.log(cars);

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
        fetch(`http://localhost:3000/cars/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingCars = deleteCar.filter((car) => car._id !== _id);
              setDeleteCar(remainingCars);
            }
          });
      }
    });
  };

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
                    <button
                      onClick={() => {
                        setUpdate(car);
                        document.getElementById("my_modal_2").showModal();
                      }}
                      className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 "
                    >
                      <FaEdit size={18} />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300  "
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
          {update && <Update car={update}></Update>}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setUpdate(null)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyCarList;
