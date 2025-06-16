import React from "react";
import Web from "./web";
const Webs = ({ webs }) => {
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 sm:gap-7 ">
      {webs.map((web) => (
        <Web web={web} key={web.id}></Web>
      ))}
    </div>
  );
};

export default Webs;
