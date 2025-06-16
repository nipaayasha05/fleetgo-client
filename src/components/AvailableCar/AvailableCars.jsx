import React, { useEffect, useState } from "react";

import AvailableCard from "./AvailableCard";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    document.title = "FleetGo | Available Cars";
  }, []);

  return (
    <div className="container mx-auto">
      <AvailableCard cars={cars} setCars={setCars}></AvailableCard>
    </div>
  );
};

export default AvailableCars;
