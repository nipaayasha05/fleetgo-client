import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { compareAsc, format } from "date-fns";
import axios from "axios";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addCar = Object.fromEntries(formData);
    console.log(addCar);

    axios
      .post("http://localhost:3000/cars", addCar)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container p-3 lg:w-8/12  mx-auto py-5 mb-5">
      <h3 className="text-3xl font-bold  text-center py-10">
        Add Your Car Here
      </h3>
      <form
        onSubmit={handleSubmit}
        className="fieldset shadow-sm rounded-box shadow-gray-700 p-3 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4 hidden">
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
              className="input w-full border "
              placeholder="Location"
              value={format(new Date(), "MM-dd-yyyy-HH:mm")}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">Car Model</label>
            <input
              type="text"
              name="carModel"
              className="input w-full border "
              placeholder="Car Model"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">Daily Rental Price</label>
            <input
              type="text"
              name="dailyRentalPrice"
              className="input w-full border "
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
                  className="radio radio-neutral radio-xs"
                  value="active"
                  defaultChecked
                />
                <p>Active</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="availability"
                  className="radio radio-neutral radio-xs"
                  value="inactive"
                  defaultChecked
                />
                <p>Inactive</p>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">Vehicle Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              className="input w-full border "
              placeholder="Vehicle Registration Number"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">Features</label>
            <input
              type="text"
              name="features"
              className="input w-full border "
              placeholder="Features"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full border "
              placeholder="Description"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">bookingCount</label>
            <input
              type="text"
              name="bookingCount"
              className="input w-full border "
              placeholder="bookingCount"
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full border "
              placeholder="Location"
              required
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-gray-100 border-base-300 rounded-box my-2 border p-4">
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full border "
            placeholder="Photo URL"
            required
          />
        </fieldset>

        <input
          type="submit"
          className="btn w-full  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-200 "
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCar;
