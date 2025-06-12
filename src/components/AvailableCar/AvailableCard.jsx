import React, { useEffect, useState } from "react";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";
// import { useLoaderData } from "react-router";

const AvailableCard = ({ cars }) => {
  // const cars = useLoaderData();
  console.log(cars);
  const [toggle, setToggle] = useState([]);
  const [available, setAvailable] = useState([]);
  // console.log(ava);
  useEffect(() => {
    const availableCars = cars.filter(
      (car1) => car1.availability == "Available"
    );
    console.log(availableCars);
    setAvailable(availableCars);
  }, [cars]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" py-5">
      <div className="text-end">
        <button
          onClick={handleToggle}
          className="btn m-3 bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300  "
        >
          {toggle ? "Grid Views" : "List Views"}
        </button>
        {toggle ? (
          <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
            {available.map((ava) => (
              <GridLayout key={ava._id} ava={ava}></GridLayout>
            ))}
          </div>
        ) : (
          <div className="space-y-7 py-10">
            {available.map((ava) => (
              <ListLayout key={ava._id} ava={ava}></ListLayout>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableCard;
