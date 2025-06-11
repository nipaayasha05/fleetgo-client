import React from "react";
import MainLayout from "../layouts/MainLayout";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { createBrowserRouter } from "react-router";

import AddCar from "../components/AddCar";
import AvailableCars from "../components/AvailableCar/AvailableCars copy";
import MyCar from "../components/Mycar/MyCar";
import Update from "../components/Mycar/Update";
import Home from "../components/Home/Home";

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
        path: "update",
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/cars/${params._id}`),
        element: <Update />,
      },
    ],
  },
]);

export default router;
