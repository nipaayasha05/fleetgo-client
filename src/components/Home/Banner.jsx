import React from "react";
import carBanner from "../../assets/image/car-2.jpg";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center  relative bg-cover bg-center min-h-[85vh]  container mx-auto  my-2 rounded-2xl  "
        style={{ backgroundImage: `url(${carBanner})` }}
      >
        {" "}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-200  via-black  to-black opacity-80  "></div>
        <div className="absolute  m-5 ">
          <h3 className="  text-white py-5  text-3xl md:text-4xl lg:text-5xl   font-bold">
            Drive into the Moment. Stay for the Memories.
          </h3>
          <div className="text-start lg:text-center ">
            <NavLink
              to="/available-cars"
              className="btn z-50 font-bold  sm:p-5 sm:text-xl  -skew-x-1   bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-3xl border-amber-200"
            >
              View Available Cars
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
