import React, { useEffect, useState } from "react";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";
import { parse } from "date-fns";

const AvailableCard = ({ cars, setCars }) => {
  const [toggle, setToggle] = useState([]);
  const [available, setAvailable] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([]);
  // console.log(ava);
  useEffect(() => {
    const availableCars = cars.filter(
      (car1) => car1.availability == "Available"
    );
    // console.log(availableCars);
    setAvailable(availableCars);
  }, [cars]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/available-cars?search=${search}`)
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
    }

    if (type === "Lowest Price") {
      const sortedByPrice = [...cars].sort(
        (a, b) => a.dailyRentalPrice - b.dailyRentalPrice
      );
      setCars(sortedByPrice);
    }

    if (type === "Newest First") {
      const sortedByDate = [...cars].sort((a, b) => {
        const dateA = parse(a.date, "dd-MM-yyyy-HH:mm", new Date());
        const dateB = parse(b.date, "dd-MM-yyyy-HH:mm", new Date());
        return dateB - dateA;
      });
      setCars(sortedByDate);
    }
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-center mt-10 py-5">
        Available Cars
      </h3>
      <div className="flex sm:items-center justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <details className="dropdown ml-3 ">
            <summary className="btn w-32 h-12 m-1  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl text-black ">
              Sort By {sort ? sort : ""}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("Highest Price")}>
                  {" "}
                  Highest Price
                </a>
              </li>
              <li>
                <a onClick={() => handleSort("Lowest Price")}> Lowest Price</a>
              </li>
              <li>
                <a onClick={() => handleSort("Newest First")}>Newest First </a>
              </li>
            </ul>
          </details>

          <label className="input m-1">
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

        <div className="text-end">
          <button
            onClick={handleToggle}
            className="btn h-12 m-3 bg-gradient-to-r from-amber-300  to-amber-500 my-2  border-none rounded-3xl text-black  "
          >
            {toggle ? "Grid Views" : "List Views"}
          </button>
        </div>
      </div>
      {toggle ? (
        <div className="m-5 grid  md:grid-cols-2 lg:grid-cols-4 gap-7 py-5">
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
  );
};

export default AvailableCard;
