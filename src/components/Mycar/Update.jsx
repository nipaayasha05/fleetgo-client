import { format } from "date-fns";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Update = ({ car, refetch }) => {
  const { user } = use(AuthContext);
  // const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // const [count, setCount] = useState(0);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addCar = Object.fromEntries(formData);
    const id = car._id;
    document.getElementById("my_modal_2").close();

    axiosSecure.put(`/cars/${id}`, addCar).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Car information updated successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // navigate("/my-car");
    });
  };

  return (
    <div className=" ">
      <div className=" py-5 mb-5">
        <h3 className="text-3xl font-bold  text-center text-amber-500 py-10">
          Update Your Car Here
        </h3>
        <form
          onSubmit={handleUpdate}
          className="fieldset border  shadow-gray-100 shadow-sm rounded-box   p-3      "
        >
          <div className="   grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset text-black bg-gray-100 border-base-300 rounded-box border p-4 hidden">
              <label className="label  ">email</label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input w-full border "
                placeholder="Location"
              />
            </fieldset>

            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4 hidden">
              <label className="label ">Current Date</label>

              <input
                type="text"
                name="date"
                defaultValue={car?.date}
                className="input w-full border "
                placeholder="Location"
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Car Model</label>
              <input
                type="text"
                name="carModel"
                defaultValue={car?.carModel}
                className="input w-full border bg-gray-50 text-black"
                placeholder="Car Model"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Daily Rental Price</label>
              <input
                type="text"
                name="dailyRentalPrice"
                defaultValue={car?.dailyRentalPrice}
                className="input w-full border bg-gray-50 text-black"
                placeholder="Daily Rental Price"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border w-full p-5">
              <label className="label">Availability</label>
              <div className="flex gap-5 ">
                <div className="flex gap-2 text-gray-500  ">
                  <input
                    type="radio"
                    name="availability"
                    defaultValue={car?.availability}
                    className="radio radio-neutral radio-xs bg-gray-50 text-black"
                    defaultChecked
                  />
                  <p>Available</p>
                </div>

                <div className="flex gap-2 text-gray-500  ">
                  <input
                    type="radio"
                    name="availability"
                    defaultValue={car?.availability}
                    className="radio radio-neutral radio-xs bg-gray-50 text-black"
                    defaultChecked
                  />
                  <p>Unavailable</p>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Vehicle Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                defaultValue={car?.registrationNumber}
                className="input w-full border bg-gray-50 text-black"
                placeholder="Vehicle Registration Number"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Features</label>
              <input
                type="text"
                name="features"
                defaultValue={car?.features}
                className="input w-full border bg-gray-50 text-black"
                placeholder="Features"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Brand</label>
              <input
                type="text"
                name="brand"
                defaultValue={car?.brand}
                className="input w-full border bg-gray-50 text-black"
                placeholder="Brand"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <textarea
                type="text"
                name="description"
                defaultValue={car?.description}
                className="textarea  w-full h-24 bg-gray-50 text-black"
                placeholder="Description"
                required
              ></textarea>
            </fieldset>
            <fieldset className="fieldset hidden bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">bookingCount</label>
              <input
                type="text"
                name="bookingCount"
                defaultValue={car?.bookingCount}
                className="input w-full border bg-gray-50 text-black"
                placeholder="bookingCount"
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={car?.location}
                className="input w-full border bg-gray-50 text-black"
                placeholder="Location"
                required
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-amber-50 border-base-300 rounded-box my-2 border p-4">
            <label className="label text-black">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={car?.photo}
              className="input w-full border bg-gray-50 text-black"
              placeholder="Photo URL"
              required
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl  text-black "
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
