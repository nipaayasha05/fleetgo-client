import React from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { state } = useNavigate();
  return (
    <div className="bg-gray-50">
      <div className="mb-20 ">
        <Navbar></Navbar>
      </div>
      <div
        className="
min-h-[calc(100vh-288px)] bg-gray-50"
      >
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
        {/* <Outlet></Outlet> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
