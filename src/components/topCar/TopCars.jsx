import React, { useEffect, useState } from "react";
import TopCar from "./TopCar";

const TopCars = () => {
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/topCar`)
      .then((res) => res.json())

      .then((data) => setTopCars(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-black pt-5 text-center">
        Top Cars
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
