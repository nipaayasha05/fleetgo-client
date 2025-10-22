import React, { useEffect, useState } from "react";
import TopCar from "./TopCar";

const TopCars = () => {
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-chi-gray.vercel.app/topCar`)
      .then((res) => res.json())

      .then((data) => setTopCars(data));
  }, []);

  useEffect(() => {
    document.title = "FleetGo | Best Rentals";
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-amber-500  pt-5 text-center">
        Best Rentals: Top Picks for You
      </h3>
      <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-4 gap-7 py-5">
        {topCars.map((topCar) => (
          <TopCar topCar={topCar} key={topCar._id} />
        ))}
      </div>
    </div>
  );
};

export default TopCars;
