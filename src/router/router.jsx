import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "signin",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
