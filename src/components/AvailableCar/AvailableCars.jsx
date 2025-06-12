import React, { useEffect, useState } from "react";

import AvailableCard from "./AvailableCard";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";

const AvailableCars = () => {
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);
  // console.log(search);
  useEffect(() => {
    fetch(`http://localhost:3000/cars?search=${search}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [search]);
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-center mt-10">Available Cars</h3>
      <div className="text-center mt-7">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>

      <AvailableCard cars={cars}></AvailableCard>
    </div>
  );
};

export default AvailableCars;
