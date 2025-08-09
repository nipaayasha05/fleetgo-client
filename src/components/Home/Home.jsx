import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import RecentCar from "./RecentCar";
import Banner from "./Banner";
import About from "./About";

import Offers from "./Offers";
import Webs from "./Webs";

const Home = () => {
  const recentCars = useLoaderData();

  const [about, setAbout] = useState([]);
  const [offers, setOffers] = useState([]);
  const [webs, setWebs] = useState([]);

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

  useEffect(() => {
    fetch("/web.json")
      .then((res) => res.json())
      .then((data) => setWebs(data));
  }, []);

  useEffect(() => {
    document.title = "FleetGo | Home";
  }, []);

  return (
    <div className=" ">
      {" "}
      <Banner></Banner>
      <div>
        <h3 className="text-3xl text-center font-bold py-5"> Why Choose Us?</h3>
        <About about={about}></About>
      </div>
      <div className="  container mx-auto rounded-xl">
        <h3 className="text-3xl   text-center font-bold py-5">
          Latest Car Arrivals
        </h3>
        <div
          className="grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-4 container mx-auto   py-5"
        >
          {recentCars.map((car) => (
            <RecentCar car={car} key={car._id}></RecentCar>
          ))}
        </div>
      </div>
      <div className="">
        <h3 className="text-3xl text-center font-bold py-5">
          Track Record of Success
        </h3>
        <Webs webs={webs}></Webs>
      </div>
      <div className=" ">
        <h3 className="text-3xl text-center font-bold py-5">
          Limited-Time Deals
        </h3>
        <Offers offers={offers}></Offers>
      </div>
    </div>
  );
};

export default Home;
