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
import MyBookings from "../components/MyBookings/MyBookings";
import Loader from "../components/Loader";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import TopCars from "../components/topCar/TopCars";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/recentCar"),
        hydrateFallbackElement: <Loader></Loader>,
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
      },
      {
        path: "top-car",
        Component: TopCars,
      },
      {
        path: "add-car",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "my-car",
        element: (
          <PrivateRoute>
            <MyCar />
          </PrivateRoute>
        ),
      },
      {
        path: "car-details/:id",
        loader: () => fetch(`http://localhost:3000/available-cars`),
        element: <CarDetails></CarDetails>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "my-bookings",

        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
