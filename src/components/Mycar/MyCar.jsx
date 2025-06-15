import React, { Suspense, use } from "react";
import MyCarList from "./MyCarList";
import { carsPromise } from "../../api/carsApi";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader";

const MyCar = () => {
  const { user } = use(AuthContext);
  // console.log(user.accessToken);
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mt-5 py-5">
        My Car Collection
      </h3>
      <Suspense fallback={`loading`}>
        <MyCarList carsPromise={carsPromise(user?.email)}></MyCarList>
      </Suspense>
    </div>
  );
};

export default MyCar;
