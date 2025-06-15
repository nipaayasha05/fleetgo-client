import React, { useEffect, useState } from "react";

import AvailableCard from "./AvailableCard";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";
import { formatDistance, parse } from "date-fns";

const AvailableCars = () => {
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);
  const [sort, setSort] = useState([]);
  // console.log(search);
  useEffect(() => {
    fetch(`http://localhost:3000/cars?search=${search}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [search]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Highest Price") {
      const sortedByPrice = [...cars].sort(
        (a, b) => b.dailyRentalPrice - a.dailyRentalPrice
      );
      setCars(sortedByPrice);
      console.log(sortedByPrice);
    }

    if (type === "Newest First") {
      const sortedByDate = [...cars].sort((a, b) => {
        const dateA = parse(a.date, "dd-MM-yyyy-HH:mm", new Date());
        const dateB = parse(b.date, "dd-MM-yyyy-HH:mm", new Date());
        return dateB - dateA;
      });
      setCars(sortedByDate);
      console.log(sortedByDate);
    }
  };

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
      <div>
        <details className="dropdown">
          <summary className="btn m-1">Sort By {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("Highest Price")}> Highest Price</a>
            </li>
            <li>
              <a onClick={() => handleSort("Newest First")}>Newest First </a>
            </li>
          </ul>
        </details>
      </div>
      <AvailableCard cars={cars}></AvailableCard>
    </div>
  );
};

export default AvailableCars;
