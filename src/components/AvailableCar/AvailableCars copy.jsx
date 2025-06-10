import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AvailableCard from "./AvailableCard";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";

const AvailableCars = () => {
  // const cars = useLoaderData();
  // const [available, setAvailable] = useState([]);
  // const [toggle, setToggle] = useState(false);

  // console.log(cars);
  // useEffect(() => {
  //   const availableCars = cars.filter((car) => car.availability == "active");
  //   setAvailable(availableCars);
  // }, [cars]);
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };
  return (
    <div className="container mx-auto">
      {/* <div>
        {cars.map((car) => (
          <AvailableCard car={car} key={car._id}></AvailableCard>
        ))}



      </div> */}

      <div>
        {/* <div
          onClick={handleToggle}
          className="btn  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-2 rounded-2xl border-amber-300 z-10"
        >
          Toggle View
        </div> */}
        {/* {toggle ? (
          <div>
            <GridLayout cars={cars} />
          </div>
        ) : (
          <div>
            <ListLayout />
          </div>
        )} */}
      </div>
      <h3 className="text-3xl font-bold text-center mt-10">Available Cars</h3>
      <AvailableCard></AvailableCard>
      {/* <div className="text-end mt-10">
        <button className="btn   bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-3 rounded-2xl border-amber-300 ">
          {toggle ? <GridLayout></GridLayout> : <ListLayout></ListLayout>}
        </button>
      </div> */}
      {/* 
      <div className="space-y-7 py-10">
        {available.map((ava) => (
          <ListLayout key={ava._id} ava={ava}></ListLayout>
        ))}
      </div> */}

      {/* <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {available.map((ava) => (
          <GridLayout key={ava._id} ava={ava}></GridLayout>
        ))}
      </div> */}
    </div>
  );
};

export default AvailableCars;
