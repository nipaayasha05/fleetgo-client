import React from "react";
import loader from "../assets/lotties/loader.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        style={{ width: "100px", height: "200px" }}
        animationData={loader}
        loop={true}
      ></Lottie>{" "}
    </div>
  );
};

export default Loader;
