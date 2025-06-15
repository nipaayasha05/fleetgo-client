import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import RecentCar from "./RecentCar";
import Banner from "./Banner";
import About from "./About";
import Animation from "./Animation";
import Offers from "./Offers";

const Home = () => {
  const recentCars = useLoaderData();
  // console.log(recentCars);

  const [about, setAbout] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);

  useEffect(() => {
    fetch("/offer.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div>
      {" "}
      <Banner></Banner>
      <div>
        <h3 className="text-3xl text-center font-bold py-5"> Why Choose Us?</h3>
        <About about={about}></About>
      </div>
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
      <div>
        <Animation></Animation>
      </div>
      <div>
        <h3 className="text-3xl text-center font-bold py-5">
          Limited-Time Deals
        </h3>
        <Offers offers={offers}></Offers>
      </div>
    </div>
  );
};

export default Home;
