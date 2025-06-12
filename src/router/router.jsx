import React from "react";
import MainLayout from "../layouts/MainLayout";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { createBrowserRouter } from "react-router";

import AddCar from "../components/AddCar";
import AvailableCars from "../components/AvailableCar/AvailableCars";
import MyCar from "../components/Mycar/MyCar";
import Update from "../components/Mycar/Update";
import Home from "../components/Home/Home";
import CarDetails from "../components/CarDetails/CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/recentCar"),
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "available-cars",
        Component: AvailableCars,
        // loader: () => fetch("http://localhost:3000/cars"),
      },
      {
        path: "add-car",
        Component: AddCar,
      },
      {
        path: "my-car",
        element: <MyCar />,
      },
      {
        path: "car-details/:id",
        loader: () => fetch(`http://localhost:3000/cars`),
        element: <CarDetails></CarDetails>,
      },
    ],
  },
]);

export default router;
