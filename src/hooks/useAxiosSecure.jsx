import axios from "axios";
import React, { use, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const axiosSecure = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleLogOut } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        // console.log("error", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          handleLogOut();
          navigate("/signin");
        }
        return Promise.reject(err);
      }
    );
  }, [handleLogOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
