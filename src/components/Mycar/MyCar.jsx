import React, { Suspense, use, useEffect, useState } from "react";
import MyCarList from "./MyCarList";
import { carsPromise } from "../../api/carsApi";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCar = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalcars, setTotalcars] = useState(0);

  // console.log(user.accessToken);

  useEffect(() => {
    document.title = "FleetGo | My Car";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!user.email) return;
      setLoading(true);
      try {
        const carsRes = await axiosSecure.get(`/cars?email=${user.email}`);
        setCars(carsRes.data);

        const countRes = await axiosSecure.get(
          `/cars-pagination?email=${user.email}`
        );
        setTotalcars(countRes.data.count);
      } catch (error) {
        console.error("Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.email]);

  // const

  if (loading) return <Loader />;

  return (
    <div>
      <h3 className="text-3xl text-amber-500 font-bold text-center mt-5 py-5">
        My Cars Collection
      </h3>

      <MyCarList cars={cars} />
    </div>
  );
};

export default MyCar;
