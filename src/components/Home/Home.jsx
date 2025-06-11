import React from "react";
import { useLoaderData } from "react-router";
import RecentCar from "./RecentCar";

const Home = () => {
  const recentCars = useLoaderData();
  console.log(recentCars);
  return (
    <div>
      {" "}
      <h3 className="text-3xl text-center font-bold py-5">
        Latest Car Arrivals
      </h3>
      <div
        className="grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-7 py-5"
      >
        {recentCars.map((car) => (
          <RecentCar car={car} key={car._id}></RecentCar>
        ))}
      </div>
    </div>
  );
};

export default Home;
