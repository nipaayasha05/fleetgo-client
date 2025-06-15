import React from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { state } = useNavigate();
  return (
    <div>
      <div className="mb-20">
        <Navbar></Navbar>
      </div>
      <div
        className="
min-h-[calc(100vh-288px)]"
      >
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
};

export default MainLayout;
