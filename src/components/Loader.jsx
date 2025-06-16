import React from "react";
import loader from "../assets/lotties/loader.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        style={{ width: "200px", height: "500px" }}
        animationData={loader}
        loop={true}
      ></Lottie>{" "}
    </div>
  );
};

export default Loader;
