import React from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const Offer = ({ offer }) => {
  // console.log(offer);
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.05, 0.9, 1.05, 1],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
        },
      }}
      className="hover:scale-100"
    >
      <div className="card bg-base-100 m-5 shadow-sm bg-gradient-to-t from-amber-200    to-amber-400 ">
        <div className="card-body items-center text-center">
          <div className=" h-[80px] sm:h-[250px]">
            <h2 className="card-title sm:text-xl">{offer.title}</h2>
            <p className="sm:text-xl"> {offer.description}</p>
          </div>

          <div className="card-actions">
            <NavLink
              to="/available-cars"
              className="btn   bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-3xl border-amber-200"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Offer;
