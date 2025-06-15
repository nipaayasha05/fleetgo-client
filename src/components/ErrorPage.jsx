import React from "react";
import error from "../assets/image/404-car.jpg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex m-5   py-20 flex-col justify-center items-center">
      <img className="h-[70vh] rounded-2xl" src={error} alt="" />
      <div className="py-5">
        <Link to="/">
          <button className="btn bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
