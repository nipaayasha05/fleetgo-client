import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <Loader></Loader>;
  }

  if (!user || !user?.email) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
