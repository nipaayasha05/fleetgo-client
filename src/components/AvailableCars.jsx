import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AvailableCard from "./AvailableCard";

const AvailableCars = () => {
  const cars = useLoaderData();
  const [available, setAvailable] = useState([]);
  console.log(cars);
  useEffect(() => {
    const availableCars = cars.filter((car) => car.availability == "active");
    setAvailable(availableCars);
  }, [cars]);

  return (
    <div className="container mx-auto">
      <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {available.map((ava) => (
          <AvailableCard key={ava._id} ava={ava}></AvailableCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
