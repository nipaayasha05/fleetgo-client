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

  // console.log(user.accessToken);

  useEffect(() => {
    document.title = "FleetGo | My Car";
  }, []);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/cars?email=${user.email}`).then((res) => {
        setCars(res.data);
      });
      setLoading(false);
    }
  }, [user?.email]);

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
