import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddCar = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addCar = Object.fromEntries(formData);

    axiosSecure
      .post("https://assignment-11-server-chi-gray.vercel.app/cars", addCar)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {});
  };
  return (
    <div className="container p-3   mx-auto py-5 mb-5">
      <h3 className="text-3xl text-amber-500 font-bold  text-center py-10">
        Add Your Car Here
      </h3>
      <form
        onSubmit={handleSubmit}
        className="fieldset shadow-xl rounded-box border-2 border-gray-50  p-3 w-[400px] text-black sm:w-1/2 mx-auto "
      >
        <div className=" space-y-2">
          <fieldset className="fieldset bg-amber-50 border-gray-50 rounded-box border p-4 hidden">
            <label className="label  ">email</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input w-full border "
              placeholder="Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-amber-50 border-gray-50 rounded-box border p-4 hidden">
            <label className="label ">Current Date</label>

            <input
              type="text"
              name="date"
              className="input w-full border "
              placeholder="Location"
              value={format(new Date(), "dd-MM-yyyy-HH:mm")}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Car Model</label>
            <input
              type="text"
              name="carModel"
              className="input w-full   bg-gray-50 text-black border  "
              placeholder="Car Model"
              required
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Daily Rental Price</label>
            <input
              type="text"
              name="dailyRentalPrice"
              className="input w-full border bg-gray-50 text-black"
              placeholder="Daily Rental Price"
              required
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border w-full p-5">
            <label className="label">Availability</label>
            <div className="flex gap-5 ">
              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="availability"
                  className="radio radio-neutral radio-xs bg-gray-50 text-black"
                  value="Available"
                  defaultChecked
                />
                <p> Available</p>
              </div>

              <div className="flex gap-2 text-gray-500  ">
                <input
                  type="radio"
                  name="availability"
                  className="radio radio-neutral radio-xs bg-gray-50 text-black"
                  value="Unavailable"
                  defaultChecked
                />
                <p> Unavailable</p>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Vehicle Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              className="input w-full border bg-gray-50 text-black"
              placeholder="Vehicle Registration Number"
              required
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Features</label>
            <input
              type="text"
              name="features"
              className="input w-full border bg-gray-50 text-black"
              placeholder="Features"
              required
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Brand</label>
            <input
              type="text"
              name="brand"
              className="input w-full border bg-gray-50 text-black"
              placeholder="Brand"
              required
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Description</label>
            <textarea
              type="text"
              name="description"
              className="textarea w-full h-24 bg-gray-50 text-black"
              placeholder="Description"
              required
            ></textarea>
          </fieldset>
          <fieldset className="fieldset text-black   bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">bookingCount</label>
            <input
              type="text"
              name="bookingCount"
              className="input w-full border bg-gray-50 text-black"
              placeholder="bookingCount"
              defaultValue={0}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full border bg-gray-50 text-black"
              placeholder="Location"
              required
            />
          </fieldset>
        </div>
        <fieldset className="fieldset text-black  bg-amber-50 border-gray-50 rounded-box my-2 border p-4">
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full border bg-gray-50 text-black"
            placeholder="Photo URL"
            required
          />
        </fieldset>

        <input
          type="submit"
          className="btn w-full  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl text-black  "
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCar;
