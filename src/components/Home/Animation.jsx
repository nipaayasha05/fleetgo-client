import React from "react";
import carAnimation from "../../assets/lotties/Animation - 1749808032240.json";
import Lottie from "lottie-react";

const Animation = () => {
  return (
    <div
      className="container
     mx-auto "
    >
      {" "}
      <h3 className="text-3xl text-center font-bold py-5">
        {" "}
        Explore More with Every Drive
      </h3>
      <div className=" flex justify-center items-center  ">
        <Lottie
          style={{ width: "500px", height: "500px" }}
          animationData={carAnimation}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default Animation;
